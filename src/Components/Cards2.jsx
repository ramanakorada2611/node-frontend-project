import React from 'react'

export default function Cards2(props) {
  return (
      <>
      <div className='cards-container2 '>
        <h1 className='numbers'>{props.number}</h1>
       <img src={props.image} className="cards2-image" alt='#'/>
        <div className='side-column'>
           <h4>{props.name}</h4>
           {/* <h6>{props.d}</h6> */}<br/>
           <p>{props.date}</p>
        </div>
      </div>
      </>
  )
}
