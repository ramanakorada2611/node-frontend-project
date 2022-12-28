import React, { Component } from 'react'

export default class Cards2 extends Component {
    constructor(props){
    super();
    this.state={
        number:props.number,
        image:props.image
    }
    }
  render() {
    return (
      <>
      <div className='cards-container2 '>
        <h1 className='numbers'>{this.state.number}</h1>
       <img src={this.state.image} className="cards2-image" alt='#'/>
        <div className='side-column'>
           <h3>Lorem ipsum dolor sit amet.</h3>
           <p>Travel/ November 26</p>
        </div>
      </div>
      </>
    )
  }
}
