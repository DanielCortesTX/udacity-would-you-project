import { RECEIVE_USERS, UPDATE_USER_ANSWER, UPDATE_USER_POLLS } from '../actions/users'

export default function users (state={}, action) {
    switch(action.type){
        case RECEIVE_USERS :
          return {
              ...state,
              ...action.users
          }
        case UPDATE_USER_ANSWER :
        const { authedUser, qid, answer } = action
          return {
            ...state,
            [authedUser]: {
              ...state[authedUser],
              answers: {
                ...state[authedUser].answers,
                [qid]: answer
              }
            }
          }
        case UPDATE_USER_POLLS :
        const { author, id } = action
          return {
            ...state,
            [author]: {
              ...state[author],
              questions: state[author].questions.concat([id])
            }
          }  
        default :
          return state  
    }
}