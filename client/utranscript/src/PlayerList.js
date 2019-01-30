import React, {Component} from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  players: state.players,
})

class PlayerList extends Component {

  render() {
    const listOfPlayers =
            this.props.players.map(name => <li key={name}>{name}</li>)

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

export default connect(mapStateToProps)(PlayerList);

