import React, {Component} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  videoId: state.videoId
})

class VideoPlayer extends Component {

  render() {

    return (
        <div>
          {
            this.props.videoId &&
            <div className="borders">
              <iframe title={"embeddedVideo"} id="ytplayer" type="text/html" width="640" height="360"
                      src={"https://www.youtube.com/embed/" + this.props.videoId + "?autoplay=true"}
                      frameBorder="0"></iframe>
            </div>}
        </div>
    )
  }
}

export default connect(mapStateToProps)(VideoPlayer);

