import React, {useState} from 'react';
import {logIn} from '../api_config/Auth';

function Login() {

    const blankFormData = {username: "", password: ""}
    const [formData, setFormData] = useState(blankFormData);    

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        logIn(formData);
        setFormData(blankFormData);
    }

    return (
        <div>
            <br /><h1>Login</h1><br /><br />
            <div><br />
                <div>
                    &nbsp;
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <div>
                                    <label>Username</label>
                                </div>
                                <div>
                                    <input 
                                        id="username-login" 
                                        placeholder="Username"
                                        name="username" 
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            &nbsp; &nbsp;
                            <div>
                                <div>
                                    <label>Password</label>
                                </div>
                                <div>
                                    <input 
                                        id="password-login"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={formData.password}    
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div >
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login