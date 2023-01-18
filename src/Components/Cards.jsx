import React from 'react'

export default function Cards(props) {
  return (
       <div className='cards-container'>
      <div className="card text-danger container">
        <img src={props.image}  alt='#' className='card-image'/>
        <div className='image-content container'>
          <h1 className='para-color1 container'>{props.title}</h1>
          <p className='text-dark container'>{props.descripition}</p>
          <p className='container text-dark'>{props.date}</p>
       </div>
      </div>
    </div>

  )
}
