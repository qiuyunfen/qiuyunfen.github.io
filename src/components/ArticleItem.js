import React, { Component } from 'react';

class ArticleItem extends Component{
	render() {
		return (
			<article>
				<div className="meta">
					<div className="date">
						<time>May 26,2016</time>
					</div>
				</div>
				<h1 className="title"><a href="#">为什么我们应该尽快支持 ALPN？</a></h1>
				<div className="entry-content">
					<p>昨天有位朋友在微信上发过来一个链接：The day Google Chrome disables HTTP/2 for nearly everyone: May 31st, 2016（中文翻译）。看标题这篇文章说的是 Google Chrome 即将大面积禁用 HTTP/2，这究竟是怎么回事呢？本文为你揭晓答案</p>
					<p><a href="#">继续阅读 »</a></p>
				</div>
			</article>
			
			
		)
	}
}

export default ArticleItem;