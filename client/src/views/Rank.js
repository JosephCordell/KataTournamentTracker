import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Table from '../components/Table';
import EditScoreModal from '../components/EditScoreModal'


export default function Rank() {

    const { rank, group } = useParams()
    const [participants, setParticipants] = useState([])
    const [weapons, setWeapons] = useState([])
    const [age, setAge] = useState('')

    let childrenRanks = ['yellow', 'purple', 'blue']
    let link = '/divisions/' + rank + '/'




    const getData = (age) => {
        setAge(age)
        console.log('got age twice', age);
        async function fetchData() {
            await axios.put('/api/tournament/divisions/group', {
                belt_color: rank,
                age_group: age
            })
                .then((response) => {
                    console.log(response.data);
                    let results = response.data 
                    const comparePoints = (a,b) => {
                        return b.empty_score - a.empty_score 
                    }
                    results.sort(comparePoints)
                    setParticipants(results)
                })
                .catch((err) => console.log(err));
        }
        async function fetchData2() {
            await axios.put('/api/tournament/divisions/weapons', {
                age_group: age
            })
                .then((response) => {
                    let results = response.data 
                    const comparePoints = (a,b) => {
                        return b.weapon_score - a.weapon_score 
                    }
                    results.sort(comparePoints)
                    console.log('results', results);

                    setWeapons(results)
                })
                .catch((err) => console.log(err));
        }
        fetchData()
        fetchData2()
    }

    useEffect(() => {
        console.log(group);
        if (group) getData(group)
    }, [])

    return (
        <div className='rank'>
            <br></br>
            {group? (
               <div>
               <h1 className='fairwoodTitle'> {rank} Belt Empty Hand Division </h1>
               <Table participants={participants} />
               <h1 className='fairwoodTitle'> {age} Weapons division </h1>
               <Table participants={weapons} weapons={true} />
           </div>
            )
            
            : age ? (
                <div>
                    <h1 className='fairwoodTitle'> {rank} Belt Empty Hand Division </h1>
                    <Table participants={participants} />
                    <h1 className='fairwoodTitle'> {age} Weapons division </h1>
                    <Table participants={weapons} weapons={true} />
                </div>
            )
                :
                <div>
                    {childrenRanks.includes(rank.toLowerCase()) ?
                        <>{getData('Kids')}</>
                        :
                        (
                            <div className='rank'>
                                <h1 className='fairwoodTitle'> Choose an age group </h1>
                                <a href={link + 'kids'}>
                                <button type="button" className={'btn btn-primary btn-block'}>
                                    Kids
                                </button>
                                </a>
                                <br></br>
                                <a href={link + 'Adults'}>
                                <button type="button"  className={'btn btn-primary btn-block'}>
                                    Adult/teen
                                </button>
                                </a>
                            </div>)
                    }
                </div>
            }
        </div>
    )
}

