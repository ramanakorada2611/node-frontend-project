import React, { Component } from 'react'

 class Cards extends Component {
  constructor(props){
    super();
    this.state={
      name:props.name,
      img:props.img
    }
  }
  render() {
    return (
      <>
    <div className='cards-container'>
      <div className="card text-danger container">
        <img src={this.state.img} alt='#' className='card-image'/>
        <h1>{this.state.name}</h1>
        <div className='image-content container'>
          <h1 className='para-color1 container'>Lorem ipsum dolor sit amet.</h1>
          <p className='text-dark container'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid esse explicabo deserunt unde similique architecto animi nostrum. Magni, laborum. Iure ducimus tempora repellat iusto eaque expedita? Eius dolorem dolores iste.</p>
          <p className='container text-dark'>Travel/ November 26</p>
       </div>
      </div>
    </div>
      </>
    )
  }
}
export default Cards