(this["webpackJsonpreact-assign1"]=this["webpackJsonpreact-assign1"]||[]).push([[0],{17:function(A,e,t){},18:function(A,e,t){},24:function(A,e,t){"use strict";t.r(e);var s=t(1),c=t(3),a=t.n(c),n=(t(17),t(18),t(4)),i=t(5),l=t(7),o=t(6),r=t.p+"static/media/search-icon.cc51b702.svg",h=t(2),d=t(0),j=function(A){Object(l.a)(t,A);var e=Object(o.a)(t);function t(A){var s;return Object(n.a)(this,t),(s=e.call(this,A)).searchFilter=function(A){return s.state.data&&s.state.data.length&&s.state.data.filter((function(e){e.id;var t=e.firstName,s=e.lastName,c=e.email,a=e.phone;return""==A.trim()||(!!(t.toLowerCase().includes(A.toLowerCase())||s.toLowerCase().includes(A.toLowerCase())||c.toLowerCase().includes(A.toLowerCase())||a.includes(A))||void 0)}))},s.state={search:"",data:[],selectedId:0,activeIndex:0,loader:!0},s}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var A=this;fetch("https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D").then((function(A){return A.json()})).then((function(e){return A.setState({data:e,loader:!1})}))}},{key:"render",value:function(){var A=this,e=this.searchFilter(this.state.search);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"overlay",className:this.state.loader?"overlay-shown":"overlay-hidden",children:Object(d.jsx)("img",{src:"data:image/gif;base64,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",alt:"Preloader icon"})}),Object(d.jsxs)("div",{id:"table-section",children:[Object(d.jsxs)("form",{action:"/",children:[Object(d.jsx)("img",{src:r,alt:"Search Icon"}),Object(d.jsx)("input",{type:"text",placeholder:"Enter something",name:"search-box",id:"search-box",onChange:function(e){A.setState({search:e.target.value})}})]}),Object(d.jsxs)("div",{id:"table-wrapper",children:[Object(d.jsx)("div",{id:"table-headers",children:Object(d.jsx)("table",{children:Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"column1",children:"Id"}),Object(d.jsx)("th",{className:"column2",children:"FirstName"}),Object(d.jsx)("th",{className:"column3",children:"LastName"}),Object(d.jsx)("th",{className:"column4",children:"Email"}),Object(d.jsx)("th",{className:"column5",children:"Phone"})]})})})}),Object(d.jsx)("div",{id:"table-data",children:Object(d.jsx)("table",{children:Object(d.jsx)("tbody",{children:e&&e.length&&e.map((function(e){var t=e.id,s=e.firstName,c=e.lastName,a=e.email,n=e.phone;return Object(d.jsxs)("tr",{className:A.state.selectedId===t?"data-row data-row-open":"data-row data-row-close",onClick:function(e){A.setState({selectedId:t},(function(){return A.props.sendTable(A.state)})),console.log(e)},children:[Object(d.jsx)("td",{className:"column1",children:t}),Object(d.jsx)("td",{className:"column2",children:s}),Object(d.jsx)("td",{className:"column3",children:c}),Object(d.jsx)("td",{className:"column4",children:a}),Object(d.jsx)("td",{className:"column5",children:n})]},t)}))})})})]})]})]})}}]),t}(s.Component),C=Object(h.b)((function(A){return{table:A.table}}),(function(A){return{sendTable:function(e){return A(function(A){return{type:"GET_TABLE",payload:A}}(e))}}}))(j),B=function(A){Object(l.a)(t,A);var e=Object(o.a)(t);function t(A){var s;return Object(n.a)(this,t),(s=e.call(this,A)).state={isActive:!1},s}return Object(i.a)(t,[{key:"render",value:function(){var A=this.props.table.selectedId,e=this.props.table.data&&this.props.table.data.filter((function(e){return e.id===A})),t=e&&e.length&&e[0].description;return Object(d.jsxs)("div",{id:"info-wrapper",children:[Object(d.jsx)("h1",{children:"Details"}),Object(d.jsx)("p",{children:"Click on a table item to get detailed information"}),Object(d.jsxs)("div",{id:e?"":"info-content",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"User selected:"}),e&&e.length&&e[0].firstName," ",e&&e.length&&e[0].lastName]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Description: "}),Object(d.jsx)("textarea",{cols:"50",rows:"5",value:t,readOnly:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Address:"}),e&&e.length&&e[0].address&&e[0].address.streetAddress]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"City:"}),e&&e.length&&e[0].address&&e[0].address.city]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"State:"}),e&&e.length&&e[0].address&&e[0].address.state]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Zip:"}),e&&e.length&&e[0].address&&e[0].address.zip]})]})]})}}]),t}(s.Component),I=Object(h.b)((function(A){return{table:A.table}}),null)(B);var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("main",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(I,{})]})})},E=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,n=e.getTTFB;t(A),s(A),c(A),a(A),n(A)}))},x=t(12),g=t(11),Q={table:[]},O=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TABLE":return Object(g.a)(Object(g.a)({},A),{},{table:e.payload});default:return A}},m=Object(x.a)(O);a.a.render(Object(d.jsx)(h.a,{store:m,children:Object(d.jsx)(b,{})}),document.getElementById("root")),E()}},[[24,1,2]]]);
//# sourceMappingURL=main.9cf41750.chunk.js.map