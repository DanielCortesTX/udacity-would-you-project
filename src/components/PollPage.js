import React, { Component } from 'react'
import { connect } from 'react-redux'
// import UnansweredDisplay from './UnansweredDisplay'
// import AnsweredDisplay from './AnsweredDisplay'
// import TestDis from './TestDis'

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
        const { poll, authedUser } = this.props
        const isAnswered = poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
    ? true
    : false
        return (
            <div> 
            {poll ? 
                <div>
                {isAnswered ? <p>answered</p> : <p>unanswered</p>}
                </div>
                :
                <h1>LOADING</h1>
            } 
            </div>
        )
    }
}

function mapStateToProps ({ polls, authedUser }, props){
    const { id } = props.match.params
    const poll = polls[id]
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
        authedUser
    }
}

export default connect(mapStateToProps)(PollPage)

// selectedOption: '',


// <form>
//                     <h2>says</h2>
//                     <h4>Would you rather...</h4>
//                         <div>
//                             <label>
//                             <input type="radio" value="option1"
//                             checked={this.state.selectedOption === 'option1'}
//                             onChange={this.handleOptionChange}/>
//                             {poll && poll.optionOne.text}
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                             <input type="radio" value="option2"
//                             checked={this.state.selectedOption === 'option2'}
//                             onChange={this.handleOptionChange}/>
//                             {poll && poll.optionTwo.text}
//                             </label>
//                         </div>
//                         <button type="submit">Submit</button>
//                     </form>