import React from 'react'
import Cards from '../Components/Cards'
import Cards1 from '../Components/Cards1'
import Cards2 from '../Components/Cards2'
import {BsArrowRight,BsArrowDown} from"react-icons/bs"
// import data from '../Components/Data'
// import data1 from '../Components/Data1'
// import data2 from '../Components/Data2'
import { Appnavbar } from '../Components/Appnavbar'
import { Cards4 } from '../Components/Cards4'
// import data4 from '../Components/Data4'
import {useNavigate} from 'react-router-dom'
import data3 from '../Components/Data3'
import { Cards3 } from '../Components/Cards3'
import { useState } from 'react'
import { useEffect } from 'react'
export const Home = () => {
  let navigate=useNavigate()
  const NavFunction=()=>{
    navigate('/Navigatepage')

  }

  const [post,setPost]=useState('')
  const [post1,setPost1]=useState('')
  const [post2,setPost2]=useState('')
  const [post3,setPost3]=useState('')
  useEffect(()=>{
    fetch('https://node-backend-project-1wnx3825i-ramanakorada2611.vercel.app/homeLatestPosts').then(response=>response.json())
    .then(json=>setPost(json))
  },[])
  useEffect(()=>{
    fetch('https://node-backend-project-1wnx3825i-ramanakorada2611.vercel.app/homeArticles').then(response=>response.json())
    .then(json=>setPost1(json))
  },[])
  useEffect(()=>{
    fetch('https://node-backend-project-1wnx3825i-ramanakorada2611.vercel.app/homePosts').then(response=>response.json())
    .then(json=>setPost2(json))
  },[])
   useEffect(()=>{
    fetch('https://node-backend-project-1wnx3825i-ramanakorada2611.vercel.app/homestories').then(response=>response.json())
    .then(json=>setPost3(json))
  },[])
  return (
    <><Appnavbar/>
    <div className='grid-container container' onClick={NavFunction}>
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
<br></br>
<h1 className='container again1'>The Latest Posts</h1>
<div className="  red-line1 "></div><br></br>

   <div className="card_container container" onClick={NavFunction}>
     {
    post && post.map((val)=>{
      return <Cards  image={val.image} title={val.title} descripition={val.descripition} date={val.date}
      />
     })
    }
  </div>

<h1 className='container again2'>The Latest Articles</h1>
<div className="red-line2 "></div><br></br>

<div className='column-card-container'onClick={NavFunction} >
 <div className='modified-container'>
{
  post1 && post1.map((item)=>{
    return(
      <Cards1 name={item.name} image={item.image} descripition={item.descripition} date={item.date}/>
    )
  })
} </div>

  <div className='load-more container'>
    <p><span className='text-danger ' onClick={NavFunction}><BsArrowDown/></span>LOAD MORE</p>
  </div>
  <div className='Advetisement '>Advetisement</div>
</div> 
<div className='column-card1-container container' onClick={NavFunction}>
  <br/>
<h2>Top Posts</h2><div/>
<div className="red-line3"></div><br/>

<div className='single-image'>
  {
    data3.map((item)=>{
      return(
        <>
        <Cards3 image={item.image} number={item.number} title={item.title} content={item.content}/>
        </>
      )
    })
  }
</div>


{
  post2 && post2.map((value)=>{
    return(
      <><hr/>
      <Cards2 image ={value.image} number={value.number} date={value.date} name={value.name} />
      </>
    )
  })
}
</div><br/><br/>

<div className='center-image-container  ' onClick={NavFunction} style={{border:"none"}} >
 <div className='center-image4'>
    <h2 className='text4 text-dark'>Lorem ipsum dolor sit amet.</h2><br/><br/>
     <p className='text4-date '>Travel/ November 26</p>
  </div>
</div>
<br/><br/>

<div className='story-container container' >
<h2 >Top Stories</h2>
<div className="red-line4"></div><br/>
</div>

<div className='backend-container ' onClick={NavFunction}>
{
  post3 && post3.map((item)=>{
    return(
   <>
    <Cards4 name= {item.name}  content={item.content} date={item.date}/>  
  </>
    )
  })
  
}
</div>


<hr className='container'/>
<br/>

<div className='view-more  container'>
<p>VIEW MORE<span className='text-danger ms-2 ' onClick={NavFunction}><BsArrowRight/></span></p>
</div>
    </>
  )
}

