import React, { useEffect } from "react";
import "./login.css";
import Logo from "../../images/logo.png";
import "@fontsource/pacifico"; // Defaults to weight 400



const Login = () => {


    return (
        <div className="cont">
            <div className="form-login sign-in">

                <div className="logobox" >
                    <a >
                        <img className="logo" src={Logo} alt="logo" />
                    </a>
                </div>
                {/* <h2>Welcome</h2> */}

                <label className="label-email">
                    <span>Email</span>
                    <input className="login-input" type="email" />
                </label>
                <label className="label-pass">
                    <span>Password</span>
                    <input className="login-input" type="password" />
                </label>
                <p className="forgot-pass">Forgot password?</p>
                <button type="button" className="submit">Sign In</button>
            </div>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h3>Don't have an account? </h3>

                        <h3> Please Sign up!</h3>
                    </div>

                    <div className="img__text m--in">

                        <h3>If you already have an account, just sign in.</h3>

                    </div>

                    <div className="img__btn">
                        <span className="m--up">Sign Up</span>
                        <span className="m--in">Sign In</span>
                    </div>
                </div>
                <div className="form-reg sign-up">
                    <div className="logobox" >
                        <a >
                            <img className="logo" src={Logo} alt="logo" />
                        </a>
                    </div>
                    <h2>Create your Account</h2>
                    <label className="label-email">
                        <span>Name</span>
                        <input className="login-input" type="text" />
                    </label>
                    <label className="label-pass">
                        <span>Email</span>
                        <input className="login-input" type="email" />
                    </label>
                    <label className="label-pass">
                        <span>Password</span>
                        <input className="login-input" type="password" />
                    </label>
                    <button type="button" className="submit">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;