import React, { Component } from 'react'
import { connect } from 'react-redux'

class TestDis extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: ''
        }
    }
    componentDidMount = () => {
        console.log(this.props.poll)
    }
    componentDidUpdate = () => {
        console.log(this.props.poll)
    }
    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }
    render(){
        const { id, poll } = this.props
        return (
            <div>
            {poll ?
                <form>
                <h2>says</h2>
                <h4>Would you rather...</h4>
                    <div>
                        <label>
                        <input type="radio" value="option1"
                        checked={this.state.selectedOption === 'option1'}
                        onChange={this.handleOptionChange}/>
                        {poll && poll.optionOne.text}
                        </label>
                    </div>
                    <div>
                        <label>
                        <input type="radio" value="option2"
                        checked={this.state.selectedOption === 'option2'}
                        onChange={this.handleOptionChange}/>
                        {poll && poll.optionTwo.text}
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                :
                <h1>LOADING</h1>
            }
            </div>
        )
    }
}

function mapStateToProps ({ polls }, { id }) {
    const poll = polls[id]
    const isAnswered = true

    const pollHolder = {
        // id: '8xf0y6ziyjabvozdd253nd',
        // author: 'sarahedo',
        // timestamp: 1467166872634,
        // optionOne: {
        //   votes: ['sarahedo'],
        //   text: 'have horrible short term memory',
        // },
        // optionTwo: {
        //     votes: [],
        //     text: 'have horrible long term memory'
        //   }
        }
    return {
      poll,
      id
    }
  }
  export default (connect(mapStateToProps)(TestDis))