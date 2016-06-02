import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ArticleActions from '../../actions';
import './articleitem.css';

class Article extends Component {
	
	render() {
		const { articles, actions, showing } = this.props
		const articlefilter = articles.filter(article => article.id === showing);
		const article = articlefilter[0];

		return(
			<section>
				<article>
					<div className="meta">
						<div className="date">
							<time>{article.date}</time>
						</div>
					</div>
					<h1 className="title">{article.title}</h1>
					<div className="entry-content">
						{article.content.split('</br>').map(article =>
			    		 <p key={article}>{article}</p>
		    			)}
					</div>
				</article>
			</section>
		)
	}
}

Article.propTypes = {
  actions: PropTypes.object.isRequired,
  showing: PropTypes.number.isRequired,
  articles: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const nav = state.aside.toJS();
  const articles = state.article;

	return {
		showing: nav.showing,
		articles: articles
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ArticleActions, dispatch)
  }
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Article);

