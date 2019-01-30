import React, {Component} from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addPlayer: () => dispatch({type: 'ADD_PLAYER', payload: {name: 'jaakkko'}})
})

class WordPopup extends Component {

  playerSelected = () => {
    this.props.close()
    this.props.addPlayer()
  }

  render() {
    return (
        <div>
          <label>{this.props.text}</label>
          <br/>
          <input type="radio" name="wordType" value="player"
                 onClick={this.playerSelected}/><label>Pelaaja</label>
          <br/>
          <input type="radio" name="wordType"
                 value="turn"/><label>Kääntö</label>
        </div>
    )
  }
}

const WWW = connect(state => ({}),mapDispatchToProps)(WordPopup)



class WordLabel extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  classifyWord = (word, classOf) => {
    console.log(`Classified word ${word} as ${classOf}`)
  }

  render() {
    const {
      text
    } = this.props

    return (
        <Popup className="popup" trigger={<span>{text}</span>}
               position="top center">
          {close => (
              <WWW
                  close={close}
                  text={text}
              />
          )
          }
        </Popup>
    )
  }
}

export default WordLabel