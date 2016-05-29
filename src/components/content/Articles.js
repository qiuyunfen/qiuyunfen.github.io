import React, { Component } from 'react';

import ArticleItem from './ArticleItem';
import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../../constants/ArticleFilters';

const ARTICLE_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_JS]: article => article.category === 'js',
	[SHOW_HTML]: article => article.category === 'html',
	[SHOW_CSS]: article => article.category === 'css',
	[SHOW_ESS]: article => article.category === 'ess',
	[SHOW_PIC]: article => article.category === 'pic',
}

class Articles extends Component{
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { articles, filter, actions } = this.props
		const filteredArticles = articles.filter(ARTICLE_FILTERS[filter])
		return(
			<section>
				{filteredArticles.map(article =>
					<ArticleItem key={article.id} article={article} actions={actions}/>
				)}
			</section>
		)

	}
}

export default Articles;
