import React, {Component} from 'react'
import Popup from 'reactjs-popup'

class WordPopup extends Component {

  render() {
    return (
        <div>
          <input type="radio" name="wordType" value="player"/><label>Pelaaja</label>
          <br/>
          <input type="radio" name="wordType" value="turn"/><label>Kääntö</label>
        </div>
    )
  }
}

class WordLabel extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      text
    } = this.props

    return (

        <Popup className="popup" trigger={<span>{text}</span>}
               position="top center">
          <WordPopup/>
        </Popup>
    )
  }
}

export default WordLabel