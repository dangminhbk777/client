<template>
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1" id="m_login" style="background-image: url(../../../assets/app/media/img//bg/bg-1.jpg);">
        <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
            <div class="m-login__container">
                <div class="m-login__logo">
                    <a href="#">
                        <img src="assets/app/media/img/logos/logo-1.png">
                    </a>
                </div>
                <div class="m-login__signin">
                    <div class="m-login__head">
                        <h3 class="m-login__title">Sign In To Admin</h3>
                    </div>
                    <form class="m-login__form m-form">
                        <div class="form-group m-form__group">
                            <input id="user_name" class="form-control m-input" type="text" placeholder="Email"
                                   autocomplete="off">
                        </div>
                        <div class="form-group m-form__group">
                            <input id="pass_word" class="form-control m-input m-login__form-input--last" type="password"
                                   placeholder="Password">
                        </div>
                        <div class="row m-login__form-sub">
                            <div class="col m--align-left m-login__form-left">
                                <label class="m-checkbox  m-checkbox--light">
                                    <input type="checkbox" name="remember"> Remember me
                                    <span></span>
                                </label>
                            </div>
                            <div class="col m--align-right m-login__form-right">
                                <a href="javascript:;" id="m_login_forget_password" class="m-link">Forget Password ?</a>
                            </div>
                        </div>
                        <div class="m-login__form-action">
                            <button type="button" id="button_login_submit" v-on:click="getTokenFake"
                                    class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Sign In</button>
                        </div>
                    </form>
                </div>
                <div class="m-login__signup">
                    <div class="m-login__head">
                        <h3 class="m-login__title">Sign Up</h3>
                        <div class="m-login__desc">Enter your details to create your account:</div>
                    </div>
                    <form class="m-login__form m-form" action="">
                        <div class="form-group m-form__group">
                            <input class="form-control m-input" type="text" placeholder="Fullname" name="fullname">
                        </div>
                        <div class="form-group m-form__group">
                            <input class="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off">
                        </div>
                        <div class="form-group m-form__group">
                            <input class="form-control m-input" type="password" placeholder="Password" name="password">
                        </div>
                        <div class="form-group m-form__group">
                            <input class="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword">
                        </div>
                        <div class="row form-group m-form__group m-login__form-sub">
                            <div class="col m--align-left">
                                <label class="m-checkbox m-checkbox--light">
                                    <input type="checkbox" name="agree">I Agree the <a href="#" class="m-link m-link--focus">terms and conditions</a>.
                                    <span></span>
                                </label>
                                <span class="m-form__help"></span>
                            </div>
                        </div>
                        <div class="m-login__form-action">
                            <button id="m_login_signup_submit" class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Sign Up</button>&nbsp;&nbsp;
                            <button id="m_login_signup_cancel" class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn">Cancel</button>
                        </div>
                    </form>
                </div>
                <div class="m-login__forget-password">
                    <div class="m-login__head">
                        <h3 class="m-login__title">Forgotten Password ?</h3>
                        <div class="m-login__desc">Enter your email to reset your password:</div>
                    </div>
                    <form class="m-login__form m-form" action="">
                        <div class="form-group m-form__group">
                            <input class="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autocomplete="off">
                        </div>
                        <div class="m-login__form-action">
                            <button id="m_login_forget_password_submit" class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">Request</button>&nbsp;&nbsp;
                            <button id="m_login_forget_password_cancel" class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn">Cancel</button>
                        </div>
                    </form>
                </div>
                <div class="m-login__account">
                    <span class="m-login__account-msg">
                        Don't have an account yet ?
                    </span>&nbsp;&nbsp;
                    <a href="javascript:;" id="m_login_signup" class="m-link m-link--light m-login__account-link">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from '../services/http-common.js';
    import {DEFAULT_LOGIN, TOKEN_NAME, ROLE_NAME, USER_ROLE, ADMIN_ROLE} from '../services/variables.js';

    export default {
        name: "login",
        methods: {
            getToken() {
                let dataUserLogin = {
                    username: document.getElementById("user_name").value,
                    password: document.getElementById("pass_word").value
                };
                http.post("/auth/generateJWT", dataUserLogin)
                    .then(response => {
                        localStorage.setItem(TOKEN_NAME, JSON.stringify(response.data.token));
                        localStorage.setItem(ROLE_NAME, JSON.stringify(response.data.role));
                    })
                    .catch(e => {
                        console.error(e);
                    });
            },
            getTokenFake: function () {
                let dataUserLogin = {
                    username: document.getElementById("user_name").value,
                    password: document.getElementById("pass_word").value
                };
                if (dataUserLogin.username == 'a' && dataUserLogin.password == 'a') {
                    localStorage.setItem(TOKEN_NAME, JSON.stringify('a'));
                    localStorage.setItem(ROLE_NAME, JSON.stringify(USER_ROLE));
                    window.location.href = DEFAULT_LOGIN;
                } else if (dataUserLogin.username == 'b' && dataUserLogin.password == 'b') {
                    localStorage.setItem(TOKEN_NAME, JSON.stringify('a'));
                    localStorage.setItem(ROLE_NAME, JSON.stringify(ADMIN_ROLE));
                    window.location.href = DEFAULT_LOGIN;
                }
            }
        }
    }
</script>

<style scoped>

</style>
