import React, { Component } from 'react'
import MovieTitle from './MovieTitle'
import Likes from './Likes'
import Whatshot from '@material-ui/icons/Whatshot';


export default class MovieComponent extends Component {



  render() {

    let likes = []
    this.props.profiles.forEach(profile => {
      if (profile.favoriteMovieID ===  String(this.props.movie.id)){
        likes.push(this.props.users[profile.userID])
      }     

    })
    
    return (
      <div>
        
          <MovieTitle movie={this.props.movie}/>
          <Whatshot/> Liked By:
          <ul  style={{"listStyleType": "none"}}>
            <Likes likes={likes}  />
          </ul>
        
      </div>
    )
  }
}
