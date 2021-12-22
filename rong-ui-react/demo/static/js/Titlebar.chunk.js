(this["webpackJsonprong-ui-react"]=this["webpackJsonprong-ui-react"]||[]).push([[18],{114:function(t,e,n){"use strict";n.r(e);var r=n(68),o=n(0),c=n(82),a=n.n(c),i=n(6);e.default=function(t){var e=t.Titlebar,n=t.history,c=(t.match,t.ViewSource),u=Object(o.useState)(0),l=Object(r.a)(u,2),s=l[0],b=l[1],j=Object(o.useState)(18),h=Object(r.a)(j,1)[0],m=Object(o.useMemo)((function(){return"\u6807\u9898".concat(h)}),[h]),f=Object(o.useMemo)((function(){return Object(i.jsx)("strong",{children:"home"})}),[]),d=Object(o.useMemo)((function(){return{color:"#333"}}),[]),p=Object(o.useCallback)((function(t){console.log(t)}),[]),O=Object(o.useCallback)((function(t){n.push({pathname:"/"})}),[n]);return Object(i.jsxs)("div",{children:[Object(i.jsx)(e,{theme:"b",onBack:O,children:"Titlebar"}),Object(i.jsx)(e,{theme:"a",title:m,r:f,showBackto:!0,onBack:p,backArrowStyle:d}),Object(i.jsx)("br",{}),Object(i.jsx)(e,{theme:"b",title:"\u6807\u9898"}),Object(i.jsx)("br",{}),Object(i.jsx)(e,{theme:"c",title:"\u6807\u9898"}),Object(i.jsx)("br",{}),Object(i.jsx)(e,{theme:"d",title:"\u6807\u9898"}),Object(i.jsx)("br",{}),Object(i.jsx)(e,{theme:"e",title:"\u6807\u9898"}),Object(i.jsx)("br",{}),Object(i.jsx)(e,{theme:"f",title:"\u6807\u9898"}),Object(i.jsxs)("div",{className:"test-block",children:[Object(i.jsx)("p",{children:"\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0"}),Object(i.jsxs)("p",{children:["count: ",s]}),Object(i.jsx)("p",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return b(s+1)},children:"add"})})]}),Object(i.jsx)(c,{code:a.a})]})}},66:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(67);function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},67:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},68:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(66);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);a=!0);}catch(u){i=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},82:function(t,e){t.exports="import { useState, useMemo, useCallback } from 'react'\nimport sourceCode from './code.txt'\n\nfunction TitlebarExample ({ Titlebar, history, match, ViewSource }) {\n  const [count, setCount] = useState(0)\n  const [age] = useState(18)\n\n  const title = useMemo(() => `\u6807\u9898${age}`, [age])\n  const r = useMemo(() => <strong>home</strong>, [])\n  const backArrowStyle = useMemo(() => ({ color: '#333' }), [])\n  const onBack = useCallback((e) => { console.log(e) }, [])\n  const goHome = useCallback((e) => { history.push({ pathname: '/' }) }, [history])\n\n  return (\n    <div>\n      <Titlebar theme='b' onBack={goHome}>Titlebar</Titlebar>\n      <Titlebar\n        theme='a'\n        title={title}\n        r={r}\n        showBackto={true}\n        onBack={onBack}\n        backArrowStyle={backArrowStyle}\n      />\n      <br />\n      <Titlebar theme='b' title='\u6807\u9898' />\n      <br />\n      <Titlebar theme='c' title='\u6807\u9898' />\n      <br />\n      <Titlebar theme='d' title='\u6807\u9898' />\n      <br />\n      <Titlebar theme='e' title='\u6807\u9898' />\n      <br />\n      <Titlebar theme='f' title='\u6807\u9898' />\n      <div className={'test-block'}>\n        <p>\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0</p>\n        <p>count: {count}</p>\n        <p><button type=\"button\" onClick={() => setCount(count + 1)}>add</button></p>\n      </div>\n\n      <ViewSource code={sourceCode}/>\n    </div>\n  )\n}\n\n\n\nexport default TitlebarExample"}}]);