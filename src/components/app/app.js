import React from 'react'
import Navbar from '../Navbar'
import Main from '../Main'
import PubgMarket from '../PubgMarket'
import CocMarket from '../CocMarket'
import BrawlMarket from '../BrawlMarket'
import DotaMarket from '../DotaMarket'
import CsgoMarket from '../CsgoMarket'
import Fortnite from '../Fortnite'
import AddGameAccount from '../AddGameAccount'
import AddPubg from '../AddAccounts/AddPubg'
import AddCoc from '../AddAccounts/AddCoc'
import AddBrawlStars from '../AddAccounts/AddBrawlStars'
import AddDota from '../AddAccounts/AddDota'
import AddCsgo from '../AddAccounts/AddCsgo'
import AddFortnite from '../AddAccounts/AddFortnite'
import Register from '../Register'
import Login from '../Login'
import Profile from '../Profile'
import './style.scss'
import { Route, Routes } from 'react-router-dom'
import { auth, db } from '../../firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
export const AppContext = React.createContext()



const App = () => {

    const [isRegistered, setIsRegistered] = React.useState(true)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [user, setUser] = React.useState('')

    React.useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        user ? setIsRegistered(true) : setIsRegistered(false)
    })
    }, [user])

    window.location.href === '/Profile' && setActiveIndex(2)

    /* PUBG */
    const [users, setUsers] = React.useState([])
    const [usersCoc, setUsersCoc] = React.useState([])
    const [usersBrawl, setUsersBrawl] = React.useState([])
    const [usersDota, setUsersDota] = React.useState([])
    const [usersCsgo, setUsersCsgo] = React.useState([])
    const [usersFortnite, setUsersFortnite] = React.useState([])
    const pubgValue = users.length
    const cocValue = usersCoc.length
    const brawlValue = usersBrawl.length
    const dotaValue = usersDota.length
    const csgoValue = usersCsgo.length
    const fortniteValue = usersFortnite.length

    const usersCollectionRef = collection(db, 'users')
    const usersCollectionRefCoc = collection(db, 'userscoc')
    const usersCollectionRefBrawl = collection(db, 'usersbrawl')
    const usersCollectionRefDota = collection(db, 'usersdota')
    const usersCollectionRefCsgo = collection(db, 'userscsgo')
    const usersCollectionRefFortnite = collection(db, 'usersfortnite')


    const [profileData, setProfileData] = React.useState([])


    React.useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers()

        /*  */

        const getUsersCoc = async () => {
            const dataCoc = await getDocs(usersCollectionRefCoc)
            setUsersCoc(dataCoc.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsersCoc()

        /*  */

        const getUsersBrawl = async () => {
            const dataBrawl = await getDocs(usersCollectionRefBrawl)
            setUsersBrawl(dataBrawl.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsersBrawl()

        /*  */

        const getUsersDota = async () => {
            const dataDota = await getDocs(usersCollectionRefDota)
            setUsersDota(dataDota.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsersDota()

        /*  */

        const getUsersCsgo = async () => {
            const dataCsgo = await getDocs(usersCollectionRefCsgo)
            setUsersCsgo(dataCsgo.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsersCsgo()

        /*  */

        const getUsersFortnite = async () => {
            const dataFortnite = await getDocs(usersCollectionRefFortnite)
            setUsersFortnite(dataFortnite.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsersFortnite()

    }, [])

    console.log(pubgValue)
    /* 192.168.1.102 */
    
    return(
        <>
            <AppContext.Provider value={{ cocValue, pubgValue, brawlValue, dotaValue, csgoValue, fortniteValue, isRegistered, setIsRegistered, activeIndex, setActiveIndex, user, users, setUsers, usersCoc, usersBrawl, usersDota, usersCsgo, usersFortnite, profileData, setProfileData }}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/PubgMobile' element={<PubgMarket />} />
                    <Route path='/ClashOfClans' element={<CocMarket />} />
                    <Route path='/BrawlStars' element={<BrawlMarket />} />
                    <Route path='/Dota2' element={<DotaMarket />} />
                    <Route path='/Csgo' element={<CsgoMarket />} />
                    <Route path='/Fortnite' element={<Fortnite />} />
                    <Route path='/AddGameAccount' element={<AddGameAccount />} />
                    <Route path='/AddPubg' element={<AddPubg />} />
                    <Route path='/AddClashOfClans' element={<AddCoc />} />
                    <Route path='/AddBrawlStars' element={<AddBrawlStars />} />
                    <Route path='/AddDota2' element={<AddDota />} />
                    <Route path='/AddCsgo' element={<AddCsgo />} />
                    <Route path='/AddFortnite' element={<AddFortnite />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Profile' element={<Profile />} />
                </Routes>
                <Navbar />
            </AppContext.Provider>
        </>
    )
}

export default App