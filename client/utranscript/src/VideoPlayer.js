import React, {Component} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  videoId: state.videoId
})

class VideoPlayer extends Component {

  render() {

    return (
        <div className={"w70"}>
          {
            this.props.videoId &&
            <div className="videoWrapper">
              <iframe title={"embeddedVideo"} id="ytplayer" type="text/html" width="560" height="349"
                      src={"https://www.youtube.com/embed/" + this.props.videoId + "?autoplay=true"}
                      frameBorder="0"></iframe>
            </div>}
        </div>
    )
  }
}

export default connect(mapStateToProps)(VideoPlayer);

