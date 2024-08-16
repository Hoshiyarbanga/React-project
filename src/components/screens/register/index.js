import React, { useState } from "react";
import axios from 'axios';
import '../login/index.css';
import Swal from 'sweetalert2';
import Input from "../../common/input";
import Button from "../../common/button";
import { Link,useNavigate  } from "react-router-dom";

  function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/users', {
                name, phone,email, password
            });
            Swal.fire({
                title: 'Success!',
                text: 'User created successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login');
                }
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
                        <Input type={'text'} name="{name}" placeholder={'Name'} onChange={(e) => setName(e.target.value)}/>
                        <Input type={'text'} name="{phone}" placeholder={'Phone'} onChange={(e) => setPhone(e.target.value)}/>
                        <Input type={'email'} name="{email}" placeholder={'Email'} onChange={(e) => setEmail(e.target.value)} />
                        <Input type={'password'} name="{password}" placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit"> Sign Up </Button>
                        <p>Don't have an account ? <Link to="/login">Log In</Link></p>
                    </form>
                </div>
            </section>
        </>
    );
  }
  
  export default Register