import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './SpeechRecognition'
import SpeechRecognition from "./SpeechRecognition";
import PlayerList from "./PlayerList";

class App extends Component {




  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </header>
          <div className="borders">
            <SpeechRecognition/>
          </div>
          <PlayerList/>
          <div className="borders">
            hello holllo
          </div>
        </div>
    );
  }
}

export default App;
