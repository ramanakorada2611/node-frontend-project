import React from 'react'
import Cards from '../Components/Cards'
import Cards1 from '../Components/Cards1'
import Cards2 from '../Components/Cards2'
import {BsArrowRight,BsArrowDown} from"react-icons/bs"
import data from '../Components/Data'
import data1 from '../Components/Data1'
import data2 from '../Components/Data2'
import { Appnavbar } from '../Components/Appnavbar'
import {useNavigate} from 'react-router-dom'
export const Food = () => {
  let navigate=useNavigate()
  const NavFunction=()=>{
    navigate('/Navigatepage')

  }
  return (
    <>
    <Appnavbar/>
<div onClick={NavFunction} style={{border:"none"}} >
<div className='grid-container container'>
  <div className='item1 '>
    <div  className='image1'>
      <h1 className='text-dark'>Lorem ipsum dolor sit amet.</h1><br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus commodi magnam, nisi tenetur repellat molestias quaerat qui obcaecati culpa.</p>
    </div>
  </div>
  <div className='item2'>
  <div  className='image2'>
  <h2 className='text-dark'>Lorem ipsum dolor sit.</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi.</p>
  </div>
  </div>
  <div className='item3'>
  <div  className='image3'>
  <h2 className='text-dark'>Lorem ipsum dolor sit.</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, modi.</p>
  </div>
  </div>
</div>
</div>
<br></br>
<h1 className='container again1'>The Latest Posts</h1>
<div className="  red-line1 "></div><br></br>
   <div onClick={NavFunction} style={{border:"none"}}>
   <div className="card_container container">
     {
     data.map((val)=>{
      return <Cards  img={val.image}/>
     })
    }
  </div>
  </div>
<h1 className='container again2'>The Latest Articles</h1>
<div className="red-line2 "></div><br></br>

<div onClick={NavFunction} style={{border:"none"}}>
<div className='column-card-container  '>
  {
    data1.map((value)=>{
      return (
        <><hr/>
      <Cards1 image={value.image}/>
      </>
      )
    })
  }
  <div className='load-more container'>
    <p><span className='text-danger '><BsArrowDown/></span>LOAD MORE</p>
  </div>
  <div className='Advetisement '>Advetisement
  </div>
</div> 
</div>

<div className='column-card1-container container ' onClick={NavFunction} style={{border:"none"}}>
  <br/>
<h2>Top Posts</h2><div/>
<div className="red-line3"></div><br/>

<img className="Extra-image "src="https://media.istockphoto.com/id/1325385617/photo/swiss-alps-seen-from-mount-kronberg-in-the-appenzell-alps.jpg?b=1&s=170667a&w=0&k=20&c=SKsr2XBfhXQwtRHkB2V7joT7_ilV5zhxEzjIml29iRY=" alt='#' />
<h1 className='number1'>1</h1>
<h2>Lorem ipsum dolor sit amet.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, provident!</p>
{
  data2.map((value)=>{
    return(
      <><hr/>
      <Cards2 image ={value.image} number={value.number}/>
      </>
    )
  })
}
</div><br/><br/>

<div className='center-image-container  ' onClick={NavFunction} style={{border:"none"}}>
 <div className='center-image4'>
    <h2 className='text4 text-dark'>Lorem ipsum dolor sit amet.</h2><br/><br/>
     <p className='text4-date '>Travel/ November 26</p>
  </div>
</div><br/><br/>

<div className='story-container container'>
<h2 >Top Stories</h2>
<div className="red-line4"></div><br/>
</div>

<div className='extra-flex-container '>
  <div className='flex-item'>
    <h3 style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!.</h3>
    <p style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quae ab architecto maxime dolores eveniet in earum mollitia aut explicabo?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod.</p>
    <p className='ms-2'>Travel/ November 26</p>
  </div>
  <div className='flex-item'>
  <h3 style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!.</h3>
    <p style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quae ab architecto maxime dolores eveniet in earum mollitia aut explicabo?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod.</p>
    <p className='ms-2'>Travel/ November 26</p>
  </div>
  <div className='flex-item'>
  <h3 style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dignissimos!.</h3>
    <p style={{padding:'10px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quae ab architecto maxime dolores eveniet in earum mollitia aut explicabo?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quod.</p>
    <p className='ms-2'>Travel/ November 26</p>
  </div>
</div><hr className='container'/>
<br/>

<div className='view-more  container' onClick={NavFunction} style={{border:"none"}}>
<p>VIEW MORE<span className='text-danger ms-2 '><BsArrowRight/></span></p>
</div>
      </>
  )
}

