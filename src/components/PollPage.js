import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredDisplay from './UnansweredDisplay'
import AnsweredDisplay from './AnsweredDisplay'

class PollPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: ''
        }
    }
    /*
      @description poll information is passed down and renders answered or
        unanswered page depending on status. authed user's information affects
        property passed to anser display.
    */
    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }
    render() {
        const { poll, authedUser, userData } = this.props
        const optionOnePick = poll.optionOne.votes.includes(authedUser)
        const optionTwoPick = poll.optionTwo.votes.includes(authedUser)
        const isAnswered = optionOnePick || optionTwoPick
        const userAnswer = optionOnePick === true ? true : false
        return (
            <div>
                {poll ?
                    <div>
                    {isAnswered ? <AnsweredDisplay
                        poll={poll}
                        userData={userData}
                        userAnswer={userAnswer}
                        /> 
                        : 
                        <UnansweredDisplay 
                        userData={userData} 
                        poll={poll} 
                        />
                    }
                    </div>
                    :
                    <h1>LOADING</h1>
                }
            </div>
        )
    }
}

function mapStateToProps ({ polls, authedUser, users }, props){
    const { id } = props.match.params
    const poll = polls[id]
    const userData = users[poll.author]
    const dummyData = {
        id: '8xf0y6ziyjabvozdd253zz',
        author: 'standby',
        timestamp: 1467166872634,
        optionOne: {
          votes: [],
          text: 'StandBy',
        },
        optionTwo: {
          votes: [],
          text: 'standBy'
        }
      }
    return {
        id,
        poll: poll ? poll : dummyData,
        authedUser,
        userData
    }
}

export default connect(mapStateToProps)(PollPage)