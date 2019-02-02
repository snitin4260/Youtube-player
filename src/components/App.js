import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onFormSubmit("momina");
  }
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  onFormSubmit = async val => {
    let response = await youtube.get("/search", {
      params: {
        q: val,
        type: "video"
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleFormSubmit={this.onFormSubmit} />
        <div className="ui grid container">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
