import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function Rank() {

    const { rank } = useParams()
    const { age, setAge } = useState()
    
    const changeAge = (age) => {
        setAge(age)
        getParticipants()
    }

    const getParticipants = () => {
        console.log('getting participants');
    }

    return (
        <div>
            {age ?
                (
                    <div>there is age</div>
                )
                :
                (
                    <div>
                        <div> There is no age</div>
                        <button type="button" onClick={() => changeAge('kids')} className={'btn btn-primary btn-block'}>
                            Kids
                        </button>
                        <button className={'btn btn-primary btn-block'}>
                            Adult/teen
                        </button>
                    </div>
                )

            }
            <h1> Hello There</h1>
            <h1> General Kenobi</h1>
            {rank}
        </div>
    )
}

