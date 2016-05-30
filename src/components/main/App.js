import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aside from '../common/menu/Aside';
import Section from '../common/container/Section';
import * as ArticleActions from '../../actions';

class App extends Component {
    render() {
    const { articles, actions }  = this.props
    return (
      <div>
        <Section articles={articles} actions={actions}/>
      </div>
    )
  }
}

App.propTypes = {
	articles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		articles: state.article
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
)(App);