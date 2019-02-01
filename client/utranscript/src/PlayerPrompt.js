import React, {Component} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  appState: state.appState
})

const mapDispatchToProps = dispatch => ({})

class PlayerPrompt extends Component {

  render() {

    return (
        <div>
          {this.props.appState === "PROMPT_PLAYERS" &&
          <div className="borders">
            <span>Sanele pelaajien nimet</span><br/>
          </div>}
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPrompt);

