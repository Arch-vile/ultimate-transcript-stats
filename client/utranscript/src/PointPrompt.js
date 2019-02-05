import React, {Component} from 'react'
import {connect} from 'react-redux';
import microphone from './microphone.svg'

const mapStateToProps = state => ({state})

const mapDispatchToProps = dispatch => ({
  playersDone: () => dispatch(
      {
        type: 'PLAYERS_DONE'
      })
})

class PointPrompt extends Component {

  render() {
    return (
        <div className="borders">
          <span>
            Hyökkäys / Puolustus
            <img src={microphone} className="microphone"/>
          </span><br/>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointPrompt);

