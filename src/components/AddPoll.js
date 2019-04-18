import React, { Component } from 'react'
import { handleSaveQuestion } from '../actions/polls'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  onTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    /*
    	@description takes option one and two text from local state
        dispatches information to reducer along with the authedUser 
    */        
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props
    dispatch(handleSaveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }))
    this.props.history.push('/')
  }
  render(){
    const { optionOneText, optionTwoText } = this.state
    const isDisabled = optionOneText === '' || optionTwoText === ''
      return (
        <div className="container">
          <div className="display-component my-5">
            <h1 className="display-4 pb-4">Would you rather...</h1>
            <form onSubmit={this.handleSubmit} className="drop-trim">
              <div className="form-group pb-3">
                <label className="lead">Option One: </label>
                  <input
                    type="text"
                    value={optionOneText}
                    name="optionOneText"
                    onChange={this.onTextChange}
                    className="full-trim form-control"
                  />
              </div>
              <div className="form-group pb-3">
                <label className="lead pt-2">Option Two: </label>
                <input
                  type="text"
                  value={optionTwoText}
                  name="optionTwoText"
                  onChange={this.onTextChange}
                  className="full-trim form-control"
                />
              </div>
              <button
                type='submit'
                disabled={isDisabled}
								className="btn btn-primary"
							>
								Submit
							</button>
            </form>
          </div>
        </div>
      )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(AddPoll))