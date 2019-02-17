import React, { Component } from "react";
import { connect } from "react-redux";
import MicrophoneOn from "./MicrophoneOn";
import PlayersOnField from "./PlayersOnField";

const mapStateToProps = state => ({ currentPoint: state.currentPoint });

const mapDispatchToProps = dispatch => ({});

export class ControlWord extends Component {
  render() {
    return <span className="controlWord">{this.props.children}</span>;
  }
}

const PointType = ({ currentPoint }) =>
  !currentPoint.type ? (
    <div>
      <span>Hyökkäys / Puolustus</span>
      <MicrophoneOn />
    </div>
  ) : (
    <ControlWord>
      {currentPoint.type === "offence" ? "Hyökkäys" : "Puolustus"}
    </ControlWord>
  );

class PointPrompt extends Component {
  render() {
    return (
      <div className="borders">
        <PointType currentPoint={this.props.currentPoint} />
        <br />
        <PlayersOnField/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointPrompt);
