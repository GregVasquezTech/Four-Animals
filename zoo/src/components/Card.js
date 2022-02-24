import React from 'react'
import './Card.css'

function Card({name, image, info, link}) {
    // Function that sends the user to the Pokemon's bio page
    const onClick = () => {
        console.log('You chose', name)
        window.open(link)
      }
  return (
    <div className='card-container'>
        <div className="image-container">
            <img src={image} alt = '' />
        </div>
        <div className="card-content">
            <div className="card-name">
                <h2>{name}</h2>
            </div>
            <div className="card-info">
                <p>{info}</p>
            </div>
        </div>
        <div className="btn">
            <button
            onClick={onClick}>
                <a>
                    Read more
                </a>
            </button>
        </div>
    </div>
  )
}

export default Card