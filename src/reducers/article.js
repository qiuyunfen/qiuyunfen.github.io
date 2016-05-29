import { Map, List } from 'immutable';

const initialState = [{
	id: 1,
	title: '为什么我们应该尽快支持 ALPN？',
	category: 'ess',
	date: 'May 26, 2016',
	show: false,
	content: '昨天有位朋友在微信上发过来一个链接：The day Google Chrome disables HTTP/2 for nearly everyone: May 31st, 2016（中文翻译）。看标题这篇文章说的是 Google Chrome 即将大面积禁用 HTTP/2，这究竟是怎么回事呢？本文为你揭晓答案。先来回顾一下，浏览器在访问 HTTPS 网站时，如何得知服务端是否支持 HTTP/2？答案是借助 HTTP/2 的协议协商机制：在 HTTP/2 Over HTTP 中，可以使用 HTTP 的 Upgrade 机制进行协商；而对于 HTTP/2 Over TLS，可以使用 TLS 的 NPN 或 ALPN 扩展来完成协商。HTTP/2 的这两种协商方式，不了解的同学请看《谈谈 HTTP/2 的协议协商机制》，这里不再赘述。当前所有浏览器，都只支持 HTTP/2 Over TLS。也就是说，浏览器和服务端都支持 NPN 或 ALPN 协商，是用上 HTTP/2 的大前提。本文重点讨论 NPN 和 ALPN。'
},{
	id: 2,
	title: '为什么我们应该尽快支持 ALPN？',
	category: 'html',
	date: 'May 29, 2016',
	show: false,
	content: '昨天有位朋友在微信上发过来一个链接：The day Google Chrome disables HTTP/2 for nearly everyone: May 31st, 2016（中文翻译）。看标题这篇文章说的是 Google Chrome 即将大面积禁用 HTTP/2，这究竟是怎么回事呢？本文为你揭晓答案。先来回顾一下，浏览器在访问 HTTPS 网站时，如何得知服务端是否支持 HTTP/2？答案是借助 HTTP/2 的协议协商机制：在 HTTP/2 Over HTTP 中，可以使用 HTTP 的 Upgrade 机制进行协商；而对于 HTTP/2 Over TLS，可以使用 TLS 的 NPN 或 ALPN 扩展来完成协商。HTTP/2 的这两种协商方式，不了解的同学请看《谈谈 HTTP/2 的协议协商机制》，这里不再赘述。当前所有浏览器，都只支持 HTTP/2 Over TLS。也就是说，浏览器和服务端都支持 NPN 或 ALPN 协商，是用上 HTTP/2 的大前提。本文重点讨论 NPN 和 ALPN。'
}];

export default function article(state = initialState, action) {
	switch(action.type) {
		case 'EDIT_ARTICLE':
			return state.map(article =>
				article.id == action.id ?
					Object.assign({}, article, { show: action.isShow }) :
					article
			)
		case 'CLEAR_ARTICLES':
			return initialState
		default:
			return state
	}
}