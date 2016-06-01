import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'react-router!./components/main/App';
import Articles from 'react-router!./components/content/Articles';
import Article from 'react-router!./components/content/Article';

export default (
	<Route component={ App } path="/">
		<IndexRoute breadcrumbName="home" component={ Articles } />
		<Route path="/js" component={ Articles } />
		<Route path="/html" component={ Articles }/>
		<Route path="/css" component={ Articles }/>
		<Route path="/ess" component={ Articles }/>
		<Route path="/pic" component={ Articles }/>
		<Route path="/:nav/article/:id" component={ Article }/>
	</Route>
);