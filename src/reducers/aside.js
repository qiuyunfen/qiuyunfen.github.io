import { Map } from 'immutable';
import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../constants/ArticleFilters';

const initialState = Map({
	filter: SHOW_ALL,
	showing: 1
});

export default function(state = initialState, action) {
	switch(action.type) {
		case 'CHANGE_FILTER': 
			return state.set('filter', action.filter);
		case 'CHANGE_SHOWING':
			return state.set('showing', action.id);
		default:
			return state;
	}
}