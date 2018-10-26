import React, { Component } from 'react'

class UnansweredDisplay extends Component {
    render() {
        const { optionOne, optionTwo, author } = this.props.poll
        return (
                <div>
                    <p>Unanswered Page</p>
                    <p>{author}</p>
                    <p>{optionOne.text}</p>
                    <p>{optionTwo.text}</p>
                </div>
        )
    }
}

export default UnansweredDisplay