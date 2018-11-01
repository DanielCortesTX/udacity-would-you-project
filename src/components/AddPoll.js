import React, { Component } from 'react'
import { handleSaveQuestion } from '../actions/polls'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AddPoll extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleOne = (e) => {
        /*
          @description handleOne and Two sets local state for user input
        */
        const optionOneText = e.target.value

        this.setState(() => ({
            optionOneText
        }))
    }
    handleTwo = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))
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
            <div className="display-polls">
            <h2>Would you rather...</h2>
            <form onSubmit={this.handleSubmit}>
                <p>Option One: </p>
                <input
                type="text"
                value={optionOneText}
                onChange={this.handleOne}
                />
                <p>Option Two: </p>
                <input
                type="text"
                value={optionTwoText}
                onChange={this.handleTwo}
                />
                <button
                type='submit'
                disabled={isDisabled}
                >Submit</button>
            </form>
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