import React, { Component } from 'react';
import FavoriteBtn from './FavoriteBtn';

class PlaylistItem extends Component {

  clickFavorite(index){
    this.props.toggleFavorite(index)
  }

  render() {
    let song = this.props.song

    return(
      <tr>
        <td className="text-center">
          <FavoriteBtn fav={song.favorite} onClick={index=>this.clickFavorite(index)}/>
        </td>
        <td>{song.Song}</td>
        <td>{song.Artist}</td>
        <td>{song.Notes}</td>
        <td>{song.User}</td>
      </tr>
    )
  }
}

export default PlaylistItem;