import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Books from './components/Books';
import Movies from './components/Movies';

export default (
	<Route component={App} path="/">
		<Route component={Books} path="/books"/>
		<Route component={Movies} path="/movies"/>
	</Route>
);