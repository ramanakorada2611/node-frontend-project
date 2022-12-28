import React, { Component } from 'react'

export default class Cards1 extends Component {
    constructor(props){
        super();
        this.state={
            name:props.name,
            image:props.image
        }
    }
  render() {
    return (
      <>
       <div className='col-cards-container '>
       <img src={this.state.image} alt="#" className='col-card-image'/>
       <h1>{this.state.name}</h1>
       <div className='column-inside'>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet neque. Iste rem temporibus, inventore minus officiis praesentium ea. Iusto.</p><br/>
        <p>Travel/ November 26</p>
        </div>
       </div>
      </>
    )
  }
}
