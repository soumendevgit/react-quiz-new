import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();        

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!")
        }
    }

    return (
        <Form style={{height:'330px'}} method="POST"  onSubmit={handleSubmit}>
            <TextInput type="email" required placeholder="Enter email" icon="alternate_email"  value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <TextInput autoComplete="off" required type="password" placeholder="Enter password" icon="lock"  value={password} onChange={(e)=>setPassword(e.target.value)}   />
            <Button  disabled={loading} type="submit"><span>Submit now</span></Button>
            {error && <p className="error">{error}</p>}
            <div className="info">Dont have an account? <Link to="/signup">Signup</Link> instead.</div>
        </Form>
    )
}
