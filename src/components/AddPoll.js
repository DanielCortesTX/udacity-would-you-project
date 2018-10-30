import React, { Component } from 'react'
import { handleSaveQuestion } from '../actions/polls'
import { connect } from 'react-redux'

class AddPoll extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleOne = (e) => {
        const optionOneText = e.target.value

        this.setState(() => ({
            optionOneText
        }))
        console.log(optionOneText)
    }
    handleTwo = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))
        console.log(this.state.optionTwoText)
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch, authedUser } = this.props

        dispatch(handleSaveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }))

        this.setState({

        })
    }
    render(){
        const { optionOneText, optionTwoText } = this.state
        const isDisabled = optionOneText === '' || optionTwoText === ''
        return (
            <div>
            <p>The Add page</p>
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

export default connect(mapStateToProps)(AddPoll)