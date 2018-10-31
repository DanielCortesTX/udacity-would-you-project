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
    componentDidUpdate = () => {
        console.log(this.props.poll.optionOne.votes)
        console.log(this.props.poll.optionTwo.votes)
    }
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
                        /> : <UnansweredDisplay userData={userData} poll={poll} />}
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
    const userData = users[authedUser]
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

// const optionOneYes = optionOnePick
//         const optionTwoYes =  optionTwoPick

// optionOneYes={optionOneYes}
//                     optionTwoYes={optionTwoYes}

// const isAnswered = poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)

// <div>
//             {authedUser ? 
//                 <div>
//                 {poll ? 
//                     <div>
                    
//                     {isAnswered ? <AnsweredDisplay 
//                         poll={poll}
//                         userData={userData}
//                         userAnswer={userAnswer}
//                         /> : <UnansweredDisplay userData={userData} poll={poll} />}
//                     </div>
//                     :
//                     <h1>LOADING</h1>
//                 } 
//                 </div>
//                 : <NotFoundPage />}
            
//             </div>