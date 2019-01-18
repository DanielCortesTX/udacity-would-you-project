import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredDisplay extends Component {
    render() {
        /*
          @description page inherits data of user who made poll, poll data and the 
            answer that the authedUser selected. Information relative to the page is 
            extracted and used when necessary.
        */
        const { optionOne, optionTwo, author } = this.props.poll
        const total = optionOne.votes.length + optionTwo.votes.length
        const { userAnswer } = this.props
        const { avatarURL } = this.props.userData
        const checkAnswerOne = (userAnswer) => {
            if(userAnswer){
                return 'card card-body bg-dark text-white mb-2'
            } else {
                return 'card card-body mb-2'
            }
        }
        const checkAnswerTwo = (userAnswer) => {
            if(!userAnswer){
                return 'card card-body bg-dark text-white mb-4'
            } else {
                return 'card card-body mb-4'
            }
        }
        const calcPercent = (votes, total) => {
            return ( votes / total ) * 100
        }
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
                <div className={checkAnswerOne(userAnswer)}>
                  <h2 className="display-4">{optionOne.text}</h2>
                  <p className="lead">{optionOne.votes.length} out of {total} people voted for this. Or {calcPercent(optionOne.votes.length, total)}%</p>
                  {userAnswer && <p className="text-muted">Including you.</p>}
                </div>
                <h1 className="display-4">OR....</h1>
                <div className={checkAnswerTwo(userAnswer)}>
                  <h2 className="display-4">{optionTwo.text}</h2>
                  <p className="lead">{optionTwo.votes.length} out of {total} people voted for this. Or {calcPercent(optionTwo.votes.length, total)}%</p>
                  {!userAnswer && <p className="text-muted">Including you.</p>}
                </div>
            </div>
        )
    }
}

export default connect()(AnsweredDisplay)