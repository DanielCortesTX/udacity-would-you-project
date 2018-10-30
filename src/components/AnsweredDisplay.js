import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredDisplay extends Component {
    render() {
        const { optionOne, optionTwo, author } = this.props.poll
        const total = optionOne.votes.length + optionTwo.votes.length
        const { userAnswer, userData } = this.props
        const { avatarURL } = this.props.userData
        console.log(userData)
        const checkAnswerOne = (userAnswer) => {
            if(userAnswer){
                return 'answer-box ans-selected'
            } else {
                return 'answer-box'
            }
        }
        const checkAnswerTwo = (userAnswer) => {
            if(!userAnswer){
                return 'answer-box ans-selected'
            } else {
                return 'answer-box'
            }
        }
        const calcPercent = (votes, total) => {
            return ( votes / total ) * 100 
        }
        return (
            <div className="standard-boundaries">
                <h2>Would you rather...</h2>
                <div className="answer-user-display">
                    <img 
                        src={avatarURL}
                        alt={'?'}
                        className="avatar"
                    />
                    <h4>{author} asked:</h4>
                </div>
                <div className={checkAnswerOne(userAnswer)}>
                  <h5>{optionOne.text}</h5>
                  <p>{optionOne.votes.length} out of {total} people voted for this. Or {calcPercent(optionOne.votes.length, total)}%</p>
                  {userAnswer && <p>Including you.</p>}
                </div>
                <h4>OR....</h4>
                <div className={checkAnswerTwo(userAnswer)}>
                  <h5>{optionTwo.text}</h5>
                  <p>{optionTwo.votes.length} out of {total} people voted for this. Or {calcPercent(optionTwo.votes.length, total)}%</p>
                  {!userAnswer && <p>Including you.</p>}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }){
    const userData = users[authedUser]
    const dummyUser = {
        id: 'standby',
        name: 'Standby',
        avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
        answers: {
          
        },
        questions: []
      }
    return {
        userData: userData ? userData : dummyUser
    }
}

export default connect(mapStateToProps)(AnsweredDisplay)

// <h2>{userAnswer}</h2>