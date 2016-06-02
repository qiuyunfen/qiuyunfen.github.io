import React, { Component } from 'react';
import { Link } from 'react-router';

import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../../../constants/ArticleFilters';
import './aside.css';

const FILTER_TITLES = {
  [SHOW_ALL]: '首页',
  [SHOW_JS]: 'JS',
  [SHOW_HTML]: 'HTML',
  [SHOW_CSS]: 'CSS',
  [SHOW_ESS]: '随笔',
  [SHOW_PIC]: '照片',
}
const ROUTE_TITLES = {
  [SHOW_ALL]: '',
  [SHOW_JS]: 'js',
  [SHOW_HTML]: 'html',
  [SHOW_CSS]: 'css',
  [SHOW_ESS]: 'ess',
  [SHOW_PIC]: 'pic',
}

class Aside extends Component {

	renderFilterLink(filter) {
		const title = FILTER_TITLES[filter]
		const route_title = ROUTE_TITLES[filter]
		const { filter : selectedFilter, actions } = this.props

		return (
			<Link to={route_title} className={(filter === selectedFilter ? 'selected' : '')}
				onClick={() => actions.changeFilter(filter)}>
				{title}
			</Link>
		)
	}

	render() {
		return (
			<div className="aside">
				<header id="header">
					<div className="aside-head">
						<Link to="/"><img src={require('../../../images/author.jpg')}/></Link>
					</div>
					<div className="des">
						<h1><Link to="/">Qiuyunfen</Link></h1>
						<p>Just do IT</p>
					</div>
					<nav className="main-nav">
						{[SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC].map(filter=>
							<li key={filter}>
								{this.renderFilterLink(filter)}
							</li>
						)}
					</nav>
				</header>
			</div>
	    );
	}
}

export default Aside;