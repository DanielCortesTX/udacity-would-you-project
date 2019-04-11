import React, { Component, Fragment } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Leaderboard from './Leaderboard/Leaderboard'
import { handleInitialData } from '../actions/shared'
import NavBar from './NavBar'
import DisplayPolls from './DisplayPolls/DisplayPolls'
import PollPage from './PollPage/PollPage'
import AddPoll from './AddPoll'
import NotFoundPage from './PollPage/NotFoundPage'
import Footer from './layout/Footer'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  /*
    @description route accessibility is dependent on if the store has a set 
  */
  render() {
    if(!this.props.loggedIn){
      return (
        <Router>
          <Fragment>
            <NavBar />
            <Login />
            <Footer />
          </Fragment>
        </Router>
      )
    }
    return (
      <Router>
        <Fragment>
        <NavBar />
        <Switch>
          <Route path='/login' exact component={Login}/>
          <Route path='/' exact component={DisplayPolls}/>
          <Route path='/leaderboard' component={Leaderboard}/>
          <Route path='/add' component={AddPoll}/>
          <Route path='/questions/:id' component={PollPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
        <Footer />
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }){
  return {
    loggedIn: authedUser !== null ? true : false
  }
}

export default connect(mapStateToProps)(App)