import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Groups from '../components/Groups'

export default function Divisions() {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get('/api/tournament/divisions')
                .then((response) => {
                    let data = []
                    for (let i = 0; i < response.data.length; i++) {
                        data.push(response.data[i]['belt_color'])                        
                    }
                    setGroups(data);

                })
                .catch((error) => console.log(error));
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1 className='fairwoodTitle'> Divisions page!</h1>

            I'll map divisions here!
            {groups.map((group) => (
                <Groups group={group} />
            ))}



        </div>
    )
}