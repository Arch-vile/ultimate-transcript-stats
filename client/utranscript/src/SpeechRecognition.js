import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from 'prop-types';

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
    console.log(recognition)

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
        <div>
          <button onClick={resetTranscript}>Reset</button>
          <span>{transcript}</span>
        </div>
    )
  }
}

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)