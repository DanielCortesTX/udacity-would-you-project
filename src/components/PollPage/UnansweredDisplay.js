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
            <div className="display-component">
                <div className="card test p-4 mb-4">
                    <img
                        src={avatarURL}
                        alt={'?'}
                        className="avatar"
                    />
                    <h1 className="display-4">{author} asked: Would you rather...</h1>
                </div>
                <form onSubmit={this.handleAnswer}>
                    <div className="form-check pl-0">
                        <label>
                        <input type="radio" value="optionOne"
                        checked={this.state.selectedOption === 'optionOne'}
                        onChange={this.handleOptionChange}
                        className="form-check-input pr-1"/>
                        {poll && poll.optionOne.text}
                        </label>
                    </div>
                    <div className="pb-3">
                        <label>
                        <input type="radio" value="optionTwo"
                        checked={this.state.selectedOption === 'optionTwo'}
                        onChange={this.handleOptionChange}
                        className="form-check-input pr-1"/>
                        {poll && poll.optionTwo.text}
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isDisabled}
                        className="btn btn-primary"
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