import React, {Component} from 'react'
import Popup from 'reactjs-popup'

class WordPopup extends Component {

  playerSelected = () => {
    this.props.close()
    this.props.classifyCB(this.props.text,"PLAYER")
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

class WordLabel extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  classifyWord = (word,classOf) => {
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
              <WordPopup
                  close={close}
                  text={text}
                  classifyCB={this.classifyWord}
              />
          )
          }
        </Popup>
    )
  }
}

export default WordLabel