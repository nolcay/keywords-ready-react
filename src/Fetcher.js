import React, { Component } from 'react'
import API from './apiDetails.js'

class Fetcher extends Component {
  constructor() {
    super();
    this.state = { imageUrl: "" };
    this.updateImageUrl = this.updateImageUrl.bind(this);
    this.scan = this.scan.bind(this);
  }
  scan() {
    // console.log("Scanning...")
    let xhr = new XMLHttpRequest();
    xhr.open("POST", API[0], true);
    xhr.setRequestHeader("api-key", API[1]);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
    xhr.send("url=" + this.state.imageUrl);
  }
  updateImageUrl(e) {
    this.setState({ imageUrl: e.target.value })
  }
  render() {
    return (
      <div class="Fetcher">
        Image URL: <input type="text" onChange={evt => this.updateImageUrl(evt)}/><br/>
        <button onClick={this.scan}>Scan</button>
      </div>
    )
  }
}

export default Fetcher;
