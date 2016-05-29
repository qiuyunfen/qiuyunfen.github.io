import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'react-router!./components/main/App';
import Section from 'react-router!./components/common/container/Section';
import ArticleItem from 'react-router!./components/content/ArticleItem';
import Article from 'react-router!./components/content/Article';

export default (
	<Route component={ App } path="/">
		{/*<Route component={ Section }>
			<IndexRoute breadcrumbName="home" component={ ArticleItem } />
			<Route path="content/articles" component={ ArticleItem } />
			<Route path="content/ess" component={ Article }/>
		</Route>*/}
	</Route>
);