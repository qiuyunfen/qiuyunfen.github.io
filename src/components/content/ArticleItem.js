import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './articleitem.css';

class ArticleItem extends Component{
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { article, actions } = this.props

		const content = article.content.substring(0, 200);
		return (
			<article>
				<div className="meta">
					<div className="date">
						<time>{article.date}</time>
					</div>
				</div>
				<h1 className="title"><Link to={`${article.category}/article/${article.id}`} onClick={() => actions.editArticle(article.id, true)}>{article.title}</Link></h1>
				{/*<h1 className="title"><a href="#" onClick={ () => actions.editArticle(article.id, true)}>{article.title}</a></h1>*/}
				<div className="entry-content">
					<p>{content}
					<span>[...]</span>
					</p>
					<p><Link to={`${article.category}/article/${article.id}`} onClick={() => actions.editArticle(article.id, true)}>继续阅读 »</Link></p>
				</div>
			</article>
		)
	}
}

export default ArticleItem;