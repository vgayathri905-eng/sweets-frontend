import React, { useState } from 'react'
import "./Form.css"

const Formvalidate = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState({})
    const validation = () => {
        const newError = {}
        if (!form.username) newError.username = "invalid username";

        if (!form.email) newError.email = "invalid email";
        else
            if (!/\S+@\S+\.\S+/.test(form.email)) newError.email = "missing error";
        if (!form.password) newError.password = "invalid password";
        else {
            if (form.password.length < 6) newError.password = "must in 6 characters";
            if (!/[a-z]/.test(form.password)) newError.password = "must one lowercase characters";
            if (!/[A-Z]/.test(form.password)) newError.password = "must one uppercase characters";
            if (!/[@#$%&*?]/.test(form.password)) newError.password = "must one in Special Characters";
        }
        return newError;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationerror = validation();
        if (Object.keys(validationerror).length === 0) {
            console.log("form valid", form)
            window.location.href = '/home'
            setForm({
                username: "",
                email: "",
                password: "",
            })
            setError({});
        }
        else {
            setError(validation());
        }
    }

    return (
        <div class="form">
            <center>
                <form onSubmit={handleSubmit}>
                    <div class="form"><br/>
                    <h1>Form Validation 📝</h1><br/>
                        <label><b>USERNAME</b></label>
                        <input type="text" name='username' placeholder='username' onChange={handleChange} value={form.username} className='ms-3' />
                        {error.username && <p>{error.username} </p>}
                    </div><br />
                    <div className='form2'>
                        <label><b>EMAIL ID</b></label>
                        <input type="email" name='email' placeholder='Enter email' onChange={handleChange} value={form.email} className='ms-3' />
                        {error.email && <p>{error.email} </p>}
                    </div>
                    <br />
                    <div class="form3">
                        <label><b>PASSWORD</b></label>
                        <input type="password" name='password' placeholder='Enter password' onChange={handleChange} value={form.password} className='ms-3' />
                        {error.password && <p>{error.password} </p>}
                    </div><br/>
                    {/* <button class="btn btn primary">Submit</button>
                     */}
                      <button type="submit" className="btn btn-secondary">submit</button>
                      <br/>
                </form>
                <br/>
            </center>
        </div>
    )
}

export default Formvalidate
