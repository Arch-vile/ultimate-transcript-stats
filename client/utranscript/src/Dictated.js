import React, {Component} from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  transcripts: state.transcripts
})

class Dictated extends Component {

  render() {
    return (
        <div className="unimportant">
          <ul>
            {this.props.transcripts.map((t,index) => <div key={index}>{t}</div>)}
          </ul>
        </div>
    )
  }
}

export default connect(mapStateToProps)(Dictated);

