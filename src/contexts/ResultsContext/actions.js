import * as types from './types'

export const setResults = (dispatch, myChoice) => {
  dispatch({ type: types.SET_RESULTS, payload: myChoice})
}