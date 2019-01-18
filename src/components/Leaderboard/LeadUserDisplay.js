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
            <div className="card test full-trim mb-4">
                <div className="card-body">
                <img
                src={avatarURL}
                alt={'?'}
                className="avatar"
            />
                </div>
                <div className="card-body">
                    <h1 className="display-4">{`${name} has:`}</h1>
                    <p className="lead">{`${question} question(s) and ${userAnswers} answer(s)`}</p>
                </div>
                <div className="card-body bg-dark text-white col-3"><h4 className="display-4">{`Score: ${total}`}</h4></div>
            </div>
        )
    }
} 

export default LeadUserDisplay