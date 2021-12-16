(this["webpackJsonprong-ui-react"]=this["webpackJsonprong-ui-react"]||[]).push([[19],{110:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(76),s=t.n(c),o=t(77),i=t.n(o),l=t(6);n.default=function(e){var n=e.Titlebar,t=e.history,c=e.Toast,o=e.ViewSource,r=Object(a.useCallback)((function(){return t.push({pathname:"/"})}),[t]);return Object(l.jsxs)("div",{className:i.a["toast-page"],children:[Object(l.jsx)(n,{theme:"b",onBack:r,children:"Toast"}),Object(l.jsxs)("div",{className:"p-15",children:[Object(l.jsx)("div",{className:"bc-20b2aa lh-45 pl-15 fs-14",onClick:function(){c.create("\u957f\u6587\u672c\u5f62\u5f0f\u4e3a\u6587\u5b57\u8d85\u8fc7\u5341\u4e2a\u65f6\u4f7f\u7528\uff0c\u5bbd\u5ea6\u56fa\u5b9a")},children:"\u9ed8\u8ba4 default"}),Object(l.jsx)("div",{className:"bc-20b2aa lh-45 pl-15 fs-14 mt-10",onClick:function(){c.positive("\u79ef\u6781\u6587\u6848\u4e0d\u8d85\u8fc7\u5341\u4e2a\u5b57")},children:'\u79ef\u6781\u6587\u6848\uff08type="positive"\uff09'}),Object(l.jsx)("div",{className:"bc-20b2aa lh-45 pl-15 fs-14 mt-10",onClick:function(){c.create({content:"\u6d88\u6781\u6587\u6848\u4e0d\u8d85\u8fc7\u5341\u4e2a\u5b57",type:"negetive"})},children:'\u6d88\u6781\u6587\u6848\uff08type="negetive"\uff09'}),Object(l.jsx)("div",{className:"bc-20b2aa lh-45 pl-15 fs-14 mt-10",onClick:function(){c.create({content:"\u6d88\u5931\u65f6\u56de\u8c03\uff0c\u51faalert",callback:function(){alert(0)}})},children:"\u6d88\u5931\u65f6\u56de\u8c03"})]}),Object(l.jsx)(o,{code:s.a})]})}},76:function(e,n){e.exports="\nimport { useCallback } from 'react'\nimport sourceCode from './code.txt'\nimport styles from './style/toast.module.less'\n\nconst ToastDemo = ({ Titlebar, history, Toast, ViewSource }) => {\n  const goHome = useCallback(() => history.push({ pathname: '/' }), [history])\n  const onDefaultClick = () => {\n    Toast.create('\u957f\u6587\u672c\u5f62\u5f0f\u4e3a\u6587\u5b57\u8d85\u8fc7\u5341\u4e2a\u65f6\u4f7f\u7528\uff0c\u5bbd\u5ea6\u56fa\u5b9a')\n  }\n  const onPositiveClick = () => {\n    Toast.positive('\u79ef\u6781\u6587\u6848\u4e0d\u8d85\u8fc7\u5341\u4e2a\u5b57')\n  }\n  const onNegetiveClick = () => {\n    // Toast.negetive('\u6d88\u6781\u6587\u6848\u4e0d\u8d85\u8fc7\u5341\u4e2a\u5b57')\n    Toast.create({\n      content: '\u6d88\u6781\u6587\u6848\u4e0d\u8d85\u8fc7\u5341\u4e2a\u5b57',\n      type: 'negetive'\n    })\n  }\n  const onCallbackClick = () => {\n    Toast.create({\n      content: '\u6d88\u5931\u65f6\u56de\u8c03\uff0c\u51faalert',\n      callback () {\n        alert(0)\n      }\n    })\n  }\n\n  return <div className={styles['toast-page']}>\n    <Titlebar theme='b' onBack={goHome}>Toast</Titlebar>\n    <div className='p-15'>\n      <div className='bc-20b2aa lh-45 pl-15 fs-14' onClick={onDefaultClick}>\n        \u9ed8\u8ba4 default\n      </div>\n      <div className='bc-20b2aa lh-45 pl-15 fs-14 mt-10' onClick={onPositiveClick}>\n        \u79ef\u6781\u6587\u6848\uff08type=\"positive\"\uff09\n      </div>\n      <div className='bc-20b2aa lh-45 pl-15 fs-14 mt-10' onClick={onNegetiveClick}>\n        \u6d88\u6781\u6587\u6848\uff08type=\"negetive\"\uff09\n      </div>\n      <div className='bc-20b2aa lh-45 pl-15 fs-14 mt-10' onClick={onCallbackClick}>\n        \u6d88\u5931\u65f6\u56de\u8c03\n      </div>\n    </div>\n\n    <ViewSource code={sourceCode} />\n  </div>\n}\n\nexport default ToastDemo"},77:function(e,n,t){}}]);