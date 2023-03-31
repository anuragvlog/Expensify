import React from 'react'
import {Button, Form, Input} from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
    const submitHandler = ()=> {
        
    }
  return (
    <>
        <div className='register-page'>
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Login Form</h1>
                <Form.Item label="Email" name="email">
                    <Input type='email'/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type='password'/>
                </Form.Item>
                <div className='d-flex justify-content-between'>
                    <Link to="/register">Don't have an account yet? Click Here to Register</Link>
                    <Button className='btn btn-primary'>Login</Button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Login