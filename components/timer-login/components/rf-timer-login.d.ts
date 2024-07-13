import type { Components, JSX } from "../types/components";

interface RfTimerLogin extends Components.RfTimerLogin, HTMLElement {}
export const RfTimerLogin: {
    prototype: RfTimerLogin;
    new (): RfTimerLogin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
