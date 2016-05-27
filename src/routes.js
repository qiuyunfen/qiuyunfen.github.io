import React from 'react';
import { Route } from 'react-router';
import App from 'react-router!./components/main/App';
import Section from 'react-router!./components/common/container/Section';
import ArticleItem from 'react-router!./components/content/ArticleItem';
import Article from 'react-router!./components/content/Article';

export default (
	<Route component={ App } path="/">
		<Route component={ Section }>
			<Route path="content/Articles" component={ ArticleItem }/>
			<Route path="content/Article/1" component={ Article }/>
		</Route>
	</Route>
);