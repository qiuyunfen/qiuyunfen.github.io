import { combineReducers } from 'redux';

import article from './article';
import aside from './aside';

const rootReducer = combineReducers({
	aside,
	article
})

export default rootReducer