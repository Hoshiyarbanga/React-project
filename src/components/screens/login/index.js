import React, { useState } from "react";
import '../login/index.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import Input from "../../common/input";
import Button from "../../common/button";
import { Link,useNavigate  } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email, password
            });
            if (response.data.token) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/dashboard'); 
                    }
                });
            }
        } catch (error) {
            // If login fails, show error SweetAlert
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Login failed. Please check your credentials.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <section className="main">
                <div className="box">
                    <form className="form-box">
                        <Input type={'text'}  placeholder={'Username'} onChange={(e) => setEmail(e.target.value)} />
                        <Input type={'password'}  placeholder={'Password'} onChange={(e) => setPassword(e.target.value)}/>
                        <Button type="submit" onClick={handleSubmit}> LOGIN </Button>
                        <p>Don't have an account ? <Link to="/register">Sign Up</Link></p>
                    </form>
                </div>
            </section>
        </>
    );
  }
  
  export default Login