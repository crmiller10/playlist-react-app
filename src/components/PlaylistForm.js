import React, { Component } from "react";

class PlaylistForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      song: "",
      artist: "",
      notes: "",
      user: ""
    }
  }
  handleSong(event) {
    this.setState({
      song: event.target.value,
    });
  }

  handleArtist(event) {
    this.setState({
      artist: event.target.value,
    });
  }

  handleNotes(event) {
    this.setState({
      notes: event.target.value,
    });
  }

  handleUser(event) {
    this.setState({
      user: event.target.value,
    });
  }
  handleAddSong() {
    this.props.add(this.state.song, this.state.artist, this.state.notes, this.state.user)
    this.setState({
      song: "",
      artist: "",
      notes: "",
      user: "",
    })
  }

  render(){

    return(
      <div className="col-sm-3">
        <div className="form">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Song Title" value={this.state.Song}
            onChange={event => this.handleSong(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Artist/Band" value = {this.state.Artist}
            onChange={event => this.handleArtist(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Notes..." value={this.state.Notes}
            onChange={event => this.handleNotes(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="User Name" value = {this.state.User}
            onChange={event => this.handleUser(event)}/>
          </div>
          <div className="form-group">
            <button className="btn btn-info" onClick={() => this.handleAddSong()}> Add to Playlist </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistForm;
