import { saveQuestionAnwser, saveQuestion } from '../utils/api'
import { updateUserAnswer, updateUserPolls } from './users.js'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ANSWER_POLL = 'ANSWER_POLLS'
export const UPDATE_USER_POLLS = 'UPDATE_USER_POLLS'
export const ADD_POLL = 'ADD_POLL'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}

function answerQuestion ({ qid, authedUser, answer}) {
    return {
        type: ANSWER_POLL,
        qid,
        authedUser,
        answer,
    }
}

export function handleQuestionAnswer (info) {
    return (dispatch) => {
        return saveQuestionAnwser(info)
          .then(() => dispatch(answerQuestion(info)))
          .then(() => dispatch(updateUserAnswer(info)))
          .catch((e) => {
            console.warn('Error in handle question answer', e)
          })
    }
}

export function handleSaveQuestion (info) {
    return (dispatch) => {
        return saveQuestion(info)
        .then((formattedQuestion) => {
            dispatch(addPoll(formattedQuestion))
            return formattedQuestion
        })
        .then((formattedQuestion) => dispatch(updateUserPolls(formattedQuestion)))
        .catch((e) => {
            console.warn('Error in handle question answer', e)
        })
    }
}

function addPoll (formattedQuestion){
    return {
        type: ADD_POLL,
        formattedQuestion
    }
}