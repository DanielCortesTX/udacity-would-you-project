import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'

/*
  @description methods for getting and updating started data are imported,
    formated and exported for use elsewhere.
*/

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, polls]) => ({
        users, 
        polls
    }))
}

export function saveQuestion (info) {
    return _saveQuestion(info)
}

export function saveQuestionAnwser (info) {
    return _saveQuestionAnswer(info)
}