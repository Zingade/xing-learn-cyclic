(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{471:function(e,a,t){"use strict";t.r(a);var n=t(14),o=t(7),s=t(0),c=t.n(s),r=t(73),i=(t(85),t(214)),l=t(426),d=t(427),u=t(428),h=t(429),j=t(215),m=t(407),b=t(416),p=t(301),O=t(430),x=t(410),f=t(16),y=t(90),g=t(1),v={id:0,name:"",month:"",monthDisplay:"",amount:"",payMethod:0},M=Object(i.a)({cellStat:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},dialog:{position:"absolute",top:10},cash:{fontSize:"14px",color:"blue"},gpay:{fontSize:"14px",color:"green"}}),C=function(e){var a=e.cellID,t=e.total,s=e.updateDatabase,i=e.payMethod,C=c.a.useState(!1),D=Object(o.a)(C,2),I=D[0],N=D[1],P=Object(y.a)(v),k=P.values,S=P.handleInputChange,w=P.errors,F=P.setErrors,A=function(){N(!1)},W=M();return Object(g.jsxs)("div",{className:W.cellStat,children:[Object(g.jsx)("div",{id:a,className:"1"===i?W.gpay:W.cash,onClick:function(e){var a=e.target.id,t=0,n=a.search("@");if(k.name=a.substring(t,n),"Grand Total"===k.name)return-1;t=0,n=(a=a.substring(a.indexOf("@")+1)).search("@");a.substring(t,n),(new Date).getFullYear();t=0,n=(a=a.substring(a.indexOf("@")+1)).search("@");var o=a.substring(t,n);k.month=o,k.monthDisplay=f.h[f.g[o]].displayName,k.amount=a.substring(a.indexOf("@")+1),k.payMethod=i,N(!0)},children:Object(r.b)(t,"int")}),Object(g.jsxs)(l.a,{open:I,onClose:A,classes:{paper:W.dialog},children:[Object(g.jsxs)(d.a,{children:[k.name,"'s ",k.monthDisplay," Payment"]}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(h.a,Object(n.a)(Object(n.a)({autoFocus:!0,onFocus:function(e){e.target.select()},variant:"outlined",placeholder:"Enter Amount Paid here..",margin:"dense",id:"amount",label:"Amount Paid",type:"text",name:"amount",autoComplete:"off",value:k.amount,onChange:S},w.amount&&{error:!0,helperText:w.amount}),{},{fullWidth:!0})),Object(g.jsxs)(j.a,{variant:"outlined",fullWidth:!0,style:{margin:"5px 0"},children:[Object(g.jsx)(m.a,{id:"payMethodInput",children:"Payment Method"}),Object(g.jsxs)(b.a,{labelId:"payMethod",id:"papMethod",label:"Payment Method",name:"payMethod",value:k.payMethod,onChange:S,fullWidth:!0,children:[Object(g.jsx)(p.a,{value:"0",children:"Cash"}),Object(g.jsx)(p.a,{value:"1",children:"G Pay"})]})]})]}),Object(g.jsxs)(O.a,{children:[Object(g.jsx)(x.a,{onClick:A,variant:"contained",color:"primary",children:"Cancel"}),Object(g.jsx)(x.a,{onClick:function(){(function(){var e={};return e.amount=k.amount?"":"Amount is required",F(Object(n.a)({},e)),Object.values(e).every((function(e){return""===e}))})()&&(N(!1),s(k))},variant:"contained",color:"primary",children:"Update"})]})]})]})};a.default=function(e){var a=e.data,t=e.updateDatabase;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"cell",children:Object(g.jsx)("div",{className:"month-name",children:a.name})})}),a.fees.map((function(e,n){return Object(g.jsx)(C,{updateDatabase:t,cellID:a.name+"@"+a.year+"@"+n+"@"+e.amount,total:e.amount,payMethod:e.payMethod},n)}))]})}}}]);
//# sourceMappingURL=3.1ac4bcbe.chunk.js.map