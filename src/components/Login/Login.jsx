import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import { auth } from '../../firebase-config'
import { AppContext } from '../app/app'

import styles from './Login.module.scss'
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {

  const navigate = useNavigate()

  const { setIsRegistered, setActiveIndex } = React.useContext(AppContext)

  const [loginEmail, setLoginEmail] = React.useState('')
  const [loginPassword, setLoginPassword] = React.useState('')

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      setIsRegistered(true)
      navigate('/Profile')
      setActiveIndex(2)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className={styles.root}>
        <h2>Привет</h2>
        <div className={styles.form}>
            <input type='email' placeholder='Почта' onChange={(e) => setLoginEmail(e.target.value)}/>
            <input type='password' placeholder='Пароль' onChange={(e) => setLoginPassword(e.target.value)}/>
            <button onClick={login}>Войти</button>
            <Link to='/Register' className={styles.a}>Регистрация</Link>
        </div>
    </div>
  )
}

export default Login