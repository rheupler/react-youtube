import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBZAOICmYahmk5fgmWE5MLXju6jZQpYabA';

const App = () =>  {
  return  (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
