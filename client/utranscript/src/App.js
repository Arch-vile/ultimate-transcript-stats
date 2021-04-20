import React, {Component} from 'react';
import './App.css';
import './SpeechRecognition'
import SpeechRecognition from "./SpeechRecognition";
import VideoPrompt from "./VideoPrompt";
import VideoPlayer from "./VideoPlayer";
import PlayerPrompt from "./PlayerPrompt";
import PlayerList from "./PlayerList";
import Dictated from "./Dictated";

import {connect} from 'react-redux';
import PointPrompt from "./PointPrompt";
import PlayersOnField from "./PlayersOnField";

const mapStateToProps = state => ({
  appState: state.appState
})

class App extends Component {
  render() {

    const {appState} = this.props;

    return (
        <div className="App">
          <header className="App-header">
            Ultimate ultimate transcript
          </header>
          <SpeechRecognition/>


          {appState === 'PROMPT_VIDEO' &&
          <div>
            <VideoPrompt/>
            <VideoPlayer/>
          </div>
          }

          {appState === 'PROMPT_PLAYERS' &&
          <div>
            <VideoPlayer/>
            <PlayerPrompt/>
            <PlayerList/>
          </div>
          }

          {appState === 'PROMPT_POINT' &&
          <div>
            <div className="flexContainer">
              <VideoPlayer  className="floatLeft"/>
              <PointPrompt className="float"/>
            </div>
            <div className="flexContainer">
              <PlayerList className="floatLeft"/>
            </div>

          </div>
          }
          <Dictated/>
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
