import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app';

const CsgoMarket = () => {

    window.scrollTo(0, 0);

    const { setActiveIndex, isRegistered, usersCsgo } = React.useContext(AppContext)

    return(
        <>
            <header id="csgo">
        <div className="container">
            <h1>CSGO</h1>
            <Link to={isRegistered ? '/AddCsgo' : '/Register'} id="button" onClick={() => setActiveIndex(1)}><span>+</span>Объявление</Link>
        </div>
            </header>
            <div id="section3">
        <div className="container">
            <div className="row">
                {usersCsgo.map((elem) => {
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

export default CsgoMarket