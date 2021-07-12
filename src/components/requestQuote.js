import React, { useState } from 'react'
import axios from 'axios'

function RrequestQuote() {
    const [requst, setRequest] = useState([])
    const submitHandler = (e)=>{
        const name = e.target.name
        const value= e.target.value
        setRequest({
            ...requst,
            [name] : value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3004/requsts',requst)
    }

    console.log(requst)
    return (
        <div className="request-quote">
        <section>
            <img src="https://purepng.com/public/uploads/large/purepng.com-cargo-truckvehiclestruckcargofreightlogistics-981525067510zp9ku.png" alt="" />
        </section>
        <section>
            <p>
                WE ARE MODERN LOGISTICS COMPANY
            </p>
            <h1>
                <span>Request An</span> Estimate
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum tempora aut recusandae at? Temporibus quasi laboriosam dolores nisi! Sequi.
            </p>
            <form action="" id="reqQuoteForm" autoComplete="off" onSubmit={onSubmit}>
                <section className="name-and-email">

                    <div>
                        <label htmlFor="fullname"></label>
                        <input type="text" name="fullname" placeholder="Full name" onChange={submitHandler} />
                   
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="text" name="email" placeholder="Email Address" onChange={submitHandler} />
           
                    </div>
                    
                </section>
                <section id="serviceType">
                    <label htmlFor="serviceType"></label>
                    <select id="serviceType" name="serviceType"  onChange={submitHandler}>
                        <option value="">select service Type</option>
                        <option value="road">Road Transport</option>
                        <option value="air">Air servises</option>
                        <option value="wherhousing">Wherhousing</option>
                    </select>
                </section>
                <section id="location">
                    {/* <label for="yourLocation"></label> */}
                    <select name="location" id="yourLocation" onChange={submitHandler}>
                            <option value="">select your location</option>
                            <option value="Sr Nagar"> Sr Nagar</option>
                            <option value="Ameerpet"> Ameerpet</option>
                            <option value="LB nagar"> LB nagar</option>
                    </select>
                    <select name="destination" id="destination" onChange={submitHandler}>
                            <option value="">select your destination</option>
                            <option value="Sr Nagar"> Sr Nagar</option>
                            <option value="Ameerpet"> Ameerpet</option>
                            <option value="LB nagar"> LB nagar</option>
                    </select>
                </section>
                <button onClick={submitHandler}>submit</button>
            </form>
        </section>
    </div>
    )
}

export default RrequestQuote
