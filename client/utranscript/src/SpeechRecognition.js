import React, {Component} from 'react'
import {connect} from 'react-redux';
import {speechHandler} from "./speechHandling/speechHandling";
import SpeechRecognition from 'react-speech-recognition'

const mapDispatchToProps = dispatch => ({dispatch})
const mapStateToProps = state => (state)

class Dictaphone extends Component {

  constructor(props) {
    super(props);
    props.recognition.onresult = event => {
      if (event.results[0] && event.results[0].isFinal) {
        speechHandler(
            this.props.dispatch,
            this.props,
            event.results[0][0].transcript)
      }
    }
  }

  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      recognition
    } = this.props

    recognition.lang = "fi-FI"
    recognition.continuous = false
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (<div></div>)
  }
}

const
    foo = connect(mapStateToProps, mapDispatchToProps)(Dictaphone)
export default SpeechRecognition(foo)