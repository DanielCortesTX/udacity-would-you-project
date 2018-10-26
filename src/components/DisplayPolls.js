import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollDisplay from './PollDisplay'

class Dashboard extends Component {
    state ={
        unanswered: true
    }
    toggleView = () => {
        console.log(this.state.unanswered)
        this.setState((prevState) => ({
            unanswered: !prevState.unanswered    
        }))
    }
    componentDidUpdate(){
        console.log(this.props.polls)
        console.log(this.props.unansweredQuestions)
        console.log(this.props.answeredQuestions)
    }
    render() {
        const { answeredQuestions, unansweredQuestions } = this.props
        return (
            <div>
              Polls Page
              <button onClick={this.toggleView}>
                {this.state.unanswered === true ? 'Unanswered Questions': 'Answered Questions'}
              </button>
              {this.state.unanswered === true ? 
                unansweredQuestions.map((poll) => (
                    <div key={poll.id}>
                        <PollDisplay poll={poll} un={'un'}/>
                    </div>
                )) : 
                answeredQuestions.map((poll) => (
                    <div key={poll.id}>
                      <PollDisplay poll={poll} un={'an'}/>
                    </div>
                ))
              }
            </div>
        )
    }
}

function mapStateToProps ({ polls, authedUser }){
    const pollsArray = Object.keys(polls)
      .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
    const questionsToFilter = pollsArray.map((poll) => {
        const pollData = polls[poll]
        return pollData
    })
    const answeredQuestions = questionsToFilter.filter((poll) =>{
        return poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
    })
    const unansweredQuestions = questionsToFilter.filter((poll) =>{
        return poll.author !== authedUser 
    })
    const testUser = polls['8xf0y6ziyjabvozdd253nd']
    return {
        pollsId: pollsArray,
        polls: questionsToFilter,
        testUser,
        answeredQuestions,
        unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Dashboard)

// <UnansweredDisplay poll={poll}/>