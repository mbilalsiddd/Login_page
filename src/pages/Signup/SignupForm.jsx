import React, { useState } from 'react'


const SignupForm = () => {


    const [registerationNumber , setRegisterationNumber] = useState()
    const [password , setPassword] = useState()
   
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(registerationNumber,password);
    }  


    return (
        <div className="signup-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="registerationNumber" 
                    placeholder="GR NO" 
                    required
                    onChange={(e) => setRegisterationNumber(e.target.value)}
                     />
                </div>
                <div className="form-group">
                    <input type="password" 
                    placeholder="Password" required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="signup-button"   >
                    LOGIN
                </button>
                <p>
                    Don't have an account? <a href="#">Signup</a>
                </p>
            </form>
        </div>
    )
}

export default SignupForm