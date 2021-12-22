(this["webpackJsonprong-ui-react"]=this["webpackJsonprong-ui-react"]||[]).push([[6],{106:function(e,n){e.exports='import { useCallback, useState, useRef } from \'react\'\nimport sourceCode from \'./code_dynamic_registration.txt\'\nimport styles from \'./style/form.module.less\'\nimport componentfactory from \'../../utils/componentFactory\'\n\nlet data = [{\n  "rely_policy_id": 0,\n  "id": "123277",\n  "category_id": "1",\n  "title": "\u672c\u4eba\u59d3\u540d",\n  "placeholder": "",\n  "var_name": "user_name",\n  "type": "text",\n  "verify_type": "text",\n  "data": "",\n  "unit": "",\n  "material_type": "100",\n  "info_property": "1",\n  "level": 1,\n  "desc": "",\n  "value": "",\n  "readonly": 0,\n  "maxlength": 800,\n  "rules": [{\n    "required": true,\n    "message": "\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",\n    "trigger": "blur"\n  }]\n}, {\n  "rely_policy_id": 0,\n  "id": "323472",\n  "category_id": "1",\n  "title": "\u672c\u4eba\u8eab\u4efd\u8bc1\u53f7\u7801",\n  "var_name": "user_id",\n  "type": "5",\n  "verify_type": "50",\n  "data": "",\n  "unit": "",\n  "material_type": "100",\n  "info_property": "1",\n  "level": 1,\n  "desc": "",\n  "value": "110101199003079614",\n  "readonly": 0\n}, {\n  "rely_policy_id": 0,\n  "id": "832336",\n  "category_id": "2",\n  "title": "GPS\u4fe1\u606f",\n  "var_name": "gps_location",\n  "type": "5",\n  "verify_type": "0",\n  "data": "",\n  "unit": "",\n  "material_type": "0",\n  "info_property": "0",\n  "level": 1,\n  "desc": "",\n  "readonly": 0\n}, {\n  "rely_policy_id": 0,\n  "id": "612321392",\n  "category_id": "1",\n  "title": "\u7533\u8bf7\u91d1\u989d",\n  "var_name": "application_amount",\n  "type": "9",\n  "verify_type": "0",\n  "data": "",\n  "unit": "",\n  "material_type": "107",\n  "info_property": "1",\n  "level": 1,\n  "desc": "",\n  "value": "10000.00",\n  "fixed": 2,\n  "readonly": 0,\n  "maxlength": 8\n}, {\n  "rely_policy_id": 0,\n  "id": "84821212",\n  "category_id": "1",\n  "title": "\u8d37\u6b3e\u7533\u8bf7\u671f\u9650",\n  "var_name": "apply_term",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": 90,\n    "desc": "3\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": 180,\n    "desc": "6\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": 360,\n    "desc": "12\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": 540,\n    "desc": "18\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": 720,\n    "desc": "24\u4e2a\u6708",\n    "rely": []\n  }],\n  "unit": "",\n  "material_type": "107",\n  "info_property": "0",\n  "level": 1,\n  "desc": "",\n  "value": "",\n  "readonly": 0\n}, {\n  "rely_policy_id": 0,\n  "id": "163",\n  "category_id": "1",\n  "title": "\u53ef\u63a5\u53d7\u6700\u9ad8\u6708\u8fd8\u6b3e\u989d\u5ea6\uff08\u5143\uff09",\n  "var_name": "max_repayment",\n  "type": "9",\n  "verify_type": "0",\n  "data": "",\n  "unit": "\u5143/\u6708",\n  "material_type": "100",\n  "info_property": "0",\n  "level": 1,\n  "desc": "",\n  "value": "2000",\n  "readonly": 0,\n  "maxlength": 8\n}, {\n  "rely_policy_id": 0,\n  "id": "45256233",\n  "category_id": "112",\n  "title": "\u6559\u80b2\u7a0b\u5ea6",\n  "var_name": "user_education",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": "1",\n    "desc": "\u7855\u58eb\u53ca\u4ee5\u4e0a",\n    "rely": []\n  }, {\n    "value": "2",\n    "desc": "\u672c\u79d1",\n    "rely": []\n  }, {\n    "value": "3",\n    "desc": "\u5927\u4e13",\n    "rely": []\n  }, {\n    "value": "4",\n    "desc": "\u4e2d\u4e13/\u9ad8\u4e2d\u53ca\u4ee5\u4e0b",\n    "rely": []\n  }],\n  "unit": "",\n  "material_type": "100",\n  "info_property": "1",\n  "level": 1,\n  "desc": "",\n  "value": "2",\n  "readonly": 0\n}, {\n  "rely_policy_id": 0,\n  "id": "6351222",\n  "category_id": "1",\n  "title": "\u73b0\u5355\u4f4d\u662f\u5426\u7f34\u7eb3\u793e\u4fdd",\n  "var_name": "social_security",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": "1",\n    "desc": "\u7f34\u7eb3\u672c\u5730\u793e\u4fdd",\n    "rely": []\n  }, {\n    "value": "2",\n    "desc": "\u672a\u7f34\u7eb3\u793e\u4fdd",\n    "rely": []\n  }],\n  "unit": "",\n  "material_type": "101",\n  "info_property": "1",\n  "level": 1,\n  "desc": "",\n  "value": "2",\n  "readonly": 0\n}, {\n  "rely_policy_id": 0,\n  "id": "26",\n  "category_id": "1",\n  "title": "\u8f66\u8f86\u60c5\u51b5",\n  "var_name": "auto_type",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": "1",\n    "desc": "\u65e0\u8f66",\n    "rely": []\n  }, {\n    "value": "2",\n    "desc": "\u672c\u4eba\u540d\u4e0b\u6709\u8f66\uff0c\u65e0\u8d37\u6b3e",\n    "rely": []\n  }, {\n    "value": "3",\n    "desc": "\u672c\u4eba\u540d\u4e0b\u6709\u8f66\uff0c\u6709\u6309\u63ed\u8d37\u6b3e",\n    "rely": []\n  }, {\n    "value": "4",\n    "desc": "\u672c\u4eba\u540d\u4e0b\u6709\u8f66\uff0c\u4f46\u5df2\u88ab\u62b5\u62bc",\n    "rely": []\n  }, {\n    "value": "5",\n    "desc": "\u5176\u4ed6\uff08\u8bf7\u5907\u6ce8\uff09",\n    "rely": []\n  }],\n  "unit": "",\n  "material_type": "103",\n  "info_property": "0",\n  "level": 1,\n  "desc": "",\n  "value": "1",\n  "readonly": 0\n}, {\n  "rely_policy_id": 0,\n  "id": "26489",\n  "category_id": "1",\n  "title": "\u804c\u4e1a\u7c7b\u522b",\n  "var_name": "op_type",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": "1",\n    "desc": "\u4f01\u4e1a\u4e3b",\n    "rely": ["20996", "28905"]\n  }, {\n    "value": "2",\n    "desc": "\u4e2a\u4f53\u5de5\u5546\u6237",\n    "rely": ["20996", "28905"]\n  }, {\n    "value": "4",\n    "desc": "\u4e0a\u73ed\u4eba\u7fa4",\n    "rely": ["5998", "5256"]\n  }, {\n    "value": "5",\n    "desc": "\u5b66\u751f",\n    "rely": []\n  }, {\n    "value": "10",\n    "desc": "\u65e0\u56fa\u5b9a\u804c\u4e1a",\n    "rely": ["832"]\n  }],\n  "unit": "",\n  "material_type": "101",\n  "info_property": "0",\n  "level": 1,\n  "desc": "",\n  "value": "4",\n  "readonly": 0\n}, {\n  "rely_policy_id": "26489",\n  "id": "5998",\n  "category_id": "1",\n  "title": "\u6708\u5de5\u8d44\u6536\u5165\uff08\u5143\uff09",\n  "var_name": "user_income_by_card",\n  "type": "9",\n  "verify_type": "0",\n  "data": "",\n  "unit": "\u5143",\n  "material_type": "101",\n  "info_property": "1",\n  "level": 2,\n  "desc": "",\n  "value": "7000",\n  "readonly": 0\n}, {\n  "rely_policy_id": "26489",\n  "id": "5256",\n  "category_id": "1",\n  "title": "\u73b0\u5355\u4f4d\u5de5\u4f5c\u5e74\u9650",\n  "var_name": "work_period",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": "1",\n    "desc": "0-5\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": "2",\n    "desc": "6-12\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": "3",\n    "desc": "1-3\u5e74",\n    "rely": []\n  }, {\n    "value": "4",\n    "desc": "3-7\u5e74",\n    "rely": []\n  }, {\n    "value": "5",\n    "desc": "7\u5e74\u4ee5\u4e0a",\n    "rely": []\n  }],\n  "unit": "\u4e2a\u6708",\n  "material_type": "101",\n  "info_property": "1",\n  "level": 2,\n  "desc": "",\n  "value": "1",\n  "readonly": 0\n}, {\n  "rely_policy_id": "26489",\n  "id": "20996",\n  "category_id": "1",\n  "title": "\u7ecf\u8425\u6d41\u6c34\uff08\u5bf9\u516c\u6d41\u6c34\uff09",\n  "var_name": "corporate_flow",\n  "type": "9",\n  "verify_type": "0",\n  "data": "",\n  "unit": "",\n  "material_type": "102",\n  "info_property": "0",\n  "level": 2,\n  "desc": "",\n  "readonly": 0\n}, {\n  "rely_policy_id": "26489",\n  "id": "28905",\n  "category_id": "1",\n  "title": "\u7ecf\u8425\u5e74\u9650",\n  "var_name": "operating_year",\n  "type": "2",\n  "verify_type": "0",\n  "data": [{\n    "value": "1",\n    "desc": "0-3\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": "2",\n    "desc": "3-6\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": "3",\n    "desc": "7-12\u4e2a\u6708",\n    "rely": []\n  }, {\n    "value": "4",\n    "desc": "1-2\u5e74",\n    "rely": []\n  }, {\n    "value": "5",\n    "desc": "3-4\u5e74",\n    "rely": []\n  }, {\n    "value": "6",\n    "desc": "5\u5e74\u4ee5\u4e0a",\n    "rely": []\n  }],\n  "unit": "",\n  "material_type": "102",\n  "info_property": "1",\n  "level": 2,\n  "desc": "",\n  "readonly": 0\n}, {\n  "rely_policy_id": "26489",\n  "id": "832",\n  "category_id": "1",\n  "title": "\u6708\u5e73\u5747\u6536\u5165",\n  "var_name": "monthly_average_income",\n  "type": "9",\n  "verify_type": "0",\n  "unit": "",\n  "material_type": "101",\n  "info_property": "0",\n  "level": 2,\n  "desc": "",\n  "value": "8000",\n  "readonly": 0\n}]\n\nlet basicMap = {}\nlet firstLevel = []\n// \u6784\u9020\u7b26\u5408\u7ec4\u4ef6\u8981\u6c42\u7684\u6570\u636e\u683c\u5f0f\ndata.forEach((item, index) => {\n  let type = item.verify_type === "0" ? item.type : item.verify_type\n  item.componentType = componentfactory(type).componentType\n  item.component = componentfactory(type).component\n  item.type = componentfactory(type).verifyType\n  // \u7528\u6237\u59d3\u540d\u7279\u6b8a\u6821\u9a8c\n  if (item.id === "123277") {\n    item.rules.push({\n      validator (rule, value, callback) {\n        if (value.length < 3) {\n          return new Error(\'\u59d3\u540d\u6700\u5c11\u4e09\u4e2a\u5b57\')\n        }\n        callback()\n      },\n      trigger: \'blur\'\n    })\n  }\n  // \u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a0\n  if (item.id === "612321392") {\n    item.rules = [{ required: true, message: \'***\u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a\u7a7a***\', trigger: \'blur\' }]\n    item.rules.push({\n      validator (rule, value, callback) {\n        if (value === "0") {\n          return new Error(\'\u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a\u96f6\uff01\')\n        }\n        callback()\n      },\n      trigger: \'blur\'\n    })\n  }\n  if (item.id === "832336") {\n    item.componentType = componentfactory(\'hidden\').componentType\n    item.component = componentfactory(\'hidden\').component\n    item.type = componentfactory(\'hidden\').verifyType\n    item.rules = []\n    item.value = \'\'\n    if (window.navigator.geolocation) {\n      window.navigator.geolocation.getCurrentPosition && window.navigator.geolocation.getCurrentPosition(function (position) {\n        // coords.latitude\u5341\u8fdb\u5236\u6570\u7684\u7eac\u5ea6\n        // coords.longitude\u5341\u8fdb\u5236\u6570\u7684\u7ecf\u5ea6\n        item.value = position.coords.longitude + \',\' + position.coords.latitude\n      }, function () { }, {\n        enableHighAccuracy: true,\n        timeout: 45000\n      })\n    } else {\n      item.value = \'\u65e0\u6cd5\u83b7\u53d6gps\'\n      console.log(\'Your browser does not natively support geolocation.\');\n    }\n  }\n  // basic\u751f\u6210map\u673a\u6784\uff0c\u65b9\u4fbf\u6570\u636e\u67e5\u627e\n  basicMap[item.id] = item\n  // \u6570\u636e\u5206\u7ea7\n  if (item.level === 1) firstLevel.push(item)\n  // \u6dfb\u52a0name\u5c5e\u6027\n  item.name = item.id\n  item.var_name = \'\'\n})\n// \u6784\u9020rSelect\u7684children\u6570\u636e\ndata.forEach((item, index) => {\n  if (item.componentType === \'Select\') {\n    item.data.forEach(option => {\n      option.text = option.desc\n      if (option.rely && option.rely.length) {\n        option.children = option.rely.map(id => {\n          return basicMap[id]\n        })\n      }\n    })\n  }\n})\nfunction FormDemo ({ Titlebar, history, Form, Input, Select, Modal, ViewSource }) {\n  const goHome = useCallback(() => history.push({ pathname: \'/\' }), [history])\n  const [count, setCount] = useState(0)\n  const [list, setList] = useState(data)\n  const [isCompleted, setIsCompleted] = useState(false)\n  const formRef = useRef(null)\n  const handleChange = useCallback(({ event, component, value }) => {\n    component.props.item.value = value\n    setList(prevList => {\n      return [...prevList]\n    })\n  }, [])\n  const onComplete = useCallback(({ isCompleted }) => {\n    setIsCompleted(isCompleted)\n  }, [])\n\n  const doSubmit = () => {\n    formRef.current.validate((valid, validateMessage) => {\n      if (valid) {\n        console.log(\'getValue\', formRef.current.getValue())\n        console.log(\'getSerializeValue\', formRef.current.getSerializeValue())\n        console.log(\'getObjectValue\', formRef.current.getObjectValue())\n      } else {\n        Modal.create({\n          content: validateMessage.map((message, idx) => <p key={idx}>{message}</p>)\n        })\n      }\n    })\n  }\n  const doSubmit2 = () => {\n    formRef.current.validateOneByOne((valid, validateMessage) => {\n      if (valid) {\n        console.log(\'getValue\', formRef.current.getValue())\n        console.log(\'getSerializeValue\', formRef.current.getSerializeValue())\n        console.log(\'getObjectValue\', formRef.current.getObjectValue())\n      } else {\n        Modal.create({\n          content: validateMessage\n        })\n      }\n    })\n  }\n  const doReset = () => {\n    formRef.current.resetFields()\n  }\n  const btnCls = [styles[\'btn\'], isCompleted ? \'\' : styles[\'btn-disabled\']].filter(Boolean).join(\' \')\n\n  return <div className={styles[\'page-view\']}>\n    <Titlebar theme=\'b\' c=\'Form example\' onBack={goHome} />\n    <Form ref={formRef} className={styles[\'r-form\']} textPosition=\'right\' onComplete={onComplete} onChange={handleChange}>\n      {\n        firstLevel.map((item, index) => {\n          return <item.component {...item} data-index={index} item={item} key={item.name} />\n        })\n      }\n      <div className={styles[\'btn-wrap\']}>\n        <div className={btnCls} onClick={doSubmit}>\n          <p>\u63d0\u4ea4\uff08{isCompleted ? \'\u5b8c\u6210\' : \'\u672a\u5b8c\u6210\'}\uff09</p>\n          <p>validate</p>\n        </div>\n        <div className={btnCls} onClick={doSubmit2}>\n          <p>\u63d0\u4ea4\uff08{isCompleted ? \'\u5b8c\u6210\' : \'\u672a\u5b8c\u6210\'}\uff09</p>\n          <p>validateOneByOne</p>\n        </div>\n        <div className={styles[\'btn\']} onClick={doReset}>\n          <p>\u91cd\u8bbe</p>\n        </div>\n      </div>\n    </Form>\n    <div className=\'results\'>\n      {\n        list.map(item => <p key={item.name}>{item.title}:{item.value}</p>)\n      }\n    </div>\n    <div className={\'test-block\'}>\n      <p>\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0</p>\n      <p>count: {count}</p>\n      <p><button type="button" onClick={() => setCount(count + 1)}>add</button></p>\n    </div>\n\n    <ViewSource code={sourceCode}/>\n  </div>\n}\n\nexport default FormDemo'},130:function(e,n,t){"use strict";t.r(n);var r=t(14),a=t(67);var l=t(66);function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=t(68),c=t(0),y=t(106),d=t.n(y),p=t(69),u=t.n(p),s=t(5),m=function(e){var n;switch(e){case"3":case"4":case"9":n={componentType:"Input",component:s.f,verifyType:"number"};break;case"email":n={componentType:"Input",component:s.f,verifyType:"email"};break;case"50":n={componentType:"Input",component:s.f,verifyType:"IDCard"};break;case"hidden":n={componentType:"Input",component:s.f,verifyType:"hidden"};break;case"select":case"2":case"1":n={componentType:"Select",component:s.j,verifyType:""};break;default:n={componentType:"Input",component:s.f,verifyType:"text"}}return n},v=t(6),_=[{rely_policy_id:0,id:"123277",category_id:"1",title:"\u672c\u4eba\u59d3\u540d",placeholder:"",var_name:"user_name",type:"text",verify_type:"text",data:"",unit:"",material_type:"100",info_property:"1",level:1,desc:"",value:"",readonly:0,maxlength:800,rules:[{required:!0,message:"\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",trigger:"blur"}]},{rely_policy_id:0,id:"323472",category_id:"1",title:"\u672c\u4eba\u8eab\u4efd\u8bc1\u53f7\u7801",var_name:"user_id",type:"5",verify_type:"50",data:"",unit:"",material_type:"100",info_property:"1",level:1,desc:"",value:"110101199003079614",readonly:0},{rely_policy_id:0,id:"832336",category_id:"2",title:"GPS\u4fe1\u606f",var_name:"gps_location",type:"5",verify_type:"0",data:"",unit:"",material_type:"0",info_property:"0",level:1,desc:"",readonly:0},{rely_policy_id:0,id:"612321392",category_id:"1",title:"\u7533\u8bf7\u91d1\u989d",var_name:"application_amount",type:"9",verify_type:"0",data:"",unit:"",material_type:"107",info_property:"1",level:1,desc:"",value:"10000.00",fixed:2,readonly:0,maxlength:8},{rely_policy_id:0,id:"84821212",category_id:"1",title:"\u8d37\u6b3e\u7533\u8bf7\u671f\u9650",var_name:"apply_term",type:"2",verify_type:"0",data:[{value:90,desc:"3\u4e2a\u6708",rely:[]},{value:180,desc:"6\u4e2a\u6708",rely:[]},{value:360,desc:"12\u4e2a\u6708",rely:[]},{value:540,desc:"18\u4e2a\u6708",rely:[]},{value:720,desc:"24\u4e2a\u6708",rely:[]}],unit:"",material_type:"107",info_property:"0",level:1,desc:"",value:"",readonly:0},{rely_policy_id:0,id:"163",category_id:"1",title:"\u53ef\u63a5\u53d7\u6700\u9ad8\u6708\u8fd8\u6b3e\u989d\u5ea6\uff08\u5143\uff09",var_name:"max_repayment",type:"9",verify_type:"0",data:"",unit:"\u5143/\u6708",material_type:"100",info_property:"0",level:1,desc:"",value:"2000",readonly:0,maxlength:8},{rely_policy_id:0,id:"45256233",category_id:"112",title:"\u6559\u80b2\u7a0b\u5ea6",var_name:"user_education",type:"2",verify_type:"0",data:[{value:"1",desc:"\u7855\u58eb\u53ca\u4ee5\u4e0a",rely:[]},{value:"2",desc:"\u672c\u79d1",rely:[]},{value:"3",desc:"\u5927\u4e13",rely:[]},{value:"4",desc:"\u4e2d\u4e13/\u9ad8\u4e2d\u53ca\u4ee5\u4e0b",rely:[]}],unit:"",material_type:"100",info_property:"1",level:1,desc:"",value:"2",readonly:0},{rely_policy_id:0,id:"6351222",category_id:"1",title:"\u73b0\u5355\u4f4d\u662f\u5426\u7f34\u7eb3\u793e\u4fdd",var_name:"social_security",type:"2",verify_type:"0",data:[{value:"1",desc:"\u7f34\u7eb3\u672c\u5730\u793e\u4fdd",rely:[]},{value:"2",desc:"\u672a\u7f34\u7eb3\u793e\u4fdd",rely:[]}],unit:"",material_type:"101",info_property:"1",level:1,desc:"",value:"2",readonly:0},{rely_policy_id:0,id:"26",category_id:"1",title:"\u8f66\u8f86\u60c5\u51b5",var_name:"auto_type",type:"2",verify_type:"0",data:[{value:"1",desc:"\u65e0\u8f66",rely:[]},{value:"2",desc:"\u672c\u4eba\u540d\u4e0b\u6709\u8f66\uff0c\u65e0\u8d37\u6b3e",rely:[]},{value:"3",desc:"\u672c\u4eba\u540d\u4e0b\u6709\u8f66\uff0c\u6709\u6309\u63ed\u8d37\u6b3e",rely:[]},{value:"4",desc:"\u672c\u4eba\u540d\u4e0b\u6709\u8f66\uff0c\u4f46\u5df2\u88ab\u62b5\u62bc",rely:[]},{value:"5",desc:"\u5176\u4ed6\uff08\u8bf7\u5907\u6ce8\uff09",rely:[]}],unit:"",material_type:"103",info_property:"0",level:1,desc:"",value:"1",readonly:0},{rely_policy_id:0,id:"26489",category_id:"1",title:"\u804c\u4e1a\u7c7b\u522b",var_name:"op_type",type:"2",verify_type:"0",data:[{value:"1",desc:"\u4f01\u4e1a\u4e3b",rely:["20996","28905"]},{value:"2",desc:"\u4e2a\u4f53\u5de5\u5546\u6237",rely:["20996","28905"]},{value:"4",desc:"\u4e0a\u73ed\u4eba\u7fa4",rely:["5998","5256"]},{value:"5",desc:"\u5b66\u751f",rely:[]},{value:"10",desc:"\u65e0\u56fa\u5b9a\u804c\u4e1a",rely:["832"]}],unit:"",material_type:"101",info_property:"0",level:1,desc:"",value:"4",readonly:0},{rely_policy_id:"26489",id:"5998",category_id:"1",title:"\u6708\u5de5\u8d44\u6536\u5165\uff08\u5143\uff09",var_name:"user_income_by_card",type:"9",verify_type:"0",data:"",unit:"\u5143",material_type:"101",info_property:"1",level:2,desc:"",value:"7000",readonly:0},{rely_policy_id:"26489",id:"5256",category_id:"1",title:"\u73b0\u5355\u4f4d\u5de5\u4f5c\u5e74\u9650",var_name:"work_period",type:"2",verify_type:"0",data:[{value:"1",desc:"0-5\u4e2a\u6708",rely:[]},{value:"2",desc:"6-12\u4e2a\u6708",rely:[]},{value:"3",desc:"1-3\u5e74",rely:[]},{value:"4",desc:"3-7\u5e74",rely:[]},{value:"5",desc:"7\u5e74\u4ee5\u4e0a",rely:[]}],unit:"\u4e2a\u6708",material_type:"101",info_property:"1",level:2,desc:"",value:"1",readonly:0},{rely_policy_id:"26489",id:"20996",category_id:"1",title:"\u7ecf\u8425\u6d41\u6c34\uff08\u5bf9\u516c\u6d41\u6c34\uff09",var_name:"corporate_flow",type:"9",verify_type:"0",data:"",unit:"",material_type:"102",info_property:"0",level:2,desc:"",readonly:0},{rely_policy_id:"26489",id:"28905",category_id:"1",title:"\u7ecf\u8425\u5e74\u9650",var_name:"operating_year",type:"2",verify_type:"0",data:[{value:"1",desc:"0-3\u4e2a\u6708",rely:[]},{value:"2",desc:"3-6\u4e2a\u6708",rely:[]},{value:"3",desc:"7-12\u4e2a\u6708",rely:[]},{value:"4",desc:"1-2\u5e74",rely:[]},{value:"5",desc:"3-4\u5e74",rely:[]},{value:"6",desc:"5\u5e74\u4ee5\u4e0a",rely:[]}],unit:"",material_type:"102",info_property:"1",level:2,desc:"",readonly:0},{rely_policy_id:"26489",id:"832",category_id:"1",title:"\u6708\u5e73\u5747\u6536\u5165",var_name:"monthly_average_income",type:"9",verify_type:"0",unit:"",material_type:"101",info_property:"0",level:2,desc:"",value:"8000",readonly:0}],f={},g=[];_.forEach((function(e,n){var t="0"===e.verify_type?e.type:e.verify_type;e.componentType=m(t).componentType,e.component=m(t).component,e.type=m(t).verifyType,"123277"===e.id&&e.rules.push({validator:function(e,n,t){if(n.length<3)return new Error("\u59d3\u540d\u6700\u5c11\u4e09\u4e2a\u5b57");t()},trigger:"blur"}),"612321392"===e.id&&(e.rules=[{required:!0,message:"***\u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a\u7a7a***",trigger:"blur"}],e.rules.push({validator:function(e,n,t){if("0"===n)return new Error("\u7533\u8bf7\u91d1\u989d\u4e0d\u80fd\u4e3a\u96f6\uff01");t()},trigger:"blur"})),"832336"===e.id&&(e.componentType=m("hidden").componentType,e.component=m("hidden").component,e.type=m("hidden").verifyType,e.rules=[],e.value="",window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition&&window.navigator.geolocation.getCurrentPosition((function(n){e.value=n.coords.longitude+","+n.coords.latitude}),(function(){}),{enableHighAccuracy:!0,timeout:45e3}):(e.value="\u65e0\u6cd5\u83b7\u53d6gps",console.log("Your browser does not natively support geolocation."))),f[e.id]=e,1===e.level&&g.push(e),e.name=e.id,e.var_name=""})),_.forEach((function(e,n){"Select"===e.componentType&&e.data.forEach((function(e){e.text=e.desc,e.rely&&e.rely.length&&(e.children=e.rely.map((function(e){return f[e]})))}))}));n.default=function(e){var n=e.Titlebar,t=e.history,a=e.Form,l=(e.Input,e.Select,e.Modal),y=e.ViewSource,p=Object(c.useCallback)((function(){return t.push({pathname:"/"})}),[t]),s=Object(c.useState)(0),m=Object(o.a)(s,2),f=m[0],b=m[1],h=Object(c.useState)(_),j=Object(o.a)(h,2),O=j[0],x=j[1],C=Object(c.useState)(!1),w=Object(o.a)(C,2),S=w[0],k=w[1],T=Object(c.useRef)(null),V=Object(c.useCallback)((function(e){e.event;var n=e.component,t=e.value;n.props.item.value=t,x((function(e){return i(e)}))}),[]),N=Object(c.useCallback)((function(e){var n=e.isCompleted;k(n)}),[]),R=[u.a.btn,S?"":u.a["btn-disabled"]].filter(Boolean).join(" ");return Object(v.jsxs)("div",{className:u.a["page-view"],children:[Object(v.jsx)(n,{theme:"b",onBack:p,children:"Form"}),Object(v.jsxs)(a,{ref:T,className:u.a["r-form"],textPosition:"right",onComplete:N,onChange:V,children:[g.map((function(e,n){return Object(c.createElement)(e.component,Object(r.a)(Object(r.a)({},e),{},{"data-index":n,item:e,key:e.name}))})),Object(v.jsxs)("div",{className:u.a["btn-wrap"],children:[Object(v.jsxs)("div",{className:R,onClick:function(){T.current.validate((function(e,n){e?(console.log("getValue",T.current.getValue()),console.log("getSerializeValue",T.current.getSerializeValue()),console.log("getObjectValue",T.current.getObjectValue())):l.create({content:n.map((function(e,n){return Object(v.jsx)("p",{children:e},n)}))})}))},children:[Object(v.jsxs)("p",{children:["\u63d0\u4ea4\uff08",S?"\u5b8c\u6210":"\u672a\u5b8c\u6210","\uff09"]}),Object(v.jsx)("p",{children:"validate"})]}),Object(v.jsxs)("div",{className:R,onClick:function(){T.current.validateOneByOne((function(e,n){e?(console.log("getValue",T.current.getValue()),console.log("getSerializeValue",T.current.getSerializeValue()),console.log("getObjectValue",T.current.getObjectValue())):l.create({content:n})}))},children:[Object(v.jsxs)("p",{children:["\u63d0\u4ea4\uff08",S?"\u5b8c\u6210":"\u672a\u5b8c\u6210","\uff09"]}),Object(v.jsx)("p",{children:"validateOneByOne"})]}),Object(v.jsx)("div",{className:u.a.btn,onClick:function(){T.current.resetFields()},children:Object(v.jsx)("p",{children:"\u91cd\u8bbe"})})]})]}),Object(v.jsx)("div",{className:"results",children:O.map((function(e){return Object(v.jsxs)("p",{children:[e.title,":",e.value]},e.name)}))}),Object(v.jsxs)("div",{className:"test-block",children:[Object(v.jsx)("p",{children:"\u6d4b\u8bd5\u5b50\u7ec4\u4ef6\u662f\u5426\u9891\u7e41\u66f4\u65b0"}),Object(v.jsxs)("p",{children:["count: ",f]}),Object(v.jsx)("p",{children:Object(v.jsx)("button",{type:"button",onClick:function(){return b(f+1)},children:"add"})})]}),Object(v.jsx)(y,{code:d.a})]})}},66:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(67);function a(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},67:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},68:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(66);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(o)throw a}}return l}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},69:function(e,n,t){e.exports={"page-view":"form_page-view__3EjUf","r-form":"form_r-form__2Qj1J","btn-wrap":"form_btn-wrap__3gYgm",btn:"form_btn__3iC5p","btn-disabled":"form_btn-disabled__1LBex"}}}]);