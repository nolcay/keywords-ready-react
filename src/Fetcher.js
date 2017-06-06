import React, { Component } from 'react'

class Fetcher extends Component {
  constructor() {
    super();
    this.state = { imageUrl: "" };
    this.updateImageUrl = this.updateImageUrl.bind(this);
  }
  scan() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://keywordsready.com/api/analyzes", true);
    xhr.setRequestHeader("api-key", "12798hlAg7HJlQhGuRyTZOBuLAtt");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
    xhr.send(this.state.imageUrl);
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
