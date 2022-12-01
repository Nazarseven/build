import { onAuthStateChanged, signOut } from 'firebase/auth'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { AppContext } from '../app/app'
import styles from './Profile.module.scss'

export const Profile = () => {
  
  const { isRegistered, setIsRegistered, setActiveIndex, user, users, usersCoc, usersBrawl, usersDota, usersCsgo, usersFortnite, profileData } = React.useContext(AppContext)
  

  setActiveIndex(2)
  
  let navigate = useNavigate()

  const logout = async () => {
   await signOut(auth)
   navigate('/')
   setIsRegistered(false)
   setActiveIndex(0)
  }

  
  return (
    <div className={styles.root}>
        <div className={styles.miniContainer}>
        <h2>Профиль</h2>
        <div className={styles.profile}>
            <h1>{user?.email}</h1>
        </div>
        <h4>Объявления</h4>
        </div>
        <div id='section3' className={styles.section3}>
                <div className="container">
                    <div className="row">
                        {users.filter(elem => elem.email === user.email).map((elem) => {
                    return(
                        elem.check ? <div className="col4">
                        <img src={elem.image} alt="" />
                        <div className="mini-container">
                            <h2>{elem.price} Манат</h2>
                            <h3>{elem.title.substring(0, 26) + '...'}</h3>
                            <div className="row3">
                                <p>Ранг</p>
                                <h4>{elem.rang}</h4>
                            </div>
                            <div className="row3">
                                <p>Уровень</p>
                                <h4>{elem.level}</h4>
                            </div>
                            <div className="row3">
                                <p>Первая привязка</p>
                                <h4>{elem.first}</h4>
                            </div>
                            <div className="row3">
                                <p>Вторая привязка</p>
                                <h4>{elem.second}</h4>
                            </div>
                            <div className="row3">
                                <p>Владелец</p>
                                <h4>{elem.owner}</h4>
                            </div>
                            <div className="row3">
                                <p>Номер</p>
                                <h4>{elem.number}</h4>
                            </div>
                            <div className="row3">
                                <p>Icq</p>
                                <h4>{elem.icq}</h4>
                            </div>
                            <button id={styles.button}>Удалить</button>
                        </div>
                    </div> : ''
                    ) 
                        })}
                        {usersCoc.filter(elem => elem.email === user.email).map((elem) => {
                          return(
                        elem.check ? <div className="col4">
                        <img src={elem.image} alt="" />
                        <div className="mini-container">
                            <h2>{elem.price} Манат</h2>
                            <h3>{elem.title.substring(0, 26) + '...'}</h3>
                            <div className="row3">
                                <p>Ратуша</p>
                                <h4>{elem.ratusa}</h4>
                            </div>
                            <div className="row3">
                                <p>Уровень</p>
                                <h4>{elem.level}</h4>
                            </div>
                            <div className="row3">
                                <p>Кубки</p>
                                <h4>{elem.trofei}</h4>
                            </div>
                            <div className="row3">
                                <p>Смена ника</p>
                                <h4>{elem.nick}</h4>
                            </div>
                            <div className="row3">
                                <p>Владелец</p>
                                <h4>{elem.owner}</h4>
                            </div>
                            <div className="row3">
                                <p>Номер</p>
                                <h4>{elem.number}</h4>
                            </div>
                            <div className="row3">
                                <p>Icq</p>
                                <h4>{elem.icq}</h4>
                            </div>
                            <button id={styles.button}>Удалить</button>
                        </div>
                        </div> : ''
                          )
                        })}
                        {usersBrawl.filter(elem => elem.email === user.email).map((elem) => {
                    return(
                        elem.check ? <div className="col4">
                        <img src={elem.image} alt="" />
                        <div className="mini-container">
                            <h2>{elem.price} Манат</h2>
                            <h3>{elem.title}</h3>
                            <div className="row3">
                                <p>Уровень</p>
                                <h4>{elem.level}</h4>
                            </div>
                            <div className="row3">
                                <p>Кубков</p>
                                <h4>{elem.trofei}</h4>
                            </div>
                            <div className="row3">
                                <p>Бравлеров</p>
                                <h4>{elem.brawler}</h4>
                            </div>
                            <div className="row3">
                                <p>Смена ника</p>
                                <h4>{elem.nick}</h4>
                            </div>
                            <div className="row3">
                                <p>Владелец</p>
                                <h4>{elem.owner}</h4>
                            </div>
                            <div className="row3">
                                <p>Номер</p>
                                <h4>{elem.number}</h4>
                            </div>
                            <div className="row3">
                                <p>Icq</p>
                                <h4>{elem.icq}</h4>
                            </div>
                            <button id={styles.button}>Удалить</button>
                        </div>
                            </div> : ''
                    )
                        })}
                        {usersDota.filter(elem => elem.email === user.email).map((elem, index) => {
                    return(
                        elem.check ? <div className="col4">
                        <img src={elem.image} alt="" />
                        <div className="mini-container">
                            <h2>{elem.price} Манат</h2>
                            <h3>{elem.title}</h3>
                            <div className="row3">
                                <p>Ранг</p>
                                <h4>{elem.rang}</h4>
                            </div>
                            <div className="row3">
                                <p>Звезда ранга</p>
                                <h4>{elem.star}</h4>
                            </div>
                            <div className="row3">
                                <p>Часы игры</p>
                                <h4>{elem.hour}</h4>
                            </div>
                            <div className="row3">
                                <p>Порядочность</p>
                                <h4>{elem.cultural}</h4>
                            </div>
                            <div className="row3">
                                <p>Владелец</p>
                                <h4>{elem.owner}</h4>
                            </div>
                            <div className="row3">
                                <p>Номер</p>
                                <h4>{elem.number}</h4>
                            </div>
                            <div className="row3">
                                <p>Icq</p>
                                <h4>{elem.icq}</h4>
                            </div>
                            <button id={styles.button}>Удалить</button>
                        </div>
                            </div> : ''
                    )
                        })}
                        {usersCsgo.filter(elem => elem.email === user.email).map((elem) => {
                    return(
                        elem.check ? <div className="col4">
                        <img src={elem.image} alt="" />
                        <div className="mini-container">
                            <h2>{elem.price} Манат</h2>
                            <h3>{elem.title}</h3>
                            <div className="row3">
                                <p>Звание</p>
                                <h4>{elem.zwanie}</h4>
                            </div>
                            <div className="row3">
                                <p>Часы игры</p>
                                <h4>{elem.hour}</h4>
                            </div>
                            <div className="row3">
                                <p>Прайм</p>
                                <h4>{elem.prime}</h4>
                            </div>
                            <div className="row3">
                                <p>Почта аккаунта</p>
                                <h4>{elem.pocta}</h4>
                            </div>
                            <div className="row3">
                                <p>Владелец</p>
                                <h4>Seven</h4>
                            </div>
                            <div className="row3">
                                <p>Номер</p>
                                <h4>{elem.number}</h4>
                            </div>
                            <div className="row3">
                                <p>Icq</p>
                                <h4>{elem.icq}</h4>
                            </div>
                            <button id={styles.button}>Удалить</button>
                        </div>
                        </div> : ''
                    )
                        })}
                        {usersFortnite.filter(elem => elem.email === user.email).map((elem) => {
                    return(
                        elem.check ? <div className="col4">
                        <img src={elem.image} alt="" />
                        <div className="mini-container">
                            <h2>{elem.price} Манат</h2>
                            <h3>{elem.title}</h3>
                            <div className="row3">
                                <p>Уровень</p>
                                <h4>{elem.level}</h4>
                            </div>
                            <div className="row3">
                                <p>Скинов</p>
                                <h4>{elem.skin}</h4>
                            </div>
                            <div className="row3">
                                <p>B-баксов</p>
                                <h4>{elem.baks}</h4>
                            </div>
                            <div className="row3">
                                <p>PVE</p>
                                <h4>{elem.pve}</h4>
                            </div>
                            <div className="row3">
                                <p>Владелец</p>
                                <h4>{elem.owner}</h4>
                            </div>
                            <div className="row3">
                                <p>Номер</p>
                                <h4>{elem.number}</h4>
                            </div>
                            <div className="row3">
                                <p>Icq</p>
                                <h4>{elem.icq}</h4>
                            </div>
                            <button id={styles.button}>Удалить</button>
                        </div>
                            </div> : ''
                    )
                        })}
                    </div>
                </div>
            </div>
        <div className={styles.miniContainer}>
        <p>Пока нет объявлений, либо они еще на модерации</p>
        <Link to='/AddGameAccount' onClick={() => setActiveIndex(1)} className={styles.button1}>Разместить объявление</Link>
        <button onClick={logout} className={styles.button2}>Выйти</button>
        </div>
    </div>
  )
}

export default Profile