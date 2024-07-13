/// <reference types="node" />
import moment from 'moment';
export declare class TimerLogin {
    emailInputElement: HTMLInputElement;
    passwordInputElement: HTMLInputElement;
    emailInputBind: string;
    passwordInputBind: string;
    isEmailValid: string;
    isPasswordValid: boolean;
    isLoginSuccess: string;
    emailInputChange(event: Event): void;
    passwordInputChange(event: Event): void;
    onSubmitForm(event: Event): void;
    duration: moment.Duration;
    interval: number;
    displayTimer: string;
    isDisabled: boolean;
    timer: NodeJS.Timer;
    componentDidLoad(): void;
    render(): any;
}
