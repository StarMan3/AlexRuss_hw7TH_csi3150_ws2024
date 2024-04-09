import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [form, setForm] = useState({
        fullName: '',
        username: '',
        email: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form className='sign-in-form' onSubmit={handleSubmit}>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" />
            <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
            <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;
