import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app';
/*  */
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
/*  */
const PubgMarket = () => {

    window.scrollTo(0, 0);
    const { setActiveIndex, isRegistered, users, setUsers } = React.useContext(AppContext)

    /*  */


    /*  */
    return(
        <>
            <header id="pubgm">
                <div className="container">
            <h1>PUBG Mobile</h1>
            <Link to={isRegistered ? '/AddPubg' : '/Register'} id="button" onClick={() => setActiveIndex(1)}><span>+</span>Объявление</Link>
                </div>
            </header>
            <div id="section3">
                <div className="container">
            <div className="row">
                {users.map((elem) => {
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
                            <button id="button">Подробнее</button>
                        </div>
                    </div> : ''
                    ) 
                })}
            </div>
                </div>
            </div>
        </>
    )
}

export default PubgMarket