import React from 'react'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'


import styles from './Register.module.scss'
import { AppContext } from '../app/app'

export const Register = () => {
  const { isRegistered, setIsRegistered, setActiveIndex } = React.useContext(AppContext)
  const [registerEmail, setRegisterEmail] = React.useState('')
  const [registerPassword, setRegisterPassword] = React.useState('')

  let navigate = useNavigate()

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      setIsRegistered(true)
      navigate('/Profile')
      setActiveIndex(2)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className={styles.root}>
        <h2>Регистрация</h2>
        <div className={styles.form}>
            <input type='email' placeholder='Почта' onChange={(e) => setRegisterEmail(e.target.value)} />
            <input type='password' placeholder='Пароль' onChange={(e) => setRegisterPassword(e.target.value)} />
            <button onClick={register}>Зарегистрироваться</button>
            <Link to='/Login' className={styles.a}>Уже есть аккаунт</Link>
        </div>
    </div>
  )
}

export default Register