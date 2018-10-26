import React, { Component } from 'react'
import { connect } from 'react-redux'
// import LeadUserDisplay from './LeadUserDisplay'

class Dashboard extends Component {
    componentDidUpdate(){
        console.log(this.props.usersId)
        console.log(this.props.users)
    }
    render() {
        const { usersId } = this.props
        return (
            <div>
              {usersId.map((user) => {
                  return (
                      <p key={user.user}>{user.user} has a score of {user.userScore}</p>
                  )
              })}
              
            </div>
        )
    }
}

function mapStateToProps ({ users }){
    const usersIds = Object.keys(users)
    const sortTotals = usersIds.map((userId) => {
        const userData = users[userId]
        const answerLength = Object.keys(userData.answers).length
        const total = answerLength + userData.questions.length
        return { 'userScore': total, 'user': userId, 'userData': userData }
    })
    return {
        // usersId: Object.keys(users)
        //   .sort((a,b) => users[b].answers.length - users[a].timestamp)
        usersId: sortTotals.sort((a,b) => {
            return b.userScore - a.userScore
        }),
        users: usersIds
    }
}

export default connect(mapStateToProps)(Dashboard)

// {this.props.usersId.map((id) => (
//     <li key={id}>
//       <LeadUserDisplay id={id}/>
//     </li>
// )
// )}