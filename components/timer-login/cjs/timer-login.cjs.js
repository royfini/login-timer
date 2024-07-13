'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-807c705f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('timer-login.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-timer-login.cjs",[[1,"rf-timer-login",{"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32],"duration":[32],"displayTimer":[32],"isDisabled":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=timer-login.cjs.js.map