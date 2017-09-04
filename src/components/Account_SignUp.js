import React from 'react'
import './css/Account_Signup.css'

const AccountSignup = () => {
    return (
        <div className="container bodyContainer">
            <h1>Sign Up for Vendible:</h1>
            <form className="signupContainer">
                <div className="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" id="firstname" required/>
                </div>
                <div className="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname" required/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        required/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AccountSignup