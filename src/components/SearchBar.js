import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }

  handleTyping(event){
    this.setState({
      text: event.target.value,
    })
    this.props.updateSearch(event.target.value);
  }

  render(){
    return(
      <div className="searchbar w-50">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Search Songs..." value={this.state.text}
          onChange={ event => this.handleTyping(event)}/>
        </div>
      </div>
    )
  }
}

export default SearchBar;
