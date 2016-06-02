import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/main/App';
import Section from './components/common/container/Section'
import Articles from './components/content/Articles';
import Article from './components/content/Article';

export default (
	<Route component={ App } path="/">
		<Route component={ Section }>
			<IndexRoute breadcrumbName="articles" component={ Articles } />
			<Route path="/js" component={ Articles } />
			<Route path="/html" component={ Articles }/>
			<Route path="/css" component={ Articles }/>
			<Route path="/ess" component={ Articles }/>
			<Route path="/pic" component={ Articles }/>
			<Route path="/:nav/:id" component={ Article }/>
		</Route>
	</Route>
);