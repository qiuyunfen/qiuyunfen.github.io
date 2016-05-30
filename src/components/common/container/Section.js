import React, { Component } from 'react';

import Aside from '../menu/Aside';
import Articles from '../../content/Articles';
import ArticleItem from '../../content/ArticleItem';
import Article from '../../content/Article';
import { SHOW_ALL, SHOW_JS, SHOW_HTML, SHOW_CSS, SHOW_ESS, SHOW_PIC} from '../../../constants/ArticleFilters';


class Section extends Component{
	constructor(props, context) {
		super(props, context)
		this.state = { filter: SHOW_ALL }
	}

	handleShow(filter) {
		this.setState({ filter })
		this.props.actions.clearArticles();
	}

	render() {
		const { articles, actions } = this.props
		const { filter } = this.state
		let isShow = articles.filter(article => 
			 article.show == true
		)
		let element

		if(isShow.length == 0) {
			element = (
				<Articles articles={articles} filter={ filter } actions={actions}/>
			)
		} else {
			element = (
				<Article key={isShow[0].id} article={isShow[0]} actions={actions}/>
			)
		}
		return(
			<div className="wrap">
				<Aside filter={ filter } onShow={this.handleShow.bind(this)} actions={actions}/>
				{element}
			</div>
		)
	}
}

export default Section;