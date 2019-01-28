import React, {Component} from 'react'

const propTypes = {}

class PlayerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }

  render() {
    const {
      players
    } = this.state

    const listOfPlayers =
        players.length == 0 ?
            [<li>Valitse pelaajat sanellusta tekstistä</li>] :
            players.map(name => <li>{name}</li>)

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

PlayerList.propTypes = propTypes

export default PlayerList