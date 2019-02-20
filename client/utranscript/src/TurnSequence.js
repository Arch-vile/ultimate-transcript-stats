import React, { Component } from "react";
import { connect } from "react-redux";
import MicrophoneOn from "./MicrophoneOn";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const OffenceSequence = ({ turn }) => (
  <div>
    <span>offence: </span>
    {turn.throws.map(it => (
      <span>
        <span>{it.from}</span>
        <span>{!it.turn ? "➡️" : "❌️"}</span>
        {it.turn && <span>{it.to}</span>}
      </span>
    ))}
  </div>
);

const DefenceSequence = ({ turn }) => (
  <div>
    <span>defence: </span>
    {turn.interceptor}💪
  </div>
);

class TurnSequence extends Component {
  render() {
    const { isOffence } = this.props.turn;
    return isOffence ? (
      <OffenceSequence turn={this.props.turn} />
    ) : (
      <DefenceSequence turn={this.props.turn} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TurnSequence);
