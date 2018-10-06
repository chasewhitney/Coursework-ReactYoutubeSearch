import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  // {video} completely identical to above. "Says the arguement, this first object
  // in the arguements array has a property video, please grab that video and
  // declare a new variable called video.
  const imageUrl = video.snippet.thumbnails.default.url;


  return (
    <li onClick={()=>{onVideoSelect(video)}} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
