import React, {Component} from 'react';
import './App.css';
import './SpeechRecognition'
import SpeechRecognition from "./SpeechRecognition";
import VideoPrompt from "./VideoPrompt";
import VideoPlayer from "./VideoPlayer";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            Ultimate ultimate transcript
          </header>
          <div className="borders">
            <SpeechRecognition/>
          </div>
          <VideoPrompt/>
          <VideoPlayer/>

        </div>
    );
  }
}

export default App;
