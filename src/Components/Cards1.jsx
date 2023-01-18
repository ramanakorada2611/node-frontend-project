import React from 'react'

const Cards1 = (props) => {
  return (
      <>
       <div className='col-cards-container '>
       <img src={props.image} alt="#" className='col-card-image'/>
       <div className='column-inside'>
       <h2>{props.name}</h2>
        <p>{props.descripition}</p><br/>
        <p>{props.date}</p>
        </div>
       </div>
      </>
  )
}
export  default Cards1

