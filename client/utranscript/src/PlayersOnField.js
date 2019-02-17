import React, { Component } from "react";
import { connect } from "react-redux";
import MicrophoneOn from "./MicrophoneOn";

const mapStateToProps = state => ({
  currentPoint: state.currentPoint,
  players: state.players
});

const mapDispatchToProps = dispatch => ({});

class PlayersOnField extends Component {
  render() {
    return (
      <div className="borders">
        <ul>
          {this.props.currentPoint.players.map(player => (
            <li>{player}</li>
          ))}
        </ul>
        <br />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersOnField);
