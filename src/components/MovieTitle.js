import React, { Component } from 'react'

export default class MovieTitle extends Component {
  render() {
    return (
      
        <h2>{this.props.movie.name}</h2>
      
    )
  }
}
