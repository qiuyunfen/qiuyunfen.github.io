webpackJsonp([4],{14:function(e,t){},23:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),i=r(c);n(10);n(14);var f=function(e){function t(e,n){return a(this,t),l(this,Object.getPrototypeOf(t).call(this,e,n))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.article,n=e.actions,r=t.content.substring(0,200);return i["default"].createElement("article",null,i["default"].createElement("div",{className:"meta"},i["default"].createElement("div",{className:"date"},i["default"].createElement("time",null,t.date))),i["default"].createElement("h1",{className:"title"},i["default"].createElement("a",{href:"#",onClick:function(){return n.editArticle(t.id,!0)}},t.title)),i["default"].createElement("div",{className:"entry-content"},i["default"].createElement("p",null,r,i["default"].createElement("span",null,"[...]")),i["default"].createElement("p",null,i["default"].createElement("a",{href:"#",onClick:function(){return n.editArticle(t.id,!0)}},"继续阅读 »"))))}}]),t}(c.Component);t["default"]=f}});