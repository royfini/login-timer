import { b as bootstrapLazy } from './index-6a946655.js';
export { s as setNonce } from './index-6a946655.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-timer-login",[[1,"rf-timer-login",{"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32],"duration":[32],"displayTimer":[32],"isDisabled":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map