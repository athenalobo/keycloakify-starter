"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[5872],{5872:function(e,s,r){r.r(s),r.d(s,{default:function(){return v}});var a=r(2982),n=r(1413),t=r(2791),c=r(6571);var l=r(5769),i=r(8030),o=r(7663),d=r(184);function u(e){var s=e.displayInfo,r=void 0!==s&&s,a=e.displayMessage,n=void 0===a||a,t=e.displayRequiredFields,c=void 0!==t&&t,u=e.displayWide,m=void 0!==u&&u,p=e.showAnotherWayIfPresent,h=void 0===p||p,k=e.headerNode,x=e.showUsernameNode,j=void 0===x?null:x,f=e.formNode,y=e.infoNode,v=void 0===y?null:y,C=e.kcContext,g=e.i18n,N=e.doFetchDefaultThemeResources,W=e.stylesCommon,b=e.styles,w=e.scripts,F=e.kcHtmlClass,Z=g.msg,O=g.changeLocale,T=g.labelBySupportedLanguageTag,I=g.currentLanguageTag,P=C.realm,A=C.locale,H=C.auth,L=C.url,R=C.message,S=C.isAppInitiatedAction;return(0,o.M)({doFetchDefaultThemeResources:N,stylesCommon:W,styles:b,scripts:w,url:L,kcHtmlClass:F}).isReady?(0,d.jsxs)("div",{className:(0,i.W)(e.kcLoginClass),children:[(0,d.jsx)("div",{id:"kc-header",className:(0,i.W)(e.kcHeaderClass),children:(0,d.jsx)("div",{id:"kc-header-wrapper",className:(0,i.W)(e.kcHeaderWrapperClass),children:Z("loginTitleHtml",P.displayNameHtml)})}),(0,d.jsxs)("div",{className:(0,i.W)(e.kcFormCardClass,m&&e.kcFormCardAccountClass),children:[(0,d.jsxs)("header",{className:(0,i.W)(e.kcFormHeaderClass),children:[P.internationalizationEnabled&&((0,l.h)(void 0!==A),!0)&&A.supported.length>1&&(0,d.jsx)("div",{id:"kc-locale",children:(0,d.jsx)("div",{id:"kc-locale-wrapper",className:(0,i.W)(e.kcLocaleWrapperClass),children:(0,d.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,d.jsx)("a",{href:"#",id:"kc-current-locale-link",children:T[I]}),(0,d.jsx)("ul",{children:A.supported.map((function(e){var s=e.languageTag;return(0,d.jsx)("li",{className:"kc-dropdown-item",children:(0,d.jsx)("a",{href:"#",onClick:function(){return O(s)},children:T[s]})},s)}))})]})})}),void 0===H||!H.showUsername||H.showResetCredentials?c?(0,d.jsxs)("div",{className:(0,i.W)(e.kcContentWrapperClass),children:[(0,d.jsx)("div",{className:(0,i.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,d.jsxs)("span",{className:"subtitle",children:[(0,d.jsx)("span",{className:"required",children:"*"}),Z("requiredFields")]})}),(0,d.jsx)("div",{className:"col-md-10",children:(0,d.jsx)("h1",{id:"kc-page-title",children:k})})]}):(0,d.jsx)("h1",{id:"kc-page-title",children:k}):c?(0,d.jsxs)("div",{className:(0,i.W)(e.kcContentWrapperClass),children:[(0,d.jsx)("div",{className:(0,i.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,d.jsxs)("span",{className:"subtitle",children:[(0,d.jsx)("span",{className:"required",children:"*"})," ",Z("requiredFields")]})}),(0,d.jsxs)("div",{className:"col-md-10",children:[j,(0,d.jsx)("div",{className:(0,i.W)(e.kcFormGroupClass),children:(0,d.jsxs)("div",{id:"kc-username",children:[(0,d.jsx)("label",{id:"kc-attempted-username",children:null===H||void 0===H?void 0:H.attemptedUsername}),(0,d.jsx)("a",{id:"reset-login",href:L.loginRestartFlowUrl,children:(0,d.jsxs)("div",{className:"kc-login-tooltip",children:[(0,d.jsx)("i",{className:(0,i.W)(e.kcResetFlowIcon)}),(0,d.jsx)("span",{className:"kc-tooltip-text",children:Z("restartLoginTooltip")})]})})]})})]})]}):(0,d.jsxs)(d.Fragment,{children:[j,(0,d.jsx)("div",{className:(0,i.W)(e.kcFormGroupClass),children:(0,d.jsxs)("div",{id:"kc-username",children:[(0,d.jsx)("label",{id:"kc-attempted-username",children:null===H||void 0===H?void 0:H.attemptedUsername}),(0,d.jsx)("a",{id:"reset-login",href:L.loginRestartFlowUrl,children:(0,d.jsxs)("div",{className:"kc-login-tooltip",children:[(0,d.jsx)("i",{className:(0,i.W)(e.kcResetFlowIcon)}),(0,d.jsx)("span",{className:"kc-tooltip-text",children:Z("restartLoginTooltip")})]})})]})})]})]}),(0,d.jsx)("div",{id:"kc-content",children:(0,d.jsxs)("div",{id:"kc-content-wrapper",children:[n&&void 0!==R&&("warning"!==R.type||!S)&&(0,d.jsxs)("div",{className:(0,i.W)("alert","alert-".concat(R.type)),children:["success"===R.type&&(0,d.jsx)("span",{className:(0,i.W)(e.kcFeedbackSuccessIcon)}),"warning"===R.type&&(0,d.jsx)("span",{className:(0,i.W)(e.kcFeedbackWarningIcon)}),"error"===R.type&&(0,d.jsx)("span",{className:(0,i.W)(e.kcFeedbackErrorIcon)}),"info"===R.type&&(0,d.jsx)("span",{className:(0,i.W)(e.kcFeedbackInfoIcon)}),(0,d.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:R.summary}})]}),f,void 0!==H&&H.showTryAnotherWayLink&&h&&(0,d.jsx)("form",{id:"kc-select-try-another-way-form",action:L.loginAction,method:"post",className:(0,i.W)(m&&e.kcContentWrapperClass),children:(0,d.jsx)("div",{className:(0,i.W)(m&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,d.jsxs)("div",{className:(0,i.W)(e.kcFormGroupClass),children:[(0,d.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,d.jsx)("a",{href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1},children:Z("doTryAnotherWay")})]})})}),r&&(0,d.jsx)("div",{id:"kc-info",className:(0,i.W)(e.kcSignUpClass),children:(0,d.jsx)("div",{id:"kc-info-wrapper",className:(0,i.W)(e.kcInfoAreaWrapperClass),children:v})})]})})]})]}):null}var m=(0,t.lazy)((function(){return r.e(9523).then(r.bind(r,9523))})),p=(0,t.lazy)((function(){return r.e(9142).then(r.bind(r,9142))})),h=(0,t.lazy)((function(){return Promise.all([r.e(2814),r.e(8393)]).then(r.bind(r,8393))})),k=(0,t.lazy)((function(){return r.e(7725).then(r.bind(r,8428))})),x=(0,t.lazy)((function(){return r.e(1961).then(r.bind(r,1961))})),j=(0,t.lazy)((function(){return r.e(5221).then(r.bind(r,5221))})),f=(0,t.lazy)((function(){return r.e(6435).then(r.bind(r,6435))})),y=(0,n.Z)((0,n.Z)({},c.W0),{},{kcHtmlClass:[].concat((0,a.Z)(c.W0.kcHtmlClass),["my-root-class"]),kcHeaderWrapperClass:"my-color my-font"});function v(e){var s=e.kcContext,r=function(e){var s=e.kcContext;return(0,c.QT)({kcContext:s,extraMessages:{en:{alphanumericalCharsOnly:"Only alphanumerical characters",gender:"Gender",doForgotPassword:"I forgot my password"},fr:{alphanumericalCharsOnly:"Caract\xe8re alphanum\xe9rique uniquement",gender:"Genre",doForgotPassword:"J'ai oubli\xe9 mon mot de passe"}}})}({kcContext:s});if(null===r)return null;var a=(0,n.Z)({i18n:r,Template:u,doFetchDefaultThemeResources:!0},y);return(0,d.jsx)(t.Suspense,{children:function(){switch(s.pageId){case"login.ftl":return(0,d.jsx)(m,(0,n.Z)({},(0,n.Z)({kcContext:s},a)));case"register.ftl":return(0,d.jsx)(p,(0,n.Z)({},(0,n.Z)({kcContext:s},a)));case"register-user-profile.ftl":return(0,d.jsx)(h,(0,n.Z)({},(0,n.Z)({kcContext:s},a)));case"terms.ftl":return(0,d.jsx)(k,(0,n.Z)({},(0,n.Z)({kcContext:s},a)));case"my-extra-page-1.ftl":return(0,d.jsx)(x,(0,n.Z)({},(0,n.Z)({kcContext:s},a)));case"my-extra-page-2.ftl":return(0,d.jsx)(j,(0,n.Z)({},(0,n.Z)({kcContext:s},a)));case"info.ftl":return(0,d.jsx)(f,(0,n.Z)((0,n.Z)({},(0,n.Z)({kcContext:s},a)),{},{Template:o.Z,doFetchDefaultThemeResources:!0}));default:return(0,d.jsx)(c.ZP,(0,n.Z)({},(0,n.Z)({kcContext:s},a)))}}()})}},1413:function(e,s,r){r.d(s,{Z:function(){return t}});var a=r(4942);function n(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,a)}return r}function t(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?n(Object(r),!0).forEach((function(s){(0,a.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}}}]);
//# sourceMappingURL=5872.981bb5ac.chunk.js.map