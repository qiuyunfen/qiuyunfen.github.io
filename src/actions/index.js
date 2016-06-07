import * as types from '../constants/ActionTypes'
import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../constants/ArticleFilters';

export function changeFilter(filter) {
	return { type : types.CHANGE_FILTER, filter }
}

export function changePage(module) {
	return { type: types.CHANGE_PAGE, module}
}