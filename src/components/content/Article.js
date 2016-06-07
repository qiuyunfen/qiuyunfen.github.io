import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ArticleActions from '../../actions';
import './articleitem.css';

class Article extends Component {
	componentDidMount() {
		const { actions, params: { nav } } = this.props

		actions.changePage(nav);
	}

	render() {
		const { articles, actions, params:{ id } } = this.props
		const articlefilter = articles.filter(article => article.id == id)
		const article = articlefilter[0]

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
  articles: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const articles = state.article;

  return {
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

