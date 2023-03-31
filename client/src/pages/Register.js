import React from 'react'
import {Button, Form, Input} from 'antd'
import { Link } from 'react-router-dom'

const Register = () => {
    const submitHandler = ()=> {
        
    }
  return (
    <>
        <div className='register-page'>
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Register Page</h1>
                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type='email'/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type='password'/>
                </Form.Item>
                <div className='d-flex justify-content-between'>
                    <Link to="/login">Already Registered? Click Here to Login</Link>
                    <Button className='btn btn-primary'>Register</Button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Register