import React from 'react';
import './login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    return (
        <div>
            <div className='container pt-5'>
                <form class="bordered-form">
                    <h1>Login</h1>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Username' id='username' required />
                    </div><br />
                    <div className='form-group'>
                        <input type="password" className='form-control' placeholder='Password' id='password' required />
                    </div><br />
                    <button type='submit' id='btn' className='btn btn-primary'>Sign in</button>
                    <div className='check'>
                        <label>
                            <input className="form-check-input" type="checkbox" />
                            &nbsp;Remember me.
                            <br />
                        </label>
                    </div><br />
                    <div>
                        Don't have an account <Link to="/signup">Create</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
