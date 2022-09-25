// import { response } from 'express';
import React, { useState } from 'react';
import './style.css';


const Groups = ({ group }) => { 
    let link = '/divisions/' + group

    return (
        <div >
            <a href={link}>
            <h1> {group} </h1> 
            </a>
        </div>
    )
}

export default Groups