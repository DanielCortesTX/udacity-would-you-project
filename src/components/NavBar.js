import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class NavBar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
    this.props.history.push('/')
  }
    render() {
        return (
          <div className="nav-box navbar">
          <div>
            <nav>
              <ul className="test">
                <li className="nav-item nav-link">
                  <NavLink to='/leaderboard' activeStyle={{background: "aquamarine"}}>
                    Leaderboard
                  </NavLink>
                </li>
                <li className="nav-item nav-link">
                  <NavLink exact to="/" activeStyle={{background: "aquamarine"}}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item nav-link">
                  <NavLink to='/add' activeStyle={{background: "aquamarine"}}>
                    Add Poll
                  </NavLink>
                </li>
                <li className="nav-item nav-link">
                  <NavLink to='/Login' activeStyle={{background: "aquamarine"}}>
                    Login
                  </NavLink>
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