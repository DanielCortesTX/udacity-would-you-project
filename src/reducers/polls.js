import { RECEIVE_POLLS, ANSWER_POLL, ADD_POLL } from '../actions/polls'

export default function polls (state={}, action){
    switch(action.type){
        case RECEIVE_POLLS :
          return {
              ...state,
              ...action.polls
          }
        case ANSWER_POLL :
          return {
              ...state,
              [action.qid]: {
                ...state[action.qid],
                [action.answer]: {
                  ...state[action.qid][action.answer],
                  votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                }
              }
          }
        case ADD_POLL :
          return {
            ...state,
            [action.formattedQuestion.id]: action.formattedQuestion
          }  
        default :
          return state  
    }
}