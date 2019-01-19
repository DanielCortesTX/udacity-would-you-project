import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PollDisplay extends Component {
  /*
  	@description poll options are trimmed and displayed. each is a link to
      display the polls
    */
  render() {
    const { id, optionOne, optionTwo } = this.props.poll
    const teaseOne = optionOne.text.substring(0, 10)
    const teaseTwo = optionTwo.text.substring(0, 10)
    return (
      <div className="card card-body card-preview">
        <h5 className="">Would you rather...</h5>
        <p>{teaseOne}......</p>
        <p>{teaseTwo}......</p>
        <Link 
          to={`/questions/${id}`}
          className="btn btn-primary btn-lg"
        >
          View full Poll
        </Link>              
      </div>
    )
  }
}

export default PollDisplay