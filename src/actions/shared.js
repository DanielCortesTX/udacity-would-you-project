import { setAuthedUser } from './authedUser'
import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'

/*
  @description actions specific to initializing the app's data are gathered and exported here
*/

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
          .then(({ users, polls }) => {
              dispatch(receiveUsers(users))
              dispatch(receivePolls(polls))
              dispatch(setAuthedUser(null))
          })
    }
}