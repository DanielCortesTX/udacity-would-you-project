import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  handleUserLogin = (event) => {

    const selection = event.target.value
    const { dispatch } = this.props
    console.log(selection)
    console.log(this.props)
    dispatch(setAuthedUser(selection))
return <Redirect to='/' />
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
      
    <div>
      {this.props.authedUser !== null ? <h1>Logged in as {this.props.authedUser}</h1> : <h1>Login to {this.props.message}</h1>}
      
        
        <select onChange={this.handleUserLogin}>
        <option value="null">none</option>
          {this.props.usersId.map((user) => (<option value={user} key={user}>{user}</option>))}
        </select>  
    </div>
  </div>
      )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    usersId: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)