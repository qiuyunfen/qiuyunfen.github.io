import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

const history = useRouterHistory(createHashHistory)({queryKey: false});

render(
	<Router routes = {routes} history = {history}></Router>,
	document.getElementById('app')
);