import React, { Component } from 'react';
import { Link } from 'react-router';

import './articleitem.css';

class Article extends Component {
	render() {
		const { article, actions } = this.props

		return(
			<section>
				<article>
					<div className="meta">
						<div className="date">
							<time>{article.date}</time>
						</div>
					</div>
					<h1 className="title"><a href="#" onClick={ () => actions.editArticle(article.id, true)}>{article.title}</a></h1>
					<div className="entry-content">
						<p>{ article.content }</p>
					</div>
				</article>
			</section>
		)
	}
}

export default Article;