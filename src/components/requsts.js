import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Requsts() {
    const [requsts, setRequsts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3004/requsts').then(responce => setRequsts(responce.data))
    },[])
    console.log(requsts)
    return (
        <div className="text-center">
            <h1>Quotation Requsts</h1>
            {
                requsts.map(requst =>{
                    return(
                        <div className="reust-card" key={requst.id}>
                            <h1>name:{requst.fullname}</h1>
                            <h3>Email:{requst.email}</h3>
                            <p>service Type:{requst.serviceType}</p>
                            <p>Location:{requst.location}</p>
                            <p>Destination:{requst.destination}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Requsts
