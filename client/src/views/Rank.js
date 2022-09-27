import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function Rank() {

    const { rank, age } = useParams()
    let link = '/divisions/' + rank

    // const { age, setAge } = useState(25)

    console.log('test', age);

    /*     const changeAge = (age) => {
            setAge(age)
        } */


    useEffect(() => {
        if (age) {
            console.log('got age twice', age);
        }
    }, age)
    return (
        <div>
            <div>age {age}</div>
            {age ? (

                <div>
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
                    <a href={link + '/adults'}>

                        <button type="button" className={'btn btn-primary btn-block'}>
                            Adult/teen
                        </button>
                    </a>
                </div>
                </div>
            }
            <h1> Hello There</h1>
            <h1> General Kenobi</h1>
            {rank}
        </div>
    )
}

