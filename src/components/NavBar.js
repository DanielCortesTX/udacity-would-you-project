import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav>
              <ul>
                <li>
                  <NavLink to='/leaderboard' exact activeClassName='active'>
                    Leaderboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" exact activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/Login' exact activeClassName='active'>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/add' exact activeClassName='active'>
                    Add Poll
                  </NavLink>
                </li>
                {this.props.authedUser !== null && 
                    <li>
                    Hello {this.props.authedUser}
                    </li>
                }
              </ul>
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser }){
    return {
        authedUser
    }
}

export default connect (mapStateToProps)(NavBar)