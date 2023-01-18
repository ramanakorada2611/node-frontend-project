import React from 'react'

export const Cards4 = (props) => {
  return (
<>
  <div className='content-container container'>
    <div className='style-content'>
    <h1 className='para-color1 container'>{props.name}</h1>
    <p className='text-dark container'>{props.content}</p>
    <p className='container text-dark'>{props.date}</p>
    </div>
   </div>
   </>
  )
}

//  {/* <div className='flex-item'>
//   <h3 style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!.</h3>
//     <p style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quae ab architecto maxime dolores eveniet in earum mollitia aut explicabo?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod.</p>
//     <p className='ms-2'>Travel/ November 26</p>
//   </div>
//   <div className='flex-item'>
//   <h3 style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!.</h3>
//     <p style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quae ab architecto maxime dolores eveniet in earum mollitia aut explicabo?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod.</p>
//     <p className='ms-2'>Travel/ November 26</p>
//   </div> */}