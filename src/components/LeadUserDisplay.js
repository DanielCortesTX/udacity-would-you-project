import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeadUserDisplay extends Component {
    render() {
        const { user, numAnswers } = this.props
        return (
            <div>{user.name} has {user.questions.length} questions
            and {numAnswers} answers. Total: {user.questions.length + numAnswers}
            </div>
        )
    }
}

function mapStateToProps ({ users }, { id }){
    const user = users[id]
    const numAnswers = Object.keys(user.answers).length
    return {
        user,
        numAnswers
    }
}  

export default connect(mapStateToProps)(LeadUserDisplay)