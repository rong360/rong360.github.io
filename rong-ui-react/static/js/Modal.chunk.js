(this["webpackJsonprong-ui-react"]=this["webpackJsonprong-ui-react"]||[]).push([[10],{109:function(e,n,t){"use strict";t.r(n);var o=t(67),c=t(0),i=t(74),l=t.n(i),s=t(75),r=t.n(s),a=t(6);function d(){return Object(a.jsxs)("div",{style:{height:"100px",overflow:"scroll",backgroundColor:"aliceblue"},className:"scroll-area",children:[Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Hello Component"})}),Object(a.jsx)("p",{children:"sdf 1"}),Object(a.jsx)("p",{children:"sdf 2"}),Object(a.jsx)("p",{children:"sdf 3"}),Object(a.jsx)("p",{children:"sdf 4"}),Object(a.jsx)("p",{children:"sdf 5"}),Object(a.jsx)("p",{children:"sdf 6"}),Object(a.jsx)("p",{children:"sdf 7"}),Object(a.jsx)("p",{children:"sdf 8"}),Object(a.jsx)("p",{children:"sdf 9"}),Object(a.jsx)("p",{children:"sdf 10"}),Object(a.jsx)("p",{children:"sdf 11"}),Object(a.jsx)("p",{children:"sdf 12"}),Object(a.jsx)("p",{children:"sdf 13"}),Object(a.jsx)("p",{children:"sdf 14"}),Object(a.jsx)("p",{children:"sdf 15"}),Object(a.jsx)("p",{children:"sdf 16"}),Object(a.jsx)("p",{children:"sdf 17"}),Object(a.jsx)("p",{children:"sdf 18"}),Object(a.jsx)("p",{children:"sdf 19"}),Object(a.jsx)("p",{children:"sdf 20"})]})}n.default=function(e){var n=e.Titlebar,t=e.Modal,i=e.history,s=e.ViewSource,f=Object(c.useCallback)((function(){i.push({pathname:"/"})}),[i]),u=Object(c.useState)(!1),p=Object(o.a)(u,2),h=p[0],m=p[1],b=Object(c.useState)(!1),j=Object(o.a)(b,2),v=j[0],x=j[1],g=Object(c.useState)(0),C=Object(o.a)(g,2),O=C[0],y=C[1];return Object(c.useEffect)((function(){}),[]),Object(a.jsxs)("div",{className:r.a["page-view"],children:[Object(a.jsx)(n,{theme:"b",c:"Dialog example",onBack:f}),Object(a.jsx)(t,{content:Object(a.jsx)(d,{}),onConfirm:function(){m(!1)},visible:h,children:"1sfsdfsdf"}),Object(a.jsx)(t,{target:document.getElementById("modal"),onConfirm:function(){x(!1)},visible:v,children:Object(a.jsx)("input",{})}),Object(a.jsxs)("div",{className:"example-list",children:[Object(a.jsx)("div",{className:"item",onClick:function(){t.create({content:Object(a.jsxs)("span",{children:["\u751f\u5982\u590f\u82b1\u4e4b\u7eda\u70c2\uff0c\u6b7b\u5982\u79cb\u53f6\u4e4b\u9759\u7f8e",Object(a.jsx)("br",{}),"\u6cf0\u6208\u5c14\u300a\u751f\u5982\u590f\u82b1\u300b"]}),onCancel:function(){window.confirm("\u786e\u5b9a\u5173\u95ed\uff1f")&&this.remove()}})},children:"\u5e38\u89c4"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({title:"\u6807\u9898",titleStyle:{color:"green"},showClose:!0,onClose:function(e){this.remove()},content:Object(a.jsx)(d,{}),contentStyle:{},showCancel:!0,cancelText:Object(a.jsx)("strong",{children:"cancel"}),cancelStyle:{color:"red"},onCancel:function(){this.remove()},showConfirm:!0,confirmText:"confirm",confirmStyle:{color:"blue"},onConfirm:function(){this.remove()},cliperStyle:{backgroundColor:"rgba(0, 0, 0, 0.1)"},dlgStyle:{boxShadow:"10px 10px 5px #888888"},position:{x:"center",y:"center"},animate:!1})},children:"\u6240\u6709\u914d\u7f6e\u9879"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({title:"\u98de\u9e1f\u96c6",content:"\u5f53\u4f60\u4e3a\u9519\u8fc7\u592a\u9633\u800c\u54ed\u6ce3\u7684\u65f6\u5019\uff0c\u4f60\u4e5f\u8981\u518d\u9519\u8fc7\u7fa4\u661f\u4e86\u3002",titleStyle:{color:"green"}})},children:"\u914d\u7f6etitle"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({showClose:!0,content:Object(a.jsx)("div",{style:{padding:"30px 0"},children:"\u6211\u4eec\u628a\u4e16\u754c\u770b\u9519\uff0c\u53cd\u8bf4\u5b83\u6b3a\u9a97\u4e86\u6211\u4eec\u3002"}),onClose:function(){this.remove()}})},children:"\u914d\u7f6e\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({content:"\u98de\u9e1f\u96c6\u8282\u9009",contentStyle:{fontSize:"14px",color:"#4080e8",padding:"30px 0"}})},children:"\u914d\u7f6e\u5185\u5bb9"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({content:Object(a.jsx)(d,{}),contentStyle:{}})},children:"\u81ea\u5b9a\u4e49content"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({content:"\u773c\u775b\u4e3a\u5979\u4e0b\u7740\u96e8\uff0c\u5fc3\u5374\u4e3a\u5979\u6253\u7740\u4f1e\uff0c\u8fd9\u5c31\u662f\u7231\u60c5",cancelText:"\u53d6\u6d88",showCancel:!0,cancelStyle:{color:"white",background:"#4080e8"},confirmText:"\u5df2\u9605",showConfirm:!0,confirmStyle:{color:"white",background:"#4080e8"},onConfirm:function(){this.remove()},onCancel:function(){this.remove()}})},children:"\u914d\u7f6ebtn"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.create({content:"Eyes are raining for her,heart is holding umbrella for her,this is love.",dlgStyle:{width:"100%",borderRadius:0},position:{x:"center",y:"bottom"}})},children:"\u4f4d\u7f6e\u53d8\u5316"}),Object(a.jsx)("div",{className:"item",onClick:function(){return m(!0)},children:"\u6a21\u677f\u65b9\u5f0f\u63d2\u5165Dialog"}),Object(a.jsx)("div",{className:"item",onClick:function(){return x(!0)},children:"\u6a21\u677f\u65b9\u5f0f\u63d2\u5165Dialog"}),Object(a.jsx)("div",{className:"item",onClick:function(){t.tip({content:Object(a.jsx)(d,{})})},children:"Modal.tip"})]}),Object(a.jsxs)("div",{className:"test-block",children:[Object(a.jsx)("p",{children:"\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0"}),Object(a.jsxs)("p",{children:["count: ",O]}),Object(a.jsx)("p",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return y(O+1)},children:"add"})})]}),Object(a.jsx)(s,{code:l.a})]})}},65:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t(66);function c(e,n){if(e){if("string"===typeof e)return Object(o.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(o.a)(e,n):void 0}}},66:function(e,n,t){"use strict";function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}t.d(n,"a",(function(){return o}))},67:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t(65);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,c=!1,i=void 0;try{for(var l,s=e[Symbol.iterator]();!(o=(l=s.next()).done)&&(t.push(l.value),!n||t.length!==n);o=!0);}catch(r){c=!0,i=r}finally{try{o||null==s.return||s.return()}finally{if(c)throw i}}return t}}(e,n)||Object(o.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},74:function(e,n){e.exports="\nimport React, { useCallback, useState, useEffect } from \"react\";\nimport sourceCode from './code.txt'\nimport styles from './style/modal.module.less'\n\nfunction Hello () {\n  return <div style={{ height: '100px', overflow: 'scroll', backgroundColor: 'aliceblue' }} className='scroll-area'>\n    <p><strong>Hello Component</strong></p>\n    <p>sdf 1</p>\n    <p>sdf 2</p>\n    <p>sdf 3</p>\n    <p>sdf 4</p>\n    <p>sdf 5</p>\n    <p>sdf 6</p>\n    <p>sdf 7</p>\n    <p>sdf 8</p>\n    <p>sdf 9</p>\n    <p>sdf 10</p>\n    <p>sdf 11</p>\n    <p>sdf 12</p>\n    <p>sdf 13</p>\n    <p>sdf 14</p>\n    <p>sdf 15</p>\n    <p>sdf 16</p>\n    <p>sdf 17</p>\n    <p>sdf 18</p>\n    <p>sdf 19</p>\n    <p>sdf 20</p>\n  </div>\n}\n\nfunction DialogDemo ({ Titlebar, Modal, history, ViewSource }) {\n  const goHome = useCallback(() => { history.push({ pathname: '/' }) }, [history])\n  const [visible, setVisible] = useState(false)\n  const [visible2, setVisible2] = useState(false)\n  const [count, setCount] = useState(0)\n\n  useEffect(() => {\n    // Modal.create({\n    //   content: 'hello',\n    //   showClose: true\n    // })\n  }, [])\n  const handleDialog1 = () => {\n    // Modal.create('\u98ce\u5439\u67f3\u82b1\u6ee1\u5e97\u9999\uff0c\u5434\u59ec\u538b\u9152\u529d\u5ba2\u5c1d')\n    \n    Modal.create({\n      content: <span>\u751f\u5982\u590f\u82b1\u4e4b\u7eda\u70c2\uff0c\u6b7b\u5982\u79cb\u53f6\u4e4b\u9759\u7f8e<br />\u6cf0\u6208\u5c14\u300a\u751f\u5982\u590f\u82b1\u300b</span>,\n      onCancel () {\n        let res = window.confirm('\u786e\u5b9a\u5173\u95ed\uff1f')\n        res && this.remove()\n      }\n    })\n  }\n  const handleDialog2 = () => {\n    Modal.create({\n      // \u6807\u9898\n      title: '\u6807\u9898',\n      titleStyle: { color: 'green' },\n      // \u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae\n      showClose: true,\n      onClose (e) {\n        this.remove()\n      },\n      // \u5185\u5bb9\n      content: <Hello />,\n      contentStyle: {},\n      // \u53d6\u6d88\u6309\u94ae\n      showCancel: true,\n      cancelText: <strong>cancel</strong>,\n      cancelStyle: { color: 'red' },\n      onCancel () {\n        this.remove()\n      },\n      // \u786e\u8ba4\u6309\u94ae\n      showConfirm: true,\n      confirmText: 'confirm',\n      confirmStyle: { color: 'blue' },\n      onConfirm () {\n        this.remove()\n      },\n      // \u906e\u7f69\n      cliperStyle: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },\n      // dialog\u6846\n      dlgStyle: { boxShadow: '10px 10px 5px #888888' },\n      // \u663e\u793a\u4f4d\u7f6e\n      position: { x: 'center', y: 'center' },\n      // \u52a8\u753b\n      animate: false\n    })\n  }\n  const handleDialog3 = () => {\n    Modal.create({\n      title: '\u98de\u9e1f\u96c6',\n      content: \"\u5f53\u4f60\u4e3a\u9519\u8fc7\u592a\u9633\u800c\u54ed\u6ce3\u7684\u65f6\u5019\uff0c\u4f60\u4e5f\u8981\u518d\u9519\u8fc7\u7fa4\u661f\u4e86\u3002\",\n      titleStyle: { color: 'green' }\n    })\n  }\n  const handleDialog4 = () => {\n    Modal.create({\n      showClose: true,\n      content: <div style={{ padding: '30px 0' }}>\u6211\u4eec\u628a\u4e16\u754c\u770b\u9519\uff0c\u53cd\u8bf4\u5b83\u6b3a\u9a97\u4e86\u6211\u4eec\u3002</div>,\n      onClose () {\n        this.remove()\n      }\n    })\n  }\n  const handleDialog5 = () => {\n    Modal.create({\n      content: '\u98de\u9e1f\u96c6\u8282\u9009',\n      contentStyle: { fontSize: '14px', color: \"#4080e8\", padding: '30px 0' }\n    })\n  }\n  const handleDialog5_2 = () => {\n    Modal.create({\n      content: <Hello />,\n      contentStyle: {}\n    })\n  }\n  const handleDialog6 = () => {\n    Modal.create({\n      content: '\u773c\u775b\u4e3a\u5979\u4e0b\u7740\u96e8\uff0c\u5fc3\u5374\u4e3a\u5979\u6253\u7740\u4f1e\uff0c\u8fd9\u5c31\u662f\u7231\u60c5',\n      // \u53d6\u6d88\u6309\u94ae\n      cancelText: \"\u53d6\u6d88\",\n      showCancel: true,\n      cancelStyle: { color: 'white', background: '#4080e8' },\n      // \u786e\u8ba4\u6309\u94ae\n      confirmText: \"\u5df2\u9605\",\n      showConfirm: true,\n      confirmStyle: { color: 'white', background: '#4080e8' },\n      onConfirm () {\n        this.remove()\n      },\n      onCancel () {\n        this.remove()\n      }\n    })\n  }\n  const handleDialog7 = () => {\n    Modal.create({\n      content: 'Eyes are raining for her,heart is holding umbrella for her,this is love.',\n      dlgStyle: { width: '100%', borderRadius: 0 },\n      position: { x: 'center', y: 'bottom' }\n    })\n  }\n  const handleTip = () => {\n    Modal.tip({\n      content: <Hello />\n    })\n  }\n\n\n  return (\n    <div className={styles['page-view']}>\n      <Titlebar theme='b' c='Dialog example' onBack={goHome} />\n      <Modal content={<Hello />} onConfirm={function () { setVisible(false) }} visible={visible} >1sfsdfsdf</Modal>\n      <Modal target={document.getElementById('modal')} onConfirm={function () { setVisible2(false) }} visible={visible2} ><input /></Modal>\n      <div className=\"example-list\">\n        <div className=\"item\" onClick={handleDialog1}>\u5e38\u89c4</div>\n        <div className=\"item\" onClick={handleDialog2}>\u6240\u6709\u914d\u7f6e\u9879</div>\n        <div className=\"item\" onClick={handleDialog3}>\u914d\u7f6etitle</div>\n        <div className=\"item\" onClick={handleDialog4}>\u914d\u7f6e\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae</div>\n        <div className=\"item\" onClick={handleDialog5}>\u914d\u7f6e\u5185\u5bb9</div>\n        <div className=\"item\" onClick={handleDialog5_2}>\u81ea\u5b9a\u4e49content</div>\n        <div className=\"item\" onClick={handleDialog6}>\u914d\u7f6ebtn</div>\n        <div className=\"item\" onClick={handleDialog7}>\u4f4d\u7f6e\u53d8\u5316</div>\n        <div className=\"item\" onClick={() => setVisible(true)}>\u6a21\u677f\u65b9\u5f0f\u63d2\u5165Dialog</div>\n        <div className=\"item\" onClick={() => setVisible2(true)}>\u6a21\u677f\u65b9\u5f0f\u63d2\u5165Dialog</div>\n        <div className=\"item\" onClick={handleTip}>Modal.tip</div>\n      </div>\n      <div className={'test-block'}>\n        <p>\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0</p>\n        <p>count: {count}</p>\n        <p><button type=\"button\" onClick={() => setCount(count + 1)}>add</button></p>\n      </div>\n\n      <ViewSource code={sourceCode} />\n    </div>\n  )\n}\n\nexport default DialogDemo"},75:function(e,n,t){e.exports={"page-view":"modal_page-view__3QIek"}}}]);