import React, {Component} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  appState: state.appState
})

const mapDispatchToProps = dispatch => ({
  videoInserted: (urlOrId) => dispatch(
      {
        type: 'VIDEO_INSERTED',
        payload: urlOrId
      })
})

function isValidYoutube(videoIdOrUrl) {
  return true;
}

function getVideoId(videoIdOrUrl) {
  if (videoIdOrUrl.indexOf("http") != -1) {
    return /v=([^&]*)/.exec(videoIdOrUrl)[1]
  } else {
    return videoIdOrUrl;
  }
}

class VideoPrompt extends Component {

  onInput = (event) => {
    const videoIdOrUrl = event.target.value

    if (isValidYoutube(videoIdOrUrl)) {
      this.props.videoInserted(getVideoId(videoIdOrUrl))
    } else {
      console.log("Should handle the error maybe?")
    }
  }

  render() {

    return (
        <div>
          {this.props.appState === "PROMPT_VIDEO" &&
          <div className="borders">
            <span>Anna videon YouTube osoite tai id</span><br/>
            <input onChange={this.onInput}/>
          </div>}
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPrompt);

