import React, {Component} from 'react'
import WordLabel from "./WordLabel";

class Interpreted extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      transcript
    } = this.props

    const interpreted = (transcript + " mikko").split(" ");

    const wordLabels = interpreted
    .map((word,index) => <WordLabel text={word} key={index}/>)

    return (
        <div className="borders">
          {wordLabels}
        </div>
    )
  }
}

export default Interpreted