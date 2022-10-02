import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Table from '../components/Table';


export default function Rank() {

    const { rank, age } = useParams()
    const [participants, setParticipants] = useState([])
    const [weapons, setWeapons] = useState([])
    const [sortState, setSortState] = useState(true);
    let link = '/divisions/' + rank

    useEffect(() => {
        if (age) {
            console.log('got age twice', age);
            async function fetchData() {
                await axios.put('/api/tournament/divisions/group', {
                    belt_color: rank,
                    age_group: age
                })
                    .then((response) => {
                        console.log(response.data);
                        setParticipants(response.data)
                    })
/*                 await axios.put('/api/tournament/divisions/group', {
                    belt_color: rank,
                    age_group: age
                })
                    .then((response) => {
                        console.log(response.data);
                        setParticipants(response.data)
                    }) */
            }
            fetchData()
        }
    }, [age])


    const sort = (column) => {
        const columnArray = column.split('.');
        const current =
            participants.length > 0 ? participants : participants;
        const updateSort = current.sort((a, b) => {
            const nameA =
                columnArray.length === 1
                    ? a[column]
                    : a[columnArray[0]][columnArray[1]];
            const nameB =
                columnArray.length === 1
                    ? b[column]
                    : b[columnArray[0]][columnArray[1]];
            if (nameA < nameB) {
                return sortState ? -1 : 1;
            }
            if (nameA > nameB) {
                return sortState ? 1 : -1;
            }
            return 0;
        });

        setParticipants(updateSort);
        setSortState(!sortState);
    };


    return (
        <div>
            {age ? (
                <div>
                    <h1 className='fairwoodTitle'>Empty hand division </h1>
                    <Table participants={participants} sort={sort} />
                    <h1 className='fairwoodTitle'>Weapons division </h1>
                    <Table participants={participants} sort={sort} />
                </div>
            )
                :
                <div>
                    <div>
                        <a href={link + '/kids'}>
                            <button type="button" className={'btn btn-primary btn-block'}>
                                Kids
                            </button>
                        </a>
                        <a href={link + '/adult'}>

                            <button type="button" className={'btn btn-primary btn-block'}>
                                Adult/teen
                            </button>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

