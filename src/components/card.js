import React from 'react'
import {Link} from 'react-router-dom'

function Card() {
    const cards = [
        {
            icon:"fas fa-shopping-basket",
            title:"IMPORT EXPORT GOODS",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati, vel maiores ad impedit quod voluptatum sit suscipit!"
        },
        {
            icon:"fas fa-truck",
            title:"FAST DELIVERY NETWORK",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati, vel maiores ad impedit quod voluptatum sit suscipit!"
        },
        {
            icon:"fas fa-user-tie",
            title:"WELL QUALIFIED STAFF",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati, vel maiores ad impedit quod voluptatum sit suscipit!"
        }
    ]
    return (
        <div class="card">

            {
                cards.map(card =>{
                    return(
                        <div>
                            <i className={card.icon}></i>
                            <h1>{card.title}</h1>
                            <p>{card.desc}</p>
                            <Link>READ MORE</Link>
                        </div>
                    )
                })
            }
            {/* <div>
                <i className="fas fa-shopping-basket"></i>
                <h1>IMPORT EXPORT GOODS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati, vel maiores ad impedit quod voluptatum sit suscipit!</p>
                <Link>READ MORE</Link>
            </div>
            <div>
                <i class="fas fa-truck"></i>
                <h1>FAST DELIVERY NETWORK</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore perferendis officiis commodi est, voluptate dolorem? Numquam, repellat inventore!</p>
                <Link>READ MORE</Link>
            </div>
            <div class="last-chaild">
                <i class="fas fa-user-tie"></i>
                <h1>WELL QUALIFIED STAFF</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam minima officiis nisi obcaecati delectus odit porro autem voluptates.</p>
                <Link>READ MORE</Link>
            </div> */}
        </div>
    
    )
}

export default Card
