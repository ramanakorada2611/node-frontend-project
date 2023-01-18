import React from 'react'
import { AiFillFacebook,AiFillGithub,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import data from '../Components/Data'
import Cards from '../Components/Cards'
import { useNavigate } from 'react-router-dom'
function Navigatepage() {
  let back=useNavigate()
  let Backfunction=()=>{
    back('/')
  }
  return (
    <>
    <header className='header-nav container'>
    <div className='top'>
    <p className='rotate' style={{color:"black"}}>The</p>
    <p className='siren' style={{color:"black"}}>Siren</p>
    </div>
    <button style={{border:"2px solid green",color:"green",height:"40px"}} onClick={Backfunction}>Get Start</button>
    </header>
    <br/>
    <center>
      <h1 className="fw-bolder">5 Ways To Animate Your React App</h1><br/>
      <div className='nav-container'>
        <div className='avatar-container'>
         <div>
         <p className='avatar-beside'>KORADA RAMANA</p>
         <p>NOV-26-2000 </p></div>
         </div>
         
         <div className='icons'>
           <AiFillFacebook/>
           <AiFillGithub/>
           <AiFillYoutube/>
           <AiFillInstagram/>
         </div>
      </div><br/>
      <img src='https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=0d5847e5-e6f5-4128-a6f0-a6418905ccae&api_key=CometServer1&access_token=1674016818_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_181a7d822fd204e9ac9262a76b1e74ece784d024' alt='#' className='avatar1 container'/>
      <div className='navdata'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam perferendis animi quisquam illum adipisci doloremque velit dolorem corporis magni. Cupiditate id perspiciatis, eaque exercitationem labore ipsam modi repellendus iste dolore dignissimos sequi mollitia consequatur culpa obcaecati nisi omnis quam ipsa doloribus nemo dolores! Sed nam, maxime pariatur maiores optio placeat distinctio nemo eveniet, molestias soluta voluptatum? Voluptatem explicabo quas, praesentium ab maxime placeat aut necessitatibus nisi earum, ullam qui vero modi, aperiam architecto! Sapiente, error! Nulla sapiente facere error ducimus! Sed nihil officia nulla. Deleniti blanditiis, nam cumque aperiam odio atque, praesentium accusamus consequatur suscipit ab, soluta aut ratione in!</p>
       <br/> <h3 className='navdata1'>Let's talk about them!</h3>
      </div>
      <img src='https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=8f6ecc24-5727-44ea-82da-6bd2ea85ab6a&api_key=CometServer1&access_token=1674016818_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_181a7d822fd204e9ac9262a76b1e74ece784d024' width="600px" alt='#' /><br/><br/><br/>
     
    </center><br/>
    <div className="card_container container">
     {
     data.map((val)=>{
      return <Cards   image={val.image} title={val.title} descripition={val.descripition} date={val.date}/>
     })
    }
  </div>
    </>
  )
}

export default Navigatepage