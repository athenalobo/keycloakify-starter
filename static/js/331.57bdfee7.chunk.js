"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[331],{2331:function(e,a,t){t.r(a);var r=t(885),s=t(2791),l=t(2981),n=t(2138),o=t(8282),c=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)a.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]])}return t},i=(0,s.memo)((function(e){var a=e.kcContext,t=e.i18n,i=c(e,["kcContext","i18n"]),m=a.social,d=a.realm,u=a.url,p=a.usernameEditDisabled,k=a.login,b=a.auth,v=a.registrationDisabled,f=t.msg,C=t.msgStr,E=(0,n.R)().cx,g=(0,s.useState)(!1),y=(0,r.Z)(g,2),h=y[0],w=y[1],N=(0,o.useConstCallback)((function(e){var a;e.preventDefault(),w(!0);var t=e.target;null===(a=t.querySelector("input[name='email']"))||void 0===a||a.setAttribute("name","username"),t.submit()}));return s.createElement(l.Z,Object.assign({},Object.assign({kcContext:a,i18n:t},i),{doFetchDefaultThemeResources:!0,displayInfo:m.displayInfo,displayWide:d.password&&void 0!==m.providers,headerNode:f("doLogIn"),formNode:s.createElement("div",{id:"kc-form",className:E(d.password&&void 0!==m.providers&&i.kcContentWrapperClass)},s.createElement("div",{id:"kc-form-wrapper",className:E(d.password&&m.providers&&[i.kcFormSocialAccountContentClass,i.kcFormSocialAccountClass])},d.password&&s.createElement("form",{id:"kc-form-login",onSubmit:N,action:u.loginAction,method:"post"},s.createElement("div",{className:E(i.kcFormGroupClass)},function(){var e,a=d.loginWithEmailAllowed?d.registrationEmailAsUsername?"email":"usernameOrEmail":"username",t="usernameOrEmail"===a?"username":a;return s.createElement(s.Fragment,null,s.createElement("label",{htmlFor:t,className:E(i.kcLabelClass)},f(a)),s.createElement("input",Object.assign({tabIndex:1,id:t,className:E(i.kcInputClass),name:t,defaultValue:null!==(e=k.username)&&void 0!==e?e:"",type:"text"},p?{disabled:!0}:{autoFocus:!0,autoComplete:"off"})))}()),s.createElement("div",{className:E(i.kcFormGroupClass)},s.createElement("label",{htmlFor:"password",className:E(i.kcLabelClass)},f("password")),s.createElement("input",{tabIndex:2,id:"password",className:E(i.kcInputClass),name:"password",type:"password",autoComplete:"off"})),s.createElement("div",{className:E(i.kcFormGroupClass,i.kcFormSettingClass)},s.createElement("div",{id:"kc-form-options"},d.rememberMe&&!p&&s.createElement("div",{className:"checkbox"},s.createElement("label",null,s.createElement("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},k.rememberMe?{checked:!0}:{})),f("rememberMe")))),s.createElement("div",{className:E(i.kcFormOptionsWrapperClass)},d.resetPasswordAllowed&&s.createElement("span",null,s.createElement("a",{tabIndex:5,href:u.loginResetCredentialsUrl},f("doForgotPassword"))))),s.createElement("div",{id:"kc-form-buttons",className:E(i.kcFormGroupClass)},s.createElement("input",Object.assign({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===b||void 0===b?void 0:b.selectedCredential)?{value:b.selectedCredential}:{})),s.createElement("input",{tabIndex:4,className:E(i.kcButtonClass,i.kcButtonPrimaryClass,i.kcButtonBlockClass,i.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:C("doLogIn"),disabled:h})))),d.password&&void 0!==m.providers&&s.createElement("div",{id:"kc-social-providers",className:E(i.kcFormSocialAccountContentClass,i.kcFormSocialAccountClass)},s.createElement("ul",{className:E(i.kcFormSocialAccountListClass,m.providers.length>4&&i.kcFormSocialAccountDoubleListClass)},m.providers.map((function(e){return s.createElement("li",{key:e.providerId,className:E(i.kcFormSocialAccountListLinkClass)},s.createElement("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:E("zocial",e.providerId)},s.createElement("span",null,e.displayName)))}))))),infoNode:d.password&&d.registrationAllowed&&!v&&s.createElement("div",{id:"kc-registration"},s.createElement("span",null,f("noAccount"),s.createElement("a",{tabIndex:6,href:u.registrationUrl},f("doRegister"))))}))}));a.default=i}}]);
//# sourceMappingURL=331.57bdfee7.chunk.js.map