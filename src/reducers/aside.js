import { Map } from 'immutable';
import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../constants/ArticleFilters';

const initialState = Map({
	filter: SHOW_ALL,
	showing: 1
});

const ROUTE_TITLES = {
	'': SHOW_ALL,
	'js': SHOW_JS,
	'html': SHOW_HTML,
	'css': SHOW_CSS,
	'ess': SHOW_ESS,
	'pic': SHOW_PIC
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'CHANGE_PAGE':
			return state.set('filter', ROUTE_TITLES[action.module])
		case 'CHANGE_SHOWING':
			return state.set('showing', action.id);
		case 'CHANGE_FILTER':
			return state.set('filter', action.filter)
		default:
			return state;
	}
}