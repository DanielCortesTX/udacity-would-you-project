export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_POLLS = 'UPDATE_USER_POLLS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

/*
  @description actions below are used to update information of the users state
    when the polls are updated.
*/

export function updateUserAnswer ({ qid, authedUser, answer }){
  return {
    type: UPDATE_USER_ANSWER,
    qid,
    authedUser,
    answer,
  }
}

export function updateUserPolls ({ author, id }){
  return {
    type: UPDATE_USER_POLLS,
    author,
    id
  }
}