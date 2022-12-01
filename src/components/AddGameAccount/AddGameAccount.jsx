import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app'
import styles from './AddGameAccount.module.scss'

const AddGameAccount = () => {

    window.scrollTo(0, 0);

    
    const { pubgValue, cocValue, brawlValue, dotaValue, csgoValue, fortniteValue } = React.useContext(AppContext)
    
    return(
        <>
            <section id="section2" className={styles.root}>
        <div className="container">
            <h1 className={styles.h1}>Разместить объявление</h1>
            <div className="row">
                <Link to='/AddPubg' className="col3 row2">
                    <img src="img/pubg.png" alt="" />
                    <div>
                        <h3>PUBG Mobile</h3>
                        <p>{pubgValue}</p>
                    </div>
                </Link>
                <Link to='/AddClashOfClans' className="col3 row2">
                    <img src="img/coc.png" alt="" />
                    <div>
                        <h3>Clash Of Clans</h3>
                        <p>{cocValue}</p>
                    </div>
                </Link>
                <Link to='/AddBrawlStars' className="col3 row2">
                    <img src="img/brawlstars.png" alt="" />
                    <div>
                        <h3>Brawl Stars</h3>
                        <p>{brawlValue}</p>
                    </div>
                </Link>
                <Link to='/AddDota2' className="col3 row2">
                    <img src="img/dota2.png" alt="" />
                    <div>
                        <h3>Dota 2</h3>
                        <p>{dotaValue}</p>
                    </div>
                </Link>
                <Link to='/AddCsgo' className="col3 row2">
                    <img src="img/csgo.png" alt="" />
                    <div>
                        <h3>CSGO</h3>
                        <p>{csgoValue}</p>
                    </div>
                </Link>
                <Link to='/AddFortnite' className="col3 row2">
                    <img src="img/fortnite.png" alt="" />
                    <div>
                        <h3>Fortnite</h3>
                        <p>{fortniteValue}</p>
                    </div>
                </Link>
            </div>
        </div>
        </section>
        </>
    )
}

export default AddGameAccount