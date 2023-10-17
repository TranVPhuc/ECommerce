import React from "react";

const LoginSignUp = () => {
  return (
    <div className="loginsignup w-full h-[80vh] bg-[#fce3fe] pt-[100px]">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
