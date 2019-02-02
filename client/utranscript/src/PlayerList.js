import React, {Component} from 'react'
import {connect} from 'react-redux';

class PlayerLabel extends Component {

  render() {
    const {
      removePlayer, text
    } = this.props;

    return (<div>
      <span>{text}</span>
      <span onClick={() => removePlayer(text)}> [poista]</span>
    </div>)
  }
}

const mapStateToProps = state => ({
  players: state.players,
})

const mapDispatchToProps = dispatch => ({
  removePlayer: (name) => dispatch(
      {
        type: 'REMOVE_PLAYER',
        payload: {name}
      })
})

class PlayerList extends Component {

  removePlayer = (name) => {
    this.props.removePlayer(name)
  }

  render() {
    const listOfPlayers =
        this.props.players.map(name =>
            <PlayerLabel
                key={name}
                text={name}
                removePlayer={this.removePlayer}
            />);

    return (
        <div className="borders">
          <span>Pelaajat</span>
          <ul>
            {listOfPlayers}
          </ul>
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);

