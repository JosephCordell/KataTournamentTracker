import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Groups from '../components/Groups'

export default function Divisions() {


    return (
        <div>
            <h1 className='fairwoodTitle'> Which division would you like to view? </h1>

            <div className='rank'>
                <Groups />
            </div>


        </div>
    )
}