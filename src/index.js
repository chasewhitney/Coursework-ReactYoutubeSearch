import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { API_KEY } from '../config.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('alvin kamara highlights 2018');
  };

  videoSearch = (term) => {
    console.log('searching:', term);
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
      console.log(videos);
      this.render();
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(video) => {this.setState({selectedVideo : video})}}
          />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('.container'));
