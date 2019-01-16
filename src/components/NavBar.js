import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class NavBar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
    this.props.history.push('/')
  }
    render() {
        return (
          <div className="container">
          <div className="navbar-nav">
            <nav>
              <ul className="test">
                <li className="nav-item nav-link">
                  <Link to='/leaderboard' activeStyle={{background: "aquamarine"}}>
                    Leaderboard
                  </Link>
                </li>
                <li className="nav-item nav-link">
                  <Link exact to="/" activeStyle={{background: "aquamarine"}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item nav-link">
                  <Link to='/add' activeStyle={{background: "aquamarine"}}>
                    Add Poll
                  </Link>
                </li>
                <li className="nav-item nav-link">
                  <Link to='/Login' activeStyle={{background: "aquamarine"}}>
                    Login
                  </Link>
                </li>
                {this.props.authedUser !== null && 
                    <li className="nav-item nav-link">
                    Logged in as {this.props.authedUser}
                    </li>
                }
                {this.props.authedUser !== null && <button 
                  onClick={this.handleLogout}
                  className="btn btn-primary"
                  >Logout</button>}
              </ul>
            </nav>
          </div>
          </div>
        )
    }
}

function mapStateToProps ({ authedUser }){
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))