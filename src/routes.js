import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/main/App';
import Section from './components/common/container/Section'
import Articles from './components/content/Articles';
import Article from './components/content/Article';

export default function (store) {

	function changePage() {
		const { dispatch } = store;
		const module = this.path && this.path.split('/')[1] || '';

		dispatch({ type: 'CHANGE_PAGE', module });
	}
	return (
		<Route component={ App } path="/">
			<Route component={ Section }>
				<IndexRoute breadcrumbName="articles" onEnter={changePage} component={ Articles } />
				<Route path="/js" onEnter={changePage} component={ Articles } />
				<Route path="/html" onEnter={changePage} component={ Articles }/>
				<Route path="/css" onEnter={changePage} component={ Articles }/>
				<Route path="/ess" onEnter={changePage} component={ Articles }/>
				<Route path="/pic" onEnter={changePage} component={ Articles }/>
				<Route path="/:nav/:id" component={ Article }/>
			</Route>
		</Route>
	)	
};