import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PollDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            answered: true
        }
    }
    render() {
        const { id, optionOne, optionTwo } = this.props.poll
        const teaseOne = optionOne.text.substring(0, 10)
        const teaseTwo = optionTwo.text.substring(0, 10)
        return (
            <Link to={`/questions/${id}`}>
                <div>
                    <p>Would you rather...</p>
                    <p>{teaseOne}......</p>
                    <p>{teaseTwo}......</p>
                </div>

            </Link>
        )
    }
}

export default PollDisplay