import React, { Component } from 'react';
import Navbar from './Navbar';
import Playlist from './Playlist';
import PlaylistForm from './PlaylistForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: "",
      playlist: [{
        Song: "Morning Dew",
        Artist  : "Grateful Dead",
        Notes: "Made famous by the Grateful Dead",
        User: "John",
        favorite: false
      }, {
        Song: "Wave of Mutilation (UK Surf)",
        Artist: "Pixies",
        Notes: "From albumn Complete B Sides",
        User: "Mike",
        favorite: true
      },
      {
        Song: "City Of Dreams",
        Artist: "Talking Heads",
        Notes: "Sand In The Vaseline [Disc 2]",
        User: "Jack",
        favorite: false
      },
      {
        Song: "Fearless",
        Artist: "Pink Floyd",
        Notes: "From album Meddle",
        User: "Greg",
        favorite: false
      },
      {
        Song: "Slave to the Traffic Light",
        Artist: "Phish",
        Notes: "Live in Charleston, SC - 2010/10/16",
        User: "David",
        favorite: true
      }]
    }
  }

  addNewItem(song, artist, notes, user) {
    let item = {
      Song: song,
      Artist: artist,
      Notes: notes,
      User: user,
      favorite: false
    }

    let updatedList = this.state.playlist.slice();
    updatedList.push(item);
    this.setState({
      playlist: updatedList
    });
  }

  updateSearch(event){
    this.setState({
      text: event
    })
  }

  toggleFavorite(index){
    let updatedSong = this.state.playlist.slice(index, index + 1)
    if (updatedSong[0].favorite === false){
        updatedSong[0].favorite = true;

    } else if (updatedSong[0].favorite===true){
        updatedSong[0].favorite = false;
    }
    let chooseFavorite = this.state.playlist.slice();
    this.setState({
      playlist: chooseFavorite
    })
  }

  render() {

    let playlistItems = this.state.playlist
      .filter(item => item.Song.toLowerCase()
      .includes(this.state.text.toLowerCase()))
      .map(items => items);

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="content">
            <div className="container">
              <h6 className="mb-3">Add to Playlist</h6>
              <div className="row">

                <PlaylistForm playlist={playlistItems}
                add={(song, artist, notes, user) => this.addNewItem(song, artist, notes, user)} />

                <Playlist items={playlistItems}
                toggleFavorite={index => this.toggleFavorite(index)}
                updateSearch={event => this.updateSearch(event)} />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
