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
        const { id, optionOne, optionTwo, author } = this.props.poll
        return (
            <Link to={`/questions/${id}`}>
                <div>
                    <p>{author}</p>
                    <p>{optionOne.text}</p>
                    <p>{optionTwo.text}</p>
                </div>

            </Link>
        )
    }
}

export default PollDisplay