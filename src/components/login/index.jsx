import React from 'react'


export default function login(props) {
    return (
        <div>
            <img src={window.location.origin + '/people-illustration.jpg'} alt="Illustration" className="login-image"/>
            <div className="login-content">
                <p className="login-title">Welcome to muzo</p>
                 <p className="login-subtitle">Continue with:</p>
                <form className="login-form">
                    <div className="login-input">
                        <input type="email" placeholder="bill@wealth42.com" className="login-fields" required/>
                    </div>
                    <div className="login-password">
                        <input type="password" placeholder="**************" className="login-fields" required/>
                    </div>
                    <button type="submit" className="login-submit">Sign up</button>
                </form>
                <p className="login-alternate">Or using:</p>
                <button className="login-alternate-google"><i className="fab fa-google"></i></button>
                <button className="login-alternate-facebook"><i className="fab fa-facebook"></i></button>
            </div>
        </div>
    )
}

