"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[5879],{5879:function(e,s,a){a.r(s),a.d(s,{default:function(){return g}});var n=a(2982),r=a(1413),t=a(2791),c=a(388);var l=a(885),i=a(2228),o=a(5769),d=a(7604),u=a(6196),m=a(184);function p(e){var s=e.displayInfo,a=void 0!==s&&s,r=e.displayMessage,c=void 0===r||r,p=e.displayRequiredFields,h=void 0!==p&&p,k=e.displayWide,x=void 0!==k&&k,f=e.showAnotherWayIfPresent,j=void 0===f||f,v=e.headerNode,y=e.showUsernameNode,C=void 0===y?null:y,g=e.formNode,N=e.infoNode,W=void 0===N?null:N,w=e.kcContext,Z=e.i18n,b=e.doFetchDefaultThemeResources,F=Z.msg,T=Z.changeLocale,I=Z.labelBySupportedLanguageTag,H=Z.currentLanguageTag,L=w.realm,A=w.locale,R=w.auth,P=w.url,q=w.message,z=w.isAppInitiatedAction,S=(0,t.useReducer)((function(){return!0}),!1),U=(0,l.Z)(S,2),E=U[0],G=U[1];return(0,t.useEffect)((function(){if(b){var s=!1,a=[],r=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,n.Z)(r(e.stylesCommon).map((function(e){return(0,u.pathJoin)(P.resourcesCommonPath,e)}))),(0,n.Z)(r(e.styles).map((function(e){return(0,u.pathJoin)(P.resourcesPath,e)})))).reverse().map((function(e){return(0,i.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||G()})),r(e.scripts).forEach((function(e){return(0,i.t)({type:"javascript",src:(0,u.pathJoin)(P.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var t=document.getElementsByTagName("html")[0].classList,c=(0,d.W)(e.kcHtmlClass).split(" ");t.add.apply(t,(0,n.Z)(c)),a.push((function(){return t.remove.apply(t,(0,n.Z)(c))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}G()}),[e.kcHtmlClass]),E?(0,m.jsxs)("div",{className:(0,d.W)(e.kcLoginClass),children:[(0,m.jsx)("div",{id:"kc-header",className:(0,d.W)(e.kcHeaderClass),children:(0,m.jsx)("div",{id:"kc-header-wrapper",className:(0,d.W)(e.kcHeaderWrapperClass),children:F("loginTitleHtml",L.displayNameHtml)})}),(0,m.jsxs)("div",{className:(0,d.W)(e.kcFormCardClass,x&&e.kcFormCardAccountClass),children:[(0,m.jsxs)("header",{className:(0,d.W)(e.kcFormHeaderClass),children:[L.internationalizationEnabled&&((0,o.h)(void 0!==A),!0)&&A.supported.length>1&&(0,m.jsx)("div",{id:"kc-locale",children:(0,m.jsx)("div",{id:"kc-locale-wrapper",className:(0,d.W)(e.kcLocaleWrapperClass),children:(0,m.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,m.jsx)("a",{href:"#",id:"kc-current-locale-link",children:I[H]}),(0,m.jsx)("ul",{children:A.supported.map((function(e){var s=e.languageTag;return(0,m.jsx)("li",{className:"kc-dropdown-item",children:(0,m.jsx)("a",{href:"#",onClick:function(){return T(s)},children:I[s]})},s)}))})]})})}),void 0===R||!R.showUsername||R.showResetCredentials?h?(0,m.jsxs)("div",{className:(0,d.W)(e.kcContentWrapperClass),children:[(0,m.jsx)("div",{className:(0,d.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,m.jsxs)("span",{className:"subtitle",children:[(0,m.jsx)("span",{className:"required",children:"*"}),F("requiredFields")]})}),(0,m.jsx)("div",{className:"col-md-10",children:(0,m.jsx)("h1",{id:"kc-page-title",children:v})})]}):(0,m.jsx)("h1",{id:"kc-page-title",children:v}):h?(0,m.jsxs)("div",{className:(0,d.W)(e.kcContentWrapperClass),children:[(0,m.jsx)("div",{className:(0,d.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,m.jsxs)("span",{className:"subtitle",children:[(0,m.jsx)("span",{className:"required",children:"*"})," ",F("requiredFields")]})}),(0,m.jsxs)("div",{className:"col-md-10",children:[C,(0,m.jsx)("div",{className:(0,d.W)(e.kcFormGroupClass),children:(0,m.jsxs)("div",{id:"kc-username",children:[(0,m.jsx)("label",{id:"kc-attempted-username",children:null===R||void 0===R?void 0:R.attemptedUsername}),(0,m.jsx)("a",{id:"reset-login",href:P.loginRestartFlowUrl,children:(0,m.jsxs)("div",{className:"kc-login-tooltip",children:[(0,m.jsx)("i",{className:(0,d.W)(e.kcResetFlowIcon)}),(0,m.jsx)("span",{className:"kc-tooltip-text",children:F("restartLoginTooltip")})]})})]})})]})]}):(0,m.jsxs)(m.Fragment,{children:[C,(0,m.jsx)("div",{className:(0,d.W)(e.kcFormGroupClass),children:(0,m.jsxs)("div",{id:"kc-username",children:[(0,m.jsx)("label",{id:"kc-attempted-username",children:null===R||void 0===R?void 0:R.attemptedUsername}),(0,m.jsx)("a",{id:"reset-login",href:P.loginRestartFlowUrl,children:(0,m.jsxs)("div",{className:"kc-login-tooltip",children:[(0,m.jsx)("i",{className:(0,d.W)(e.kcResetFlowIcon)}),(0,m.jsx)("span",{className:"kc-tooltip-text",children:F("restartLoginTooltip")})]})})]})})]})]}),(0,m.jsx)("div",{id:"kc-content",children:(0,m.jsxs)("div",{id:"kc-content-wrapper",children:[c&&void 0!==q&&("warning"!==q.type||!z)&&(0,m.jsxs)("div",{className:(0,d.W)("alert","alert-".concat(q.type)),children:["success"===q.type&&(0,m.jsx)("span",{className:(0,d.W)(e.kcFeedbackSuccessIcon)}),"warning"===q.type&&(0,m.jsx)("span",{className:(0,d.W)(e.kcFeedbackWarningIcon)}),"error"===q.type&&(0,m.jsx)("span",{className:(0,d.W)(e.kcFeedbackErrorIcon)}),"info"===q.type&&(0,m.jsx)("span",{className:(0,d.W)(e.kcFeedbackInfoIcon)}),(0,m.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:q.summary}})]}),g,void 0!==R&&R.showTryAnotherWayLink&&j&&(0,m.jsx)("form",{id:"kc-select-try-another-way-form",action:P.loginAction,method:"post",className:(0,d.W)(x&&e.kcContentWrapperClass),children:(0,m.jsx)("div",{className:(0,d.W)(x&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,m.jsxs)("div",{className:(0,d.W)(e.kcFormGroupClass),children:[(0,m.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,m.jsx)("a",{href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1},children:F("doTryAnotherWay")})]})})}),a&&(0,m.jsx)("div",{id:"kc-info",className:(0,d.W)(e.kcSignUpClass),children:(0,m.jsx)("div",{id:"kc-info-wrapper",className:(0,d.W)(e.kcInfoAreaWrapperClass),children:W})})]})})]})]}):null}var h=a(7663),k=(0,t.lazy)((function(){return a.e(9917).then(a.bind(a,9917))})),x=(0,t.lazy)((function(){return a.e(3934).then(a.bind(a,3934))})),f=(0,t.lazy)((function(){return Promise.all([a.e(416),a.e(8384)]).then(a.bind(a,7440))})),j=(0,t.lazy)((function(){return a.e(9015).then(a.bind(a,9015))})),v=(0,t.lazy)((function(){return a.e(956).then(a.bind(a,956))})),y=(0,t.lazy)((function(){return a.e(6435).then(a.bind(a,6435))})),C=(0,r.Z)((0,r.Z)({},c.W0),{},{kcHtmlClass:[].concat((0,n.Z)(c.W0.kcHtmlClass),["my-root-class"]),kcHeaderWrapperClass:"my-color my-font"});function g(e){var s=e.kcContext,a=function(e){var s=e.kcContext;return(0,c.QT)({kcContext:s,extraMessages:{en:{alphanumericalCharsOnly:"Only alphanumerical characters",gender:"Gender",doForgotPassword:"I forgot my password"},fr:{alphanumericalCharsOnly:"Caract\xe8re alphanum\xe9rique uniquement",gender:"Genre",doForgotPassword:"J'ai oubli\xe9 mon mot de passe"}}})}({kcContext:s});if(null===a)return null;var n=(0,r.Z)({i18n:a,Template:p,doFetchDefaultThemeResources:!0},C);return(0,m.jsx)(t.Suspense,{children:function(){switch(s.pageId){case"login.ftl":return(0,m.jsx)(k,(0,r.Z)({},(0,r.Z)({kcContext:s},n)));case"register.ftl":return(0,m.jsx)(x,(0,r.Z)({},(0,r.Z)({kcContext:s},n)));case"terms.ftl":return(0,m.jsx)(f,(0,r.Z)({},(0,r.Z)({kcContext:s},n)));case"my-extra-page-1.ftl":return(0,m.jsx)(j,(0,r.Z)({},(0,r.Z)({kcContext:s},n)));case"my-extra-page-2.ftl":return(0,m.jsx)(v,(0,r.Z)({},(0,r.Z)({kcContext:s},n)));case"info.ftl":return(0,m.jsx)(y,(0,r.Z)((0,r.Z)({},(0,r.Z)({kcContext:s},n)),{},{Template:h.Z,doFetchDefaultThemeResources:!0}));default:return(0,m.jsx)(c.ZP,(0,r.Z)({},(0,r.Z)({kcContext:s},n)))}}()})}}}]);
//# sourceMappingURL=5879.79ee7515.chunk.js.map