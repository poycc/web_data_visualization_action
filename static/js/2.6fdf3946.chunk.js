(this["webpackJsonpdata-visualization-action"]=this["webpackJsonpdata-visualization-action"]||[]).push([[2,6,7],{199:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=[{name:"John",weight:240},{name:"Jane",weight:186},{name:"Ben",weight:300},{name:"Kate",weight:60}]},210:function(t,e,n){"use strict";var r=n(0),a=n(1),o=n.n(a),i=n(79),c=n(196),u=n(81);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var s=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},p=[],h=-1,d={},b={matchHandlers:{},dispatch:function(t){return d=t,!(p.length<1)&&(p.forEach((function(t){t.func(d)})),!0)},subscribe:function(t){0===p.length&&this.register();var e=(++h).toString();return p.push({token:e,func:t}),t(d),e},unsubscribe:function(t){0===(p=p.filter((function(e){return e.token!==t}))).length&&this.unregister()},unregister:function(){var t=this;Object.keys(f).forEach((function(e){var n=f[e],r=t.matchHandlers[n];r&&r.mql&&r.listener&&r.mql.removeListener(r.listener)}))},register:function(){var t=this;Object.keys(f).forEach((function(e){var n=f[e],r=function(n){var r,a,o,i=n.matches;t.dispatch(l(l({},d),(o=i,(a=e)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r)))},a=window.matchMedia(n);a.addListener(r),t.matchHandlers[n]={mql:a,listener:r},r(a)}))}};function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var E=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},k=(Object(u.a)("top","middle","bottom","stretch"),Object(u.a)("start","end","center","space-around","space-between"),function(t){function e(){var t;return g(this,e),(t=x(this,O(e).apply(this,arguments))).state={screens:{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}},t.renderRow=function(e){var n,a=e.getPrefixCls,i=e.direction,u=t.props,l=u.prefixCls,s=u.justify,f=u.align,p=u.className,h=u.style,d=u.children,b=E(u,["prefixCls","justify","align","className","style","children"]),m=a("row",l),g=t.getGutter(),w=o()(m,(v(n={},"".concat(m,"-").concat(s),s),v(n,"".concat(m,"-").concat(f),f),v(n,"".concat(m,"-rtl"),"rtl"===i),n),p),x=y(y(y({},g[0]>0?{marginLeft:g[0]/-2,marginRight:g[0]/-2}:{}),g[1]>0?{marginTop:g[1]/-2,marginBottom:g[1]/2}:{}),h),O=y({},b);return delete O.gutter,r.createElement(c.a.Provider,{value:{gutter:g}},r.createElement("div",y({},O,{className:w,style:x}),d))},t}var n,a,u;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,t),n=e,(a=[{key:"componentDidMount",value:function(){var t=this;this.token=b.subscribe((function(e){var n=t.props.gutter;("object"===m(n)||Array.isArray(n)&&("object"===m(n[0])||"object"===m(n[1])))&&t.setState({screens:e})}))}},{key:"componentWillUnmount",value:function(){b.unsubscribe(this.token)}},{key:"getGutter",value:function(){var t=[0,0],e=this.props.gutter,n=this.state.screens;return(Array.isArray(e)?e:[e,0]).forEach((function(e,r){if("object"===m(e))for(var a=0;a<s.length;a++){var o=s[a];if(n[o]&&void 0!==e[o]){t[r]=e[o];break}}else t[r]=e||0})),t}},{key:"render",value:function(){return r.createElement(i.a,null,this.renderRow)}}])&&w(n.prototype,a),u&&w(n,u),e}(r.Component));k.defaultProps={gutter:0};e.a=k},49:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(194),i=n(259),c=n(199);e.default=function(){return Object(r.useEffect)((function(){!function(){var t=o.f(c.a,(function(t){return t.weight}))||0,e=o.g().range([0,300]).domain([0,t]);o.h("#scaleLinear").selectAll("div").data(c.a).enter().append("div").text((function(t){return"".concat(t.name,":").concat(e(t.weight))})).style("background-color","#1890ff").style("margin-bottom","5px").style("color","white").style("width",(function(t){return"".concat(t.weight,"px")}))}()}),[]),a.a.createElement(i.a,{span:6},a.a.createElement("div",{id:"scaleLinear"}))}},50:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(259),o=n(194);e.default=function(){var t=r.useEffect,e=(0,r.useCallback)((function(){var t=o.h("#bar-two").append("svg"),e=[50,43,120,87,99,167,142],n=0,r=20;t.attr("width",300).attr("height",200).selectAll("rect").data(e).enter().append("rect").attr("fill","#1890ff").attr("x",(function(t,e){return r+35*e})).attr("y",(function(t){return 200-n-t})).attr("width",28).attr("height",(function(t){return t})),t.selectAll("text").data(e).enter().append("text").attr("fill","white").attr("text-anchor","middle").attr("font-size",14).attr("x",(function(t,e){return r+35*e})).attr("y",(function(t){return 200-n-t})).attr("dx",14).attr("dy",14).text((function(t){return t}))}),[]);return t((function(){return e()}),[e]),r.createElement(a.a,{span:6},r.createElement("div",{id:"bar-two"}))}},55:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(210),i=n(49),c=n(50);e.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.default,null),a.a.createElement(c.default,null))}}}]);
//# sourceMappingURL=2.6fdf3946.chunk.js.map