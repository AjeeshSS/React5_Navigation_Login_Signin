import React from "react";
import './signup.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function Signup() {
    return (
        <div className="Signup">
            <div className="container pt-3">
                <form className="bordered-form">
                    <h1>Sign up</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" id="username" required />
                    </div><br/>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" id="email" required />
                    </div><br/>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" id="password" required />
                    </div><br/>
                    <button type='submit' id="btn" className="btn btn-primary">Sign Up</button>
                    <div className="check">
                        <label>
                            <input type="checkbox" name="" className="form-check-input" />
                            &nbsp;Remember me.
                            <br/>
                        </label>
                    </div><br/>
                    <div>
                        Have an account <Link to="/">Login here.</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;