import * as types from '../constants/ActionTypes'

export function changeFilter(filter) {
	return { type : types.CHANGE_FILTER, filter }
}

export function changeShowing(id) {
	return {type: types.CHANGE_SHOWING, id }
}