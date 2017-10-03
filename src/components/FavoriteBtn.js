import React, { Component } from 'react';

class FavoriteBtn extends Component {

  handleClick(){
    this.props.onClick(this.props.fav)
  }

  render(){
    if (this.props.fav === false){
      return (
        <span className="favorite" onClick={event => this.handleClick()}> &#9825; </span>
      )
    }
    if (this.props.fav === true){
      return (
        <span className="favorite" onClick={event => this.handleClick()}> &#9829; </span>
      )
    }
  }
}
export default FavoriteBtn;