import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app';

const CocMarket = () => {

    window.scrollTo(0, 0);
    const { setActiveIndex, isRegistered, usersCoc } = React.useContext(AppContext)

    return(
        <>
            <header id="coc">
                <div className="container">
                    <h1>Clash Of Clans</h1>
                    <Link to={isRegistered ? '/AddClashOfClans' : '/Register'} id="button" onClick={() => setActiveIndex(1)}><span>+</span>Объявление</Link>
                </div>
            </header>
            <div id="section3">
                <div className="container">
                    <div className="row">
                        {usersCoc.map((elem) => {
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

export default CocMarket