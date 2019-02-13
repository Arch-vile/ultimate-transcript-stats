import React, {Component} from 'react'
import {connect} from 'react-redux';
import MicrophoneOn from "./MicrophoneOn";

const mapStateToProps = state => ({state})

const mapDispatchToProps = dispatch => ({
  playersDone: () => dispatch(
      {
        type: 'PLAYERS_DONE'
      })
})

class PlayerPrompt extends Component {
  render() {
    return (
        <div className="borders">
          <span>Sanele pelaajien nimet</span>
          <MicrophoneOn/>
          <br/>
          <button type="button" onClick={this.props.playersDone}>Valmis</button>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPrompt);

