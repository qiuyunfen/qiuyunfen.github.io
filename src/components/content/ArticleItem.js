import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './articleitem.scss';

class ArticleItem extends Component{
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { article, actions } = this.props
		
		return (
			<article>
				<div className="meta">
					<div className="date">
						<time>{article.date}</time>
					</div>
				</div>
				<h1 className="title"><Link to={`${article.category}/${article.id}`}>{article.title}</Link></h1>
				<div className="entry-content">
					<p>{article.content.split('</br>')[0]}
						<span>[...]</span>
					</p>
					<p><Link to={`${article.category}/${article.id}`}>继续阅读 »</Link></p>
				</div>
			</article>
		)
	}
}

export default ArticleItem;