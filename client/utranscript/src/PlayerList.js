import React, {Component} from 'react'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  players: state.players,
  transcripts: state.transcripts
})

class PlayerList extends Component {

  render() {

    const allWords =
        this.props.transcripts
        .flatMap(it => it.split(" "))
        .flatMap(it => it.split("-"))
        .map(it => it.toLowerCase())

    const uniqueWords = new Set(allWords);

    const playerWords = [...uniqueWords]
    console.log(playerWords)
    const listOfPlayers =
        playerWords.map(name => <li key={name}>{name}</li>);

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

