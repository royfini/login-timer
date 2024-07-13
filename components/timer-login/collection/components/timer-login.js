import { h } from "@stencil/core/internal";
import moment from "moment";
export class TimerLogin {
    constructor() {
        this.interval = 1000; // 1 second
        this.timer = setInterval(() => {
            this.duration = moment.duration(+this.duration - this.interval, 'milliseconds');
            this.displayTimer = this.duration.minutes() + ':' + this.duration.seconds();
            if (this.duration.asSeconds() <= 0) {
                this.isDisabled = true;
                clearInterval(this.timer);
                this.displayTimer = "Time's up!";
            }
        }, this.interval);
        this.emailInputBind = undefined;
        this.passwordInputBind = undefined;
        this.isEmailValid = 'blank';
        this.isPasswordValid = false;
        this.isLoginSuccess = '';
        this.duration = moment.duration(1, 'minutes');
        this.displayTimer = undefined;
        this.isDisabled = false;
    }
    emailInputChange(event) {
        let value = event.target.value;
        console.log(value);
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailValid = emailPattern.test(value);
        if (value == '') {
            this.isEmailValid = 'blank';
        }
        else if (!emailValid) {
            this.isEmailValid = 'notEmail';
        }
        else {
            this.isEmailValid = 'valid';
        }
    }
    passwordInputChange(event) {
        let value = event.target.value;
        console.log(value);
        if (value == '') {
            this.isPasswordValid = false;
        }
        else {
            this.isPasswordValid = true;
        }
    }
    onSubmitForm(event) {
        event.preventDefault();
        let email = this.emailInputElement.value;
        let password = this.passwordInputElement.value;
        console.log(email);
        console.log(password);
        if (email == 'stencil@live.com' && password == 'stencil123') {
            this.isLoginSuccess = 'success';
        }
        else {
            this.isLoginSuccess = 'fail';
        }
    }
    componentDidLoad() {
        this.timer;
    }
    render() {
        let emailError = h("div", { key: '61966cff71b0502d92d35a12ae22e61c144190e3' });
        if (this.isEmailValid == 'blank') {
            emailError = h("div", { key: '91ed81e11ddf99039ccd44a37fa30d1b0ad64630', class: "error-txt" }, "Email can't be blank");
        }
        if (this.isEmailValid == 'notEmail') {
            emailError = h("div", { key: '6d27f110c94f7a33f86192e26a790a8b2cc636ec', class: "error-txt" }, "Email not valid");
        }
        let passwordError = h("div", { key: '3bb39f3633f7ddbfc6869c71c8c40f1d71d0d395' });
        if (!this.isPasswordValid) {
            passwordError = h("div", { key: 'f11e3ee38dddb7c3d88f2c5663b27261a8720c1f', class: "error-txt" }, "Password can't be blank");
        }
        let message = h("div", { key: '0eeee56c297aedc33efaffa68bc51c9f041f0c46' });
        if (this.isLoginSuccess == 'success') {
            message = h("div", { key: '304ef39f62a0bd15e73b8a9e8b10a22fd3b1fa8c', class: "msg-s" }, "Login successful");
        }
        if (this.isLoginSuccess == 'fail') {
            message = h("div", { key: '76c69d2eb522e29a47f8be72d29a069ee92bcde2', class: "msg-i" }, "Email or Password incorrect");
        }
        let timer = null;
        if (!this.isDisabled) {
            timer = h("div", { key: 'a4b20049c4c0c88b971836a0e45cbb3322765815', class: { 'sign-txt': true, 'timer': true, 'interactive': true, 'no-opacity': this.isDisabled } }, "You only have ", this.displayTimer, " s to Login");
        }
        if (this.isDisabled) {
            timer = h("div", { key: 'cecb531f6f2299da4fbddc6261f6e68ab10e2b53', class: { 'sign-txt': true, 'timer': true, 'interactive': true, 'no-opacity': this.isDisabled } }, this.displayTimer);
        }
        return (h("div", { key: '2e36316189fb0bee0bda6300e96dd9367da6f7cb', class: 'main' }, h("div", { key: '70611f052c9f69c91ba378f83f3ed17b677e0289', class: "wrapper" }, h("header", { key: '4661143692f1ce1c7ebf902a7eceba5eb26b72a3' }, "Login Form"), h("form", { key: '48df4fa1e112459ad6b9c59b39fc894cc6f71846', action: "#", onSubmit: this.onSubmitForm.bind(this), class: { 'disabled': this.isDisabled } }, h("div", { key: '73a5e1385a3bd64af62064c8972ac015a1eeb993', class: "field email" }, h("div", { key: '6e2aa65f507a531ce41cc4bb1c5ee7a7e88b8c12', class: "input-area" }, h("input", { key: '4068aff74669747d3f9df077f66aafd8e5252c6d', type: "text", placeholder: "Email Address", ref: el => (this.emailInputElement = el), value: this.emailInputBind, onInput: this.emailInputChange.bind(this) }), h("svg", { key: '62bdbca3cb2224a87fe8ed5193258d257759db71', class: "position design", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, ".", h("path", { key: '0a499df7450683044097a11538638bd03efccce0', d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" }))), emailError), h("div", { key: 'c555b7da5fe9ca364c62c6e92bca1d14c34b3130', class: "field password" }, h("div", { key: '57573f2409d90cc29c1ff74bcd80124d9f409c16', class: "input-area" }, h("input", { key: 'ef92f535151ba45c6ce61ca54512376298e942be', type: "password", placeholder: "Password", ref: el => (this.passwordInputElement = el), value: this.passwordInputBind, onInput: this.passwordInputChange.bind(this) }), h("svg", { key: '692913b6074661bafcd557b23eaefcd61a599b54', class: "position design", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '3e130be195d59a4a1518a7ee8e55200f5eddb536', d: "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" }))), passwordError), h("div", { key: '77783657af705fcb321b2fcc4eedc3705ad13c4b', class: "pass-txt" }, h("a", { key: '6b584666e4cc4ea4b63dc7c74b80c5407d1a7008', href: "#" }, "Forgot password?")), message, h("button", { key: '75b662e8210949c953f1f09f08ae8f49bc218557', type: "submit", disabled: this.isEmailValid == 'blank' || this.isEmailValid == 'notEmail' || !this.isPasswordValid }, "LOG IN")), timer, h("div", { key: 'c56c515b51df71b5320e9eb9d8a60c51f5bca01f', class: "sign-txt" }, "Not yet member? ", h("a", { key: 'dea707beaefb05aa129347640fc838344c35c0ca', href: "#" }, "Signup now")))));
    }
    static get is() { return "rf-timer-login"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./timer-login.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["timer-login.css"]
        };
    }
    static get states() {
        return {
            "emailInputBind": {},
            "passwordInputBind": {},
            "isEmailValid": {},
            "isPasswordValid": {},
            "isLoginSuccess": {},
            "duration": {},
            "displayTimer": {},
            "isDisabled": {}
        };
    }
}
//# sourceMappingURL=timer-login.js.map
