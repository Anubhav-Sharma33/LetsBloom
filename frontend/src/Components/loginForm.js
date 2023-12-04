import React from 'react'
import { Form } from 'react-router-dom';

const LoginForm = () => {
  return (
    <Form>
        <p>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" name="username"  defaultValue=''/>
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input id="password" type="text" name="password"  defaultValue=''/>
      </p>
    </Form>
  )
}

export default LoginForm;