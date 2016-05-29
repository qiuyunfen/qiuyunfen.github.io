import * as types from '../constants/ActionTypes'

export function editArticle(id, isShow) {
	return { type : types.EDIT_ARTICLE, id, isShow }
}

export function clearArticles() {
	return { type : types.CLEAR_ARTICLES }
}