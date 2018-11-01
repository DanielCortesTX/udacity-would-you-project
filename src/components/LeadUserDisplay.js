import React, { Component } from 'react'

class LeadUserDisplay extends Component {
    /*
      @description each display accepts user data and displays necessary particulars.
    */
    render() {
        const { userData, userAnswers } = this.props
        const { name, avatarURL } = userData
        const question = userData.questions.length
        const total = question + userAnswers
        return (
            <div className="leaderboard-user">
                <img
                    src={avatarURL}
                    alt={'?'}
                    className="avatar"
                />
                <div className="user-block">
                    {`${name} has:`}
                    <p>{`${question} question(s) and ${userAnswers} answer(s)`}</p>
                </div>
                <div className="user-score">{`Score: ${total}`}</div>
            </div>
        )
    }
} 

export default LeadUserDisplay