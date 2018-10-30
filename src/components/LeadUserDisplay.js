import React, { Component } from 'react'

class LeadUserDisplay extends Component {
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

// function mapStateToProps ({ users }, { id, userAnswers }){
//     const user = users[id]
//     const dummyData = {
//         id: 'standby',
//         name: 'Standby',
//         avatarURL: '',
//         answers: {
//         },
//         questions: []
//     }
//     const numAnswers = Object.keys(user.answers).length
//     return {
//         user: user ? user : dummyData,
//         userAnswers
//     }
// }  

export default LeadUserDisplay
// export default connect(mapStateToProps)(LeadUserDisplay)

// <div className="leaderboard-user">{user.name} has {user.questions.length} questions
//             and {numAnswers} answers. Total: {user.questions.length + numAnswers}
//             </div>


// <div>
                    // <img 
                    //   src={avatarURL}
                    //   alt={`No image`}
                    //   className="avatar"
                    // />
//                 </div>