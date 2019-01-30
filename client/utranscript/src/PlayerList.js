import React, {Component} from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  players: state.playerReducer.players,
})

class PlayerList extends Component {

  render() {
    const listOfPlayers =
            this.props.players.map(name => <li key={name}>{name}</li>)

    return (
        <div className="borders">
          <span>Pelaajat</span>
          <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
          <ul>
            {listOfPlayers}
          </ul>
        </div>
    )
  }
}

export default connect(mapStateToProps)(PlayerList);

