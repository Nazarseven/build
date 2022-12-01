import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/app'



const HeaderMarket = () => {

    const { cocValue, pubgValue, brawlValue, dotaValue, csgoValue, fortniteValue } = React.useContext(AppContext)

    return(
        <section id="section2">
        <div className="container">
            <div className="row">
                <Link to='/PubgMobile' className="col3 row2">
                    <img src="img/pubg.png" alt="" />
                    <div>
                        <h3>PUBG Mobile</h3>
                        <p>{pubgValue}</p>
                    </div>
                </Link>
                <Link to='/ClashOfClans' className="col3 row2">
                    <img src="img/coc.png" alt="" />
                    <div>
                        <h3>Clash Of Clans</h3>
                        <p>{cocValue}</p>
                    </div>
                </Link>
                <Link to='/BrawlStars' className="col3 row2">
                    <img src="img/brawlstars.png" alt="" />
                    <div>
                        <h3>Brawl Stars</h3>
                        <p>{brawlValue}</p>
                    </div>
                </Link>
                <Link to='/Dota2' className="col3 row2">
                    <img src="img/dota2.png" alt="" />
                    <div>
                        <h3>Dota 2</h3>
                        <p>{dotaValue}</p>
                    </div>
                </Link>
                <Link to='/Csgo' className="col3 row2">
                    <img src="img/csgo.png" alt="" />
                    <div>
                        <h3>CSGO</h3>
                        <p>{csgoValue}</p>
                    </div>
                </Link>
                <Link to='/Fortnite' className="col3 row2">
                    <img src="img/fortnite.png" alt="" />
                    <div>
                        <h3>Fortnite</h3>
                        <p>{fortniteValue}</p>
                    </div>
                </Link>
            </div>
        </div>
        </section>
    )
}

export default HeaderMarket