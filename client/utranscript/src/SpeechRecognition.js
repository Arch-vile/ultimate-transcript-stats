import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  transcripted: (transcript) => dispatch(
      {
        type: 'TRANSCRIPT',
        payload: transcript
      })
})

const mapStateToProps = state => (state)

class Dictaphone extends Component {

  dispatchTranscript = (event) => {
    if (event.results[0] && event.results[0].isFinal) {
      this.props.transcripted(event.results[0][0].transcript)
    }
  }

  constructor(props) {
    super(props);
    props.recognition.onresult = event => {
      this.dispatchTranscript(event)
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

const foo = connect(mapStateToProps,mapDispatchToProps)(Dictaphone)
export default SpeechRecognition(foo)