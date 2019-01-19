export const SET_AUTHED_USER = 'SET_AUTHER_USER'

/*
  @description action sets the authedUser state. The equivalent for 'Logging in/out'
*/

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
  	id,
  }
}