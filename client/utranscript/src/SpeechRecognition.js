import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from 'prop-types';
import Interpreted from "./Interpreted";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  recognition: PropTypes.object
}

class Dictaphone extends Component {
  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      recognition
    } = this.props

    recognition.lang = "fi-FI"
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
        <div>
          <div className="borders">
            <button onClick={resetTranscript}>Reset</button>
            <span>{transcript}</span>
          </div>
          <Interpreted transcript={transcript}/>
        </div>

    )
  }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)