import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../../actions/authedUser'

class NavBar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
    this.props.history.push('/')
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md mb-4">
        <div className="container collapse navbar-collapse">
          <div className="navbar-nav nav-tabs">
            {this.props.authedUser !== null
              &&
              <Link to='/Login' 
                className="nav-link nav-item">
                  Hello {this.props.authedUser}
              </Link>
            }
            <Link 
              to='/leaderboard' 
              className="nav-link nav-item"
            >
              Leaderboard
            </Link>    
            <Link 
              to="/" 
              className="nav-link nav-item"
            >
              Home
            </Link>  
            <Link 
              to='/add' 
              className="nav-link nav-item"
            >
              Add Poll
            </Link>
            {this.props.authedUser === null ?
              <Link to='/Login' 
                  className="nav-link nav-item">
                    Login
                  </Link>
              :
              <Link to="/Login" className="nav-link nav-item" onClick={this.handleLogout}>
                Logout
              </Link>
            }
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser }){
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NavBar))