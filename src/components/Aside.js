import React, { Component } from 'react';

class Aside extends Component {
	render() {
		return (
			<div className="aside">
				<header id="header">
					<div className="aside-head">
						<a href="/"></a>
					</div>
					<h1><a href="/">Qiuyunfen</a></h1>
					<p>Just do IT</p>
					<nav className="main-nav">
						<li><a href="#">首页</a></li>
						<li><a href="#">所有文章</a></li>
						<li><a href="#">随笔</a></li>
						<li><a href="#">相册</a></li>
					</nav>
					<nav></nav>
				</header>
			</div>
	    );
	}
}

export default Aside;