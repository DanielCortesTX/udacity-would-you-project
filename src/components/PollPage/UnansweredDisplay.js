import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../../actions/polls'

class UnansweredDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: ''
        }
    }
    handleOptionChange = (changeEvent) => {
        /*
          @description local state handles which option is selected.
        */
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }
    handleAnswer = (e) => {
        /*
          @description user selection is taken from local state and dispatched
            along with the id of the poll and the authedUser
        */
        e.preventDefault()
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
        /*
          @description page inherits authedUser Data and poll data. authedUser is
            gained from mapStateToProps. Information relative to the page is extracted
            and used when necessary.
        */
        const { author } = this.props.poll
        const { poll } = this.props
        const { avatarURL } = this.props.userData
        const isDisabled = this.state.selectedOption === ''
        return (
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
                        disabled={isDisabled}
                        >
                        Submit
                    </button>
                </form>
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