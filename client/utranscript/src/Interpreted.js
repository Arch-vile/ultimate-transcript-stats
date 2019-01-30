import React, {Component} from 'react'
import WordLabel from "./WordLabel";

class Interpreted extends Component {

  render() {
    const {
      transcript
    } = this.props

    const interpreted = ("mikko " + transcript).split(" ");

    const wordLabels = interpreted
    .map((word,index) => <span key={index+word}><WordLabel text={word}/>&nbsp;</span>)

    return (
        <div className="borders">
          {wordLabels}
        </div>
    )
  }
}

export default Interpreted