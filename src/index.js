import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

import configureStore from './store/configureStore';
import './stylesheets/index.scss';

const history = useRouterHistory(createHashHistory)({queryKey: false});
const store = configureStore();

render(
	<Provider store={ store }>
		<Router history={ history } routes={ routes(store) } />
	</Provider>, 
	document.getElementById('app')
);