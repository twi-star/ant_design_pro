(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8803],{17052:function(d){d.exports={main:"antd-pro-pages-user-register-style-main",password:"antd-pro-pages-user-register-style-password",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning",error:"antd-pro-pages-user-register-style-error","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}},90434:function(d,n,s){"use strict";s.r(n),s.d(n,{default:function(){return k}});var u=s(13062),f=s(71230),Z=s(57663),A=s(71577),ms=s(89032),B=s(15746),hs=s(20136),W=s(55241),fs=s(34669),z=s(32074),xs=s(34792),K=s(48086),v=s(2824),ys=s(47673),c=s(4107),js=s(43358),D=s(90290),Fs=s(9715),x=s(86585),m=s(67294),y=s(58086),L=s(73727),V=s(3182),G=s(94043),S=s.n(G);function $(F){return j.apply(this,arguments)}function j(){return j=(0,V.Z)(S().mark(function F(E){return S().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,y.WY)("/api/register",{method:"POST",data:E}));case 1:case"end":return l.stop()}},F)})),j.apply(this,arguments)}var Q=s(17052),a=s.n(Q),e=s(85893),g=x.Z.Item,O=D.Z.Option,Y=c.Z.Group,H={ok:(0,e.jsx)("div",{className:a().success,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u5F3A"})}),pass:(0,e.jsx)("div",{className:a().warning,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u4E2D"})}),poor:(0,e.jsx)("div",{className:a().error,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u592A\u77ED"})})},J={ok:"success",pass:"normal",poor:"exception"},X=function(){var E=(0,m.useState)(0),C=(0,v.Z)(E,2),l=C[0],M=C[1],b=(0,m.useState)(!1),I=(0,v.Z)(b,2),P=I[0],R=I[1],_=(0,m.useState)("86"),T=(0,v.Z)(_,2),q=T[0],ss=T[1],es=(0,m.useState)(!1),N=(0,v.Z)(es,2),rs=N[0],ts=N[1],as=!1,h,ns=x.Z.useForm(),us=(0,v.Z)(ns,1),i=us[0];(0,m.useEffect)(function(){return function(){clearInterval(h)}},[h]);var ls=function(){var r=59;M(r),h=window.setInterval(function(){r-=1,M(r),r===0&&clearInterval(h)},1e3)},w=function(){var r=i.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},U=(0,y.QT)($,{manual:!0,onSuccess:function(r,t){r.status==="ok"&&(K.default.success("\u6CE8\u518C\u6210\u529F\uFF01"),y.m8.push({pathname:"/user/register-result",state:{account:t.email}}))}}),os=U.loading,is=U.run,ds=function(r){is(r)},cs=function(r,t){var p=Promise;return t&&t!==i.getFieldValue("password")?p.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!"):p.resolve()},gs=function(r,t){var p=Promise;return t?(P||R(!!t),ts(!rs),t.length<6?p.reject(""):(t&&as&&i.validateFields(["confirm"]),p.resolve())):(R(!!t),p.reject("\u8BF7\u8F93\u5165\u5BC6\u7801!"))},ps=function(r){ss(r)},vs=function(){var r=i.getFieldValue("password"),t=w();return r&&r.length?(0,e.jsx)("div",{className:a()["progress-".concat(t)],children:(0,e.jsx)(z.Z,{status:J[t],className:a().progress,strokeWidth:6,percent:r.length*10>100?100:r.length*10,showInfo:!1})}):null};return(0,e.jsxs)("div",{className:a().main,children:[(0,e.jsx)("h3",{children:"\u6CE8\u518C"}),(0,e.jsxs)(x.Z,{form:i,name:"UserRegister",onFinish:ds,children:[(0,e.jsx)(g,{name:"mail",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{type:"email",message:"\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u90AE\u7BB1"})}),(0,e.jsx)(W.Z,{getPopupContainer:function(r){return r&&r.parentNode?r.parentNode:r},content:P&&(0,e.jsxs)("div",{style:{padding:"4px 0"},children:[H[w()],vs(),(0,e.jsx)("div",{style:{marginTop:10},children:(0,e.jsx)("span",{children:"\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002"})})]}),overlayStyle:{width:240},placement:"right",visible:P,children:(0,e.jsx)(g,{name:"password",className:i.getFieldValue("password")&&i.getFieldValue("password").length>0&&a().password,rules:[{validator:gs}],children:(0,e.jsx)(c.Z,{size:"large",type:"password",placeholder:"\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199"})})}),(0,e.jsx)(g,{name:"confirm",rules:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801"},{validator:cs}],children:(0,e.jsx)(c.Z,{size:"large",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,e.jsxs)(Y,{compact:!0,children:[(0,e.jsxs)(D.Z,{size:"large",value:q,onChange:ps,style:{width:"20%"},children:[(0,e.jsx)(O,{value:"86",children:"+86"}),(0,e.jsx)(O,{value:"87",children:"+87"})]}),(0,e.jsx)(g,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7!"},{pattern:/^\d{11}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u624B\u673A\u53F7"})})]}),(0,e.jsxs)(f.Z,{gutter:8,children:[(0,e.jsx)(B.Z,{span:16,children:(0,e.jsx)(g,{name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u9A8C\u8BC1\u7801"})})}),(0,e.jsx)(B.Z,{span:8,children:(0,e.jsx)(A.Z,{size:"large",disabled:!!l,className:a().getCaptcha,onClick:ls,children:l?"".concat(l," s"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})})]}),(0,e.jsxs)(g,{children:[(0,e.jsx)(A.Z,{size:"large",loading:os,className:a().submit,type:"primary",htmlType:"submit",children:(0,e.jsx)("span",{children:"\u6CE8\u518C"})}),(0,e.jsx)(L.rU,{className:a().login,to:"/user/login",children:(0,e.jsx)("span",{children:"\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55"})})]})]})]})},k=X},15746:function(d,n,s){"use strict";var u=s(21584);n.Z=u.Z},89032:function(d,n,s){"use strict";var u=s(65056),f=s.n(u),Z=s(6999)},71230:function(d,n,s){"use strict";var u=s(92820);n.Z=u.Z},13062:function(d,n,s){"use strict";var u=s(65056),f=s.n(u),Z=s(6999)}}]);
