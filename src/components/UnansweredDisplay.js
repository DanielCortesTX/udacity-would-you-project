import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/polls'

class UnansweredDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: ''
        }
    }
    handleOptionChange = (changeEvent) => {
        // console.log(changeEvent.target.value)
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }
    handleAnswer = (e) => {
        e.preventDefault()
        console.log(this.state.selectedOption)
        const answer = this.state.selectedOption
        const qid = this.props.poll.id
        const { authedUser, dispatch } = this.props
        dispatch(handleQuestionAnswer({
            qid,
            authedUser,
            answer
        }))
    }
    render() {
        const { author } = this.props.poll
        const { poll, authedUser } = this.props
        const { avatarURL } = this.props.userData
        return (
            <div>  
                    <div>
                <h2>Would you rather...</h2>
                <div className="answer-user-display">
                    <img 
                        src={avatarURL}
                        alt={'?'}
                        className="avatar"
                    />
                    <h4>{author} asked:</h4>
                </div>
                <form onSubmit={this.handleAnswer}>
                <h2>{poll.author} says</h2>
                <h4>Would you rather...</h4>
                    <div>
                        <label>
                        <input type="radio" value="optionOne"
                        checked={this.state.selectedOption === 'optionOne'}
                        onChange={this.handleOptionChange}/>
                        {poll && poll.optionOne.text}
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" value="optionTwo"
                        checked={this.state.selectedOption === 'optionTwo'}
                        onChange={this.handleOptionChange}/>
                        {poll && poll.optionTwo.text}
                        </label>
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>  
                </div>
            </div>
                
        )
    }
}

function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(UnansweredDisplay)

// <p>Unanswered Page</p>
//                     <p>{author}</p>
//                     <p>{optionOne.text}</p>
//                     <p>{optionTwo.text}</p>

// optionOne, optionTwo, author