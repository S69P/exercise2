import React, { Component } from 'react'

export default class Likes extends Component {
 
  render() {
    const li = this.props.likes.map(like =>{
      return <li key={like.id}>  {like.name} </li>
    })
    return (
        <React.Fragment>
         {li.length > 0 ? li : <li>No likes yet</li>}
        </React.Fragment>
    )
  }
}
