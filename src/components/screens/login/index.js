import React from "react";
import '../login/index.css'

function Login() {
    
    return (
        <>
            <section className="main">
                <div className="box">
                    <form className="form-box">
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input className="btn" type="button" value="LOGIN" />
                    </form>
                </div>
            </section>
        </>
    );
  }
  
  export default Login