// import { response } from 'express';
import React from 'react';
// import axios from 'axios'
import './style.css';


const Groups = () => {
    // const [groups, setGroups] = useState([])
    const order = ["White", "Yellow", "Purple", "Blue", "Green", "Brown"]

    // useEffect(() => {
    //     async function fetchData() {
    //         await axios.get('/api/tournament/divisions')
    //         .then((response) => {
    //             let data = []
    //             for (let i = 0; i < response.data.length; i++) {
    //                 data.push(response.data[i]['belt_color'])
    //             }
    //             setGroups(data);
    //         })
    //         .catch((error) => console.log(error));
    //     }
    //     fetchData()
    // }, [])

    return (
        <div className='ranks'>
            {order.map((group, i) => (
                <a href={'/divisions/' + group} key={i}>
                    <h1 className={'btn btn-primary btn-block'}>{group}</h1>
                </a>
            ))}
        </div>
    )
}

export default Groups