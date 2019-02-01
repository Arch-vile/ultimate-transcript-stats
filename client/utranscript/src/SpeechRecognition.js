import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'

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
        <div></div>
    )
  }
}

export default SpeechRecognition(Dictaphone)