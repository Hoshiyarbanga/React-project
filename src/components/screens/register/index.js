import React, { useState } from "react";
import axios from 'axios';
import '../login/index.css';
import Swal from 'sweetalert2';

function Register() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users', {
                name, phone,email, password
            });
            Swal.fire({
                title: 'Success!',
                text: 'User created successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.log('Error creating user:', error);
        }
    };

    return (
        <>
            <section className="main">
                <div className="box">
                    <form onSubmit={handleSubmit} className="form-box">
                        <input type="text" name="{name}" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                        <input type="text" name="{phone}" onChange={(e) => setPhone(e.target.value)} placeholder="Phone"/>
                        <input type="email" name="{email}" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        <input type="password" name="{password}" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                        <input className="btn" type="submit" value="LOGIN" />
                    </form>
                </div>
            </section>
        </>
    );
  }
  
  export default Register