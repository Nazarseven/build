import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app';

const BrawlMarket = () => {

    window.scrollTo(0, 0);

    const { setActiveIndex, isRegistered, usersBrawl } = React.useContext(AppContext)


    return(
        <>
            <header id="brawl">
        <div className="container">
            <h1>Brawl Stars</h1>
            <Link to={isRegistered ? '/AddBrawlStars' : '/Register'} id="button" onClick={() => setActiveIndex(1)}><span>+</span>Объявление</Link>
        </div>
            </header>
            <div id="section3">
        <div className="container">
            <div className="row">
                {usersBrawl.map((elem) => {
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

export default BrawlMarket