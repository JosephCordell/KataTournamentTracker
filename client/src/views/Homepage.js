import React, { useState, useEffect } from 'react'
import Groups from '../components/Groups'


export default function Homepage() {


    return (
        <div>
            <h1 className='fairwoodTitle'> Fairwood Martial Arts Tournament Tracker</h1>

            <h2 className='fairwoodTitle'> Choose a group to view </h2>
            
            <div className='rank'>
                <Groups />
            </div>
        </div>
    )
}