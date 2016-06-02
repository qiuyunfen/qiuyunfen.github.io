import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArticleItem from './ArticleItem';
import Aside from '../common/menu/Aside';
import * as ArticleActions from '../../actions';
import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../../constants/ArticleFilters';

const ARTICLE_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_JS]: article => article.category === 'js',
	[SHOW_HTML]: article => article.category === 'html',
	[SHOW_CSS]: article => article.category === 'css',
	[SHOW_ESS]: article => article.category === 'ess',
	[SHOW_PIC]: article => article.category === 'pic',
}

class Articles extends Component {
    render() {
    const { cfilter, actions, articles }  = this.props
    const filteredArticles = articles.filter(ARTICLE_FILTERS[cfilter])

    return (
      <section>
        {filteredArticles.map(article =>
			     <ArticleItem key={article.id} article={article} actions={actions}/>
		    )}
      </section>
    )
  }
}

Articles.propTypes = {
  actions: PropTypes.object.isRequired,
  cfilter: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const nav = state.aside.toJS();
  const articles = state.article;

  return {
	 cfilter: nav.filter,
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
)(Articles);