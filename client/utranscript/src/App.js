import React, {Component} from 'react';
import './App.css';
import './SpeechRecognition'
import SpeechRecognition from "./SpeechRecognition";
import VideoPrompt from "./VideoPrompt";
import VideoPlayer from "./VideoPlayer";
import PlayerPrompt from "./PlayerPrompt";
import PlayerList from "./PlayerList";
import Dictated from "./Dictated";

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            Ultimate ultimate transcript
          </header>
          <SpeechRecognition/>
          <VideoPrompt/>
          <VideoPlayer/>
          <PlayerPrompt/>
          <PlayerList/>
          <Dictated/>
        </div>
    );
  }
}

export default App;
