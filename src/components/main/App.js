import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aside from '../common/menu/Aside';
import * as ArticleActions from '../../actions';

class App extends Component {
    render() {
    const { filter, actions }  = this.props
    return (
      <div className="wrap">
        <Aside filter={filter} actions={actions} />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string
}

function mapStateToProps(state) {
  const nav = state.aside.toJS();

	return {
		filter: nav.filter
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