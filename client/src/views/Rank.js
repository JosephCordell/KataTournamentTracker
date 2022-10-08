import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Table from '../components/Table';

export default function Rank() {

    const { rank, group } = useParams()
    const [participants, setParticipants] = useState([])
    const [weapons, setWeapons] = useState([])
    const [age, setAge] = useState('')
    const [rounds, setRounds] = useState(1)
    const [refresh, setRefresh] = useState(false)
    let childrenRanks = ['yellow', 'purple', 'blue']
    let link = '/divisions/' + rank + '/'


    
    const getData = (age) => {
        console.log(rounds);
        setRounds(rounds +1 )
        setAge(age)
        async function fetchData() {
            await axios.put('/api/tournament/divisions/group', {
                belt_color: rank,
                age_group: age
            })
                .then((response) => {
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
                    setWeapons(results)
                })
                .catch((err) => console.log(err));
            }
            fetchData()
            fetchData2()
        }
        
        useEffect(() => {
            if (group) getData(group)
            const something = setInterval(() => setRefresh(!refresh), 30000)
            return () => clearInterval(something)
        }, [])

    useEffect(() => {
        console.log('data Refreshed');
        if (age) getData(age)
        if (group) getData(group)
        const something = setInterval(() => setRefresh(!refresh), 30000)
        return () => clearInterval(something)
    }, [refresh])

    return (
        <div className='rank'>
            <br></br>
            {group? (
               <div>
               <h1 className='fairwoodTitle'> {rank} Belt Empty Hand Division </h1>
               <Table participants={participants} />
               <h1 className='fairwoodTitle'> {age} Weapons Division </h1>
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
                                <a href={link + 'Kids'}>
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

