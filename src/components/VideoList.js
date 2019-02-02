import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  return (
    <div className="ui relaxed divided list">
      {props.videos.map(video => {
        return (
          <VideoItem
            onVideoSelect={props.onVideoSelect}
            video={video}
            key={video.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
