import React, { Component } from 'react'

class Fetcher extends Component {
  constructor() {
    super();
    this.state = { imageUrl: "" };
    this.updateImageUrl = this.updateImageUrl.bind(this);
  }
  scan() {
  // api call
  }
  updateImageUrl(e) {
    this.setState({ imageUrl: e.target.value })
  }
  render() {
    return (
      <div class="Fetcher">
        Image URL: <input type="text" onChange={evt => this.updateImageUrl(evt)}/>
        <button onClick={this.scan}>Scan</button>
      </div>
    )
  }
}

export default Fetcher;
