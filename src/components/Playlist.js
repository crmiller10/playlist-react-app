import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PlaylistItem from './PlaylistItem';

class Playlist extends Component {
  clickFavorite(index){
    this.props.toggleFavorite(index)
  }
  updateSearch(event){
    this.props.updateSearch(event);
  }

  render(){
    let items = this.props.items.map((item, index) =>
      <PlaylistItem key={index} song={item} toggleFavorite={ () =>
        this.props.toggleFavorite(index)}/>);

    return(
      <div className="col-sm-9">
        <div className="playlist">

          <SearchBar updateSearch={event => this.props.updateSearch(event)}/>

          <table className="table table-hover table-bordered table-responsive">
            <thead>
              <tr>
                <th className="text-center">Like</th>
                <th>Song Title</th>
                <th>Artist/Band</th>
                <th>Notes</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Playlist;
