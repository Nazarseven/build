import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app';

const DotaMarket = () => {

    window.scrollTo(0, 0);
    const { setActiveIndex, isRegistered, usersDota } = React.useContext(AppContext)

    return(
        <>
            <header id="dota">
        <div className="container">
            <h1>Dota 2</h1>
            <Link to={isRegistered ? '/AddDota2' : '/Register'} id="button" onClick={() => setActiveIndex(1)}><span>+</span>Объявление</Link>
        </div>
            </header>
            <div id="section3">
        <div className="container">
            <div className="row">
                {usersDota.map((elem, index) => {
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

export default DotaMarket