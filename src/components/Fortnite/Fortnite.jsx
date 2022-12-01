import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app';

const Fortnite = () => {

    window.scrollTo(0, 0);
    const { setActiveIndex, isRegistered, usersFortnite } = React.useContext(AppContext)


    return(
        <>
            <header id="fortnite">
        <div className="container">
            <h1>Fortnite</h1>
            <Link to={isRegistered ? '/AddFortnite' : '/Register'} id="button" onClick={() => setActiveIndex(1)}><span>+</span>Объявление</Link>
        </div>
            </header>
            <div id="section3">
        <div className="container">
            <div className="row">
                {usersFortnite.map((elem) => {
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

export default Fortnite