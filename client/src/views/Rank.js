import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Table from '../components/Table';


export default function Rank() {

    const { rank } = useParams()
    const [participants, setParticipants] = useState([])
    const [weapons, setWeapons] = useState([])
    const [age, setAge ] = useState('')
    let link = '/divisions/' + rank
    let childrenRanks = ['yellow', 'purple', 'blue']

    const getData= (age) => {
        setAge(age)
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
                    .catch((err) => console.log(err));
            }
            async function fetchData2() {
                await axios.put('/api/tournament/divisions/weapons', {
                    age_group: age
                })
                    .then((response) => {
                        setWeapons(response.data)
                    })
                    .catch((err) => console.log(err));
            }
            fetchData()
            fetchData2()
    }

    return (
        <div>
            <div>currenge: {age} </div>
            {age ? (
                <div>
                    <h1 className='fairwoodTitle'> {rank} Belt Empty Hand Division </h1>
                    <Table participants={participants}  />
                    <h1 className='fairwoodTitle'> {age} Weapons division </h1>
                    <Table participants={weapons}  weapons={true}/>
                </div>
            )
                :
                <div>
                    {childrenRanks.includes(rank.toLowerCase()) ? 
                    <>{getData('Kids')}</>    
                    :
                    (<div>
                        WTF?
                          <button type="button" onClick={() => getData('Kids')} className={'btn btn-primary btn-block'}>
                                Kids
                                </button>
                                   

                            <button type="button" onClick={() => getData('Adults')} className={'btn btn-primary btn-block'}>
                                Adult/teen
                            </button> 
                    </div>)
                    }
                </div>
            }
        </div>
    )
}

