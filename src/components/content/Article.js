import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from '../common/footer/Footer';
import './articleitem.css';

class Article extends Component {
	render() {
		const { article, actions } = this.props

		return(
			<div className="container">
				<section>
					<article>
						<div className="meta">
							<div className="date">
								<time>{article.date}</time>
							</div>
						</div>
						<h1 className="title"><Link to={`${article.category}/article/${article.id}`} onClick={() => actions.editArticle(article.id, true)}>{article.title}</Link></h1>
						<div className="entry-content">
							<p>{ article.content }</p>
						</div>
					</article>
				</section>
				<Footer/>
			</div>
		)
	}
}

export default Article;