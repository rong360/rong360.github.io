(this["webpackJsonprong-ui-react"]=this["webpackJsonprong-ui-react"]||[]).push([[4],{103:function(e,n){e.exports='import { useCallback, useState, useRef, useEffect, useReducer } from \'react\'\nimport sourceCode from \'./code.txt\'\nimport styles from \'./style/form.module.less\'\n\nfunction FormDemo ({ Titlebar, history, Form, Input, Select, Modal, ViewSource }) {\n  const goHome = useCallback(() => history.push({ pathname: \'/\' }), [history])\n  const [count, setCount] = useState(0)\n  // const [timeStamp, setTimeStamp] = useState(new Date().getTime())\n  const [_count, forceUpdate] = useReducer(x => x + 1, 0);\n  const [user, setUser] = useState({\n    "type": "text",\n    "title": "\u672c\u4eba\u59d3\u540d",\n    "name": "bureau_user_name",\n    "value": "zyx",\n    "placeholder": "",\n    "readonly": 0,\n    "maxlength": 6,\n    "rules": [{\n      "required": true,\n      "message": "\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",\n      "trigger": "blur"\n    }, {\n      validator (rule, value) {\n        return value.length >= 3\n      },\n      message: \'\u59d3\u540d\u6700\u5c11\u4e09\u4e2a\u5b57\',\n      trigger: \'blur\'\n    }]\n  })\n  const [age, setAge] = useState({\n    "type": "number",\n    "title": "\u5e74\u9f84",\n    "name": "age",\n    "value": "23",\n    "placeholder": "",\n    "fixed": 0,\n    "unit": "",\n    "readonly": 0,\n    "maxlength": 3\n  })\n  const [amount, setAmount] = useState({\n    "type": "number",\n    "title": "\u7533\u8bf7\u91d1\u989d",\n    "name": "application_amount",\n    "value": "10000.00",\n    "fixed": 2,\n    "placeholder": "",\n    "unit": "",\n    "readonly": 0,\n    "maxlength": 8,\n    "rules": [{\n      "required": true,\n      "message": "\u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a\u7a7a",\n      "trigger": "blur"\n    }, {\n      validator (rule, value, callback, source, options) {\n        let { component } = options\n        if (value > 10000) {\n          component.setValue(\'10000\')\n          // fields\u6e32\u67d3\u5f02\u5e38\u65f6\u5f3a\u5236\u9875\u9762\u6e32\u67d3\n          setTimeout(() => {\n            forceUpdate()\n          }, 0);\n          callback(new Error(\'\u6700\u5927\u7533\u8bf7\u91d1\u989d\u4e3a10000\u5143\uff0c\u5df2\u4e3a\u4f60\u81ea\u52a8\u53d8\u66f4\u4e3a10000\u5143\'))\n        } else {\n          callback()\n        }\n      },\n      trigger: \'blur\'\n    }]\n  })\n  const [phone, setPhone] = useState({\n    "type": "tel",\n    "title": "\u624b\u673a\u53f7\u7801",\n    "name": "phone_number",\n    "value": "13122222222",\n    "unit": "",\n    "placeholder": "",\n    "readonly": 0,\n    "maxlength": 11\n  })\n  const [email, setEmail] = useState({\n    "type": "email",\n    "title": "\u90ae\u7bb1",\n    "name": "email",\n    "value": "test@qq.com",\n    "readonly": 0,\n    "placeholder": "",\n    "emailList": [\n      "qq.com",\n      "sina.com",\n      "sohu.com",\n      "163.com",\n      "foxmail.com",\n      "gmail.com",\n      "rong360.com",\n      "edu.cn",\n      "outlook.com",\n      "vip.qq.com",\n      "126.com"\n    ],\n    "rules": [{\n      "required": true,\n      "message": "\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a",\n      "trigger": "blur"\n    },\n    {\n      "type": "email",\n      "message": "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e",\n      "trigger": "blur"\n    }]\n  })\n  const [IDCard, setIDCard] = useState({\n    "type": "IDCard",\n    "title": "\u672c\u4eba\u8eab\u4efd\u8bc1\u53f7\u7801",\n    "name": "user_id",\n    "value": "110101199003014",\n    "placeholder": "",\n    "readonly": 0\n  })\n  const [loanTerm, setLoanTerm] = useState({\n    title: "\u8d37\u6b3e\u671f\u9650",\n    name: "loan_term",\n    value: \'\',\n    data: [{\n      text: "1\u4e2a\u6708",\n      value: "1"\n    }, {\n      text: "2\u4e2a\u6708",\n      value: \'2\'\n\n    }, {\n      text: "36\u4e2a\u6708",\n      value: "36"\n    }, {\n      text: "\u81ea\u5df1\u8f93\u5165",\n      value: "0",\n      children: [{\n        component: Input,\n        type: "number",\n        title: "\u8f93\u5165\u60a8\u7684\u8d37\u6b3e\u671f\u9650",\n        name: "m_term",\n        value: "",\n        unit: "\u4e2a\u6708",\n        placeholder: "\u8bf7\u8f93\u5165\u60a8\u671f\u671b\u7684\u8d37\u6b3e\u671f\u9650",\n        rules: [{\n          required: true,\n          message: \'\u8d37\u6b3e\u671f\u9650\u4e0d\u80fd\u4e3a\u7a7a\'\n        },\n        {\n          validator (rule, value, callback, source, options) {\n            const { component } = options\n            const errors = []\n            if (value > 12) {\n              component.setValue(\'12\')\n              errors.push(\'\u8d37\u6b3e\u671f\u9650\u6700\u957f12\u4e2a\u6708\uff0c\u4ee5\u4e3a\u60a8\u53d8\u66f4\u4e3a12\u4e2a\u6708\')\n            } else if (value < 3) {\n              component.setValue(\'3\')\n              errors.push(\'\u8d37\u6b3e\u671f\u9650\u6700\u77ed3\u4e2a\u6708\uff0c\u4ee5\u4e3a\u60a8\u53d8\u66f4\u4e3a3\u4e2a\u6708\')\n            }\n            // component\u8c03\u7528setValue\u540e\u5982\u679cfields\u6e32\u67d3\u5f02\u5e38\u53ef\u5f3a\u5236\u9875\u9762\u6e32\u67d3\n            setTimeout(() => {\n              forceUpdate()\n            }, 0);\n            callback(errors)\n          },\n          trigger: \'blur\'\n        }]\n      }]\n    }],\n    rules: [{\n      required: true,\n      message: \'\u8d37\u6b3e\u671f\u9650\u4e0d\u80fd\u4e3a\u7a7a\'\n    }, {\n      validator (rule, value, callback) {\n        if (value === "1") {\n          return new Error(\'\u76ee\u524d\u6682\u4e0d\u652f\u63011\u4e2a\u6708\u7684\u8d37\u6b3e\uff0c\u8bf7\u9009\u62e9\u8d37\u6b3e\u671f\u9650\')\n        }\n        callback()\n      }\n    }]\n  })\n  const [isCompleted, setIsCompleted] = useState(false)\n  const formRef = useRef(null)\n  // const handleChange = useCallback(({ event, component, value }) => {\n  //   // component.props.item.value = value\n  //   // setList(prevList => {\n  //   //   return [...prevList]\n  //   // })\n  // }, [])\n  const handleChange = useCallback(({ event, component, value }) => {\n\n  }, [])\n  const userChange = useCallback(({ event, component, value }) => {\n    setUser(Object.assign({}, user, { value: value }))\n  }, [user])\n  const ageChange = useCallback(({ event, component, value }) => {\n    setAge(Object.assign({}, age, { value: value }))\n  }, [age])\n  const amountChange = useCallback(({ event, component, value }) => {\n    setAmount(Object.assign({}, amount, { value: value }))\n  }, [amount])\n  const phoneChange = useCallback(({ event, component, value }) => {\n    setPhone(Object.assign({}, phone, { value: value }))\n  }, [phone])\n  const emailChange = useCallback(({ event, component, value }) => {\n    setEmail(Object.assign({}, email, { value: value }))\n  }, [email])\n  const IDCardChange = useCallback(({ event, component, value }) => {\n    setIDCard(Object.assign({}, IDCard, { value: value }))\n  }, [IDCard])\n  const loanTermChange = useCallback(({ event, component, value }) => {\n    setLoanTerm(Object.assign({}, loanTerm, { value: value }))\n  }, [loanTerm])\n\n  const onComplete = useCallback(({ isCompleted }) => {\n    setIsCompleted(isCompleted)\n  }, [])\n\n  const doSubmit = () => {\n    formRef.current.validate((valid, validateMessage) => {\n      if (valid) {\n        console.log(\'getValue\', formRef.current.getValue())\n        console.log(\'getSerializeValue\', formRef.current.getSerializeValue())\n        console.log(\'getObjectValue\', formRef.current.getObjectValue())\n      } else {\n        Modal.create({\n          content: validateMessage.map((message, idx) => <p key={idx}>{message}</p>)\n        })\n      }\n    })\n  }\n  const doSubmit2 = () => {\n    formRef.current.validateOneByOne((valid, validateMessage) => {\n      if (valid) {\n        console.log(\'getValue\', formRef.current.getValue())\n        console.log(\'getSerializeValue\', formRef.current.getSerializeValue())\n        console.log(\'getObjectValue\', formRef.current.getObjectValue())\n      } else {\n        Modal.create({ content: validateMessage })\n      }\n    })\n  }\n  const doReset = () => {\n    formRef.current.resetFields()\n  }\n  const btnCls = [styles[\'btn\'], isCompleted ? \'\' : styles[\'btn-disabled\']].filter(Boolean).join(\' \')\n\n  const [fields, setFields] = useState([])\n  useEffect(() => {\n    setFields(formRef.current._state.fields)\n  }, [])\n\n  useEffect(() => {\n    // console.log(_count)\n  }, [_count])\n\n\n  return <div className={styles[\'page-view\']}>\n    <Titlebar theme=\'b\' c=\'Form example\' onBack={goHome} />\n    <Form ref={formRef} className={styles[\'r-form\']} labelWidth="5.8rem" labelPosition="right" textPosition="left" onComplete={onComplete} onChange={handleChange}>\n      <Input {...user} onChange={userChange} />\n      <Input {...age} onChange={ageChange} />\n      <Input {...amount} onChange={amountChange} />\n      <Input {...phone} onChange={phoneChange} />\n      <Input {...email} onChange={emailChange} />\n      <Input {...IDCard} onChange={IDCardChange} />\n      <Select {...loanTerm} onChange={loanTermChange} />\n      <div className={styles[\'btn-wrap\']}>\n        <div className={btnCls} onClick={doSubmit}>\n          <p>\u63d0\u4ea4\uff08{isCompleted ? \'\u5b8c\u6210\' : \'\u672a\u5b8c\u6210\'}\uff09</p>\n          <p>validate</p>\n        </div>\n        <div className={btnCls} onClick={doSubmit2}>\n          <p>\u63d0\u4ea4\uff08{isCompleted ? \'\u5b8c\u6210\' : \'\u672a\u5b8c\u6210\'}\uff09</p>\n          <p>validateOneByOne</p>\n        </div>\n        <div className={styles[\'btn\']} onClick={doReset}>\n          <p>\u91cd\u8bbe</p>\n        </div>\n      </div>\n    </Form>\n    <div className=\'results\'>\n      {\n        fields.map(item => <p key={item.props.title}>{item.props.title}:{item.state.value}</p>)\n      }\n    </div>\n    <div className={\'test-block\'}>\n      <p>\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0</p>\n      <p>count: {count}</p>\n      <p><button type="button" onClick={() => setCount(count + 1)}>add</button></p>\n    </div>\n\n    <ViewSource code={sourceCode}/>\n  </div>\n}\n\nexport default FormDemo'},124:function(e,n,t){"use strict";t.r(n);var a=t(14),l=t(67),o=t(0),r=t(103),c=t.n(r),s=t(68),u=t.n(s),i=t(6);n.default=function(e){var n=e.Titlebar,t=e.history,r=e.Form,s=e.Input,m=e.Select,b=e.Modal,d=e.ViewSource,p=Object(o.useCallback)((function(){return t.push({pathname:"/"})}),[t]),g=Object(o.useState)(0),v=Object(l.a)(g,2),f=v[0],j=v[1],h=Object(o.useReducer)((function(e){return e+1}),0),O=Object(l.a)(h,2),C=O[0],x=O[1],y=Object(o.useState)({type:"text",title:"\u672c\u4eba\u59d3\u540d",name:"bureau_user_name",value:"zyx",placeholder:"",readonly:0,maxlength:6,rules:[{required:!0,message:"\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",trigger:"blur"},{validator:function(e,n){return n.length>=3},message:"\u59d3\u540d\u6700\u5c11\u4e09\u4e2a\u5b57",trigger:"blur"}]}),S=Object(l.a)(y,2),k=S[0],V=S[1],_=Object(o.useState)({type:"number",title:"\u5e74\u9f84",name:"age",value:"23",placeholder:"",fixed:0,unit:"",readonly:0,maxlength:3}),I=Object(l.a)(_,2),q=I[0],w=I[1],R=Object(o.useState)({type:"number",title:"\u7533\u8bf7\u91d1\u989d",name:"application_amount",value:"10000.00",fixed:2,placeholder:"",unit:"",readonly:0,maxlength:8,rules:[{required:!0,message:"\u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a\u7a7a",trigger:"blur"},{validator:function(e,n,t,a,l){var o=l.component;n>1e4?(o.setValue("10000"),setTimeout((function(){x()}),0),t(new Error("\u6700\u5927\u7533\u8bf7\u91d1\u989d\u4e3a10000\u5143\uff0c\u5df2\u4e3a\u4f60\u81ea\u52a8\u53d8\u66f4\u4e3a10000\u5143"))):t()},trigger:"blur"}]}),T=Object(l.a)(R,2),N=T[0],D=T[1],E=Object(o.useState)({type:"tel",title:"\u624b\u673a\u53f7\u7801",name:"phone_number",value:"13122222222",unit:"",placeholder:"",readonly:0,maxlength:11}),F=Object(l.a)(E,2),z=F[0],A=F[1],B=Object(o.useState)({type:"email",title:"\u90ae\u7bb1",name:"email",value:"test@qq.com",readonly:0,placeholder:"",emailList:["qq.com","sina.com","sohu.com","163.com","foxmail.com","gmail.com","rong360.com","edu.cn","outlook.com","vip.qq.com","126.com"],rules:[{required:!0,message:"\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a",trigger:"blur"},{type:"email",message:"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e",trigger:"blur"}]}),M=Object(l.a)(B,2),L=M[0],U=M[1],P=Object(o.useState)({type:"IDCard",title:"\u672c\u4eba\u8eab\u4efd\u8bc1\u53f7\u7801",name:"user_id",value:"110101199003014",placeholder:"",readonly:0}),J=Object(l.a)(P,2),H=J[0],W=J[1],Q=Object(o.useState)({title:"\u8d37\u6b3e\u671f\u9650",name:"loan_term",value:"",data:[{text:"1\u4e2a\u6708",value:"1"},{text:"2\u4e2a\u6708",value:"2"},{text:"36\u4e2a\u6708",value:"36"},{text:"\u81ea\u5df1\u8f93\u5165",value:"0",children:[{component:s,type:"number",title:"\u8f93\u5165\u60a8\u7684\u8d37\u6b3e\u671f\u9650",name:"m_term",value:"",unit:"\u4e2a\u6708",placeholder:"\u8bf7\u8f93\u5165\u60a8\u671f\u671b\u7684\u8d37\u6b3e\u671f\u9650",rules:[{required:!0,message:"\u8d37\u6b3e\u671f\u9650\u4e0d\u80fd\u4e3a\u7a7a"},{validator:function(e,n,t,a,l){var o=l.component,r=[];n>12?(o.setValue("12"),r.push("\u8d37\u6b3e\u671f\u9650\u6700\u957f12\u4e2a\u6708\uff0c\u4ee5\u4e3a\u60a8\u53d8\u66f4\u4e3a12\u4e2a\u6708")):n<3&&(o.setValue("3"),r.push("\u8d37\u6b3e\u671f\u9650\u6700\u77ed3\u4e2a\u6708\uff0c\u4ee5\u4e3a\u60a8\u53d8\u66f4\u4e3a3\u4e2a\u6708")),setTimeout((function(){x()}),0),t(r)},trigger:"blur"}]}]}],rules:[{required:!0,message:"\u8d37\u6b3e\u671f\u9650\u4e0d\u80fd\u4e3a\u7a7a"},{validator:function(e,n,t){if("1"===n)return new Error("\u76ee\u524d\u6682\u4e0d\u652f\u63011\u4e2a\u6708\u7684\u8d37\u6b3e\uff0c\u8bf7\u9009\u62e9\u8d37\u6b3e\u671f\u9650");t()}}]}),Y=Object(l.a)(Q,2),$=Y[0],G=Y[1],K=Object(o.useState)(!1),X=Object(l.a)(K,2),Z=X[0],ee=X[1],ne=Object(o.useRef)(null),te=Object(o.useCallback)((function(e){e.event,e.component,e.value}),[]),ae=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;V(Object.assign({},k,{value:n}))}),[k]),le=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;w(Object.assign({},q,{value:n}))}),[q]),oe=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;D(Object.assign({},N,{value:n}))}),[N]),re=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;A(Object.assign({},z,{value:n}))}),[z]),ce=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;U(Object.assign({},L,{value:n}))}),[L]),se=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;W(Object.assign({},H,{value:n}))}),[H]),ue=Object(o.useCallback)((function(e){e.event,e.component;var n=e.value;G(Object.assign({},$,{value:n}))}),[$]),ie=Object(o.useCallback)((function(e){var n=e.isCompleted;ee(n)}),[]),me=[u.a.btn,Z?"":u.a["btn-disabled"]].filter(Boolean).join(" "),be=Object(o.useState)([]),de=Object(l.a)(be,2),pe=de[0],ge=de[1];return Object(o.useEffect)((function(){ge(ne.current._state.fields)}),[]),Object(o.useEffect)((function(){}),[C]),Object(i.jsxs)("div",{className:u.a["page-view"],children:[Object(i.jsx)(n,{theme:"b",c:"Form example",onBack:p}),Object(i.jsxs)(r,{ref:ne,className:u.a["r-form"],labelWidth:"5.8rem",labelPosition:"right",textPosition:"left",onComplete:ie,onChange:te,children:[Object(i.jsx)(s,Object(a.a)(Object(a.a)({},k),{},{onChange:ae})),Object(i.jsx)(s,Object(a.a)(Object(a.a)({},q),{},{onChange:le})),Object(i.jsx)(s,Object(a.a)(Object(a.a)({},N),{},{onChange:oe})),Object(i.jsx)(s,Object(a.a)(Object(a.a)({},z),{},{onChange:re})),Object(i.jsx)(s,Object(a.a)(Object(a.a)({},L),{},{onChange:ce})),Object(i.jsx)(s,Object(a.a)(Object(a.a)({},H),{},{onChange:se})),Object(i.jsx)(m,Object(a.a)(Object(a.a)({},$),{},{onChange:ue})),Object(i.jsxs)("div",{className:u.a["btn-wrap"],children:[Object(i.jsxs)("div",{className:me,onClick:function(){ne.current.validate((function(e,n){e?(console.log("getValue",ne.current.getValue()),console.log("getSerializeValue",ne.current.getSerializeValue()),console.log("getObjectValue",ne.current.getObjectValue())):b.create({content:n.map((function(e,n){return Object(i.jsx)("p",{children:e},n)}))})}))},children:[Object(i.jsxs)("p",{children:["\u63d0\u4ea4\uff08",Z?"\u5b8c\u6210":"\u672a\u5b8c\u6210","\uff09"]}),Object(i.jsx)("p",{children:"validate"})]}),Object(i.jsxs)("div",{className:me,onClick:function(){ne.current.validateOneByOne((function(e,n){e?(console.log("getValue",ne.current.getValue()),console.log("getSerializeValue",ne.current.getSerializeValue()),console.log("getObjectValue",ne.current.getObjectValue())):b.create({content:n})}))},children:[Object(i.jsxs)("p",{children:["\u63d0\u4ea4\uff08",Z?"\u5b8c\u6210":"\u672a\u5b8c\u6210","\uff09"]}),Object(i.jsx)("p",{children:"validateOneByOne"})]}),Object(i.jsx)("div",{className:u.a.btn,onClick:function(){ne.current.resetFields()},children:Object(i.jsx)("p",{children:"\u91cd\u8bbe"})})]})]}),Object(i.jsx)("div",{className:"results",children:pe.map((function(e){return Object(i.jsxs)("p",{children:[e.props.title,":",e.state.value]},e.props.title)}))}),Object(i.jsxs)("div",{className:"test-block",children:[Object(i.jsx)("p",{children:"\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0"}),Object(i.jsxs)("p",{children:["count: ",f]}),Object(i.jsx)("p",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return j(f+1)},children:"add"})})]}),Object(i.jsx)(d,{code:c.a})]})}},65:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(66);function l(e,n){if(e){if("string"===typeof e)return Object(a.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(a.a)(e,n):void 0}}},66:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}t.d(n,"a",(function(){return a}))},67:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(65);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],a=!0,l=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done)&&(t.push(r.value),!n||t.length!==n);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(l)throw o}}return t}}(e,n)||Object(a.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68:function(e,n,t){e.exports={"page-view":"form_page-view__3EjUf","r-form":"form_r-form__2Qj1J","btn-wrap":"form_btn-wrap__3gYgm",btn:"form_btn__3iC5p","btn-disabled":"form_btn-disabled__1LBex"}}}]);