import React from 'react'

export const Cards3 = (props) => {
  return (
    <>
    <div>
    <img src={props.image}  alt='#'/>
    <h1 className='number-single-image'>{props.number}</h1>
    <h2 >{props.title}</h2>
    <p >{props.content}</p>
    </div>
    </>
  )
}
