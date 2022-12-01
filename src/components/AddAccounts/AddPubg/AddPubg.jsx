import React from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase-config';
/*  */
import { storage } from '../../../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { AppContext } from '../../app/app';
/*  */
const AddPubg = () => {

    const { setProfileData, user } = React.useContext(AppContext)

    // window.scrollTo(0, 0);

    /*  */
    const [title, setTitle] = React.useState('')
    const [rang, setRang] = React.useState('')
    const [level, setLevel] = React.useState()
    const [first, setFirst] = React.useState('')
    const [second, setSecond] = React.useState('')
    const [owner, setOwner] = React.useState('')
    const [number, setNumber] = React.useState()
    const [price, setPrice] = React.useState()
    const [image, setImage] = React.useState([])
    const [icq, setIcq] = React.useState('')
    const [check, setCheck] = React.useState(false)
    const [email, setEmail] = React.useState(user.email)

    

    const usersCollectionRef = collection(db, 'users')

    /*  */

    const [imageUpload, setImageUpload] = React.useState(null)
    const [imageList, setImageList] = React.useState([])
    
    
    const imageListRef = ref(storage, 'img/')
    const uploadImage = async () => {
        
    }

    /* React.useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
    }, []) */
    /*  */


    const createUser = async () => {
        
        if (imageUpload == null) return
        const imageRef = ref(storage, `img/${imageUpload.name + v4()}`)
        await uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
        
        addDoc(usersCollectionRef, {
            check: check,
            first: first,
            icq: icq,
            image: imageList,
            level: level,
            number: number,
            owner: owner,
            price: price,
            rang: rang,
            second: second,
            title: title,
            email: email
        })
    }

    /*  */

    return(
        <>
            <section id='section4'>
            <div className="container3">
                <Link to='/AddGameAccount'>Вернуться</Link>
                <h2>PUBG Mobile</h2>
                <div className=''>
                <div className="form">
                    <input onChange={(e) => setTitle(e.target.value)} className="title" type="text" placeholder="Заголовок" />
                <div className="row">
                    <div className="inner-input">
                        <label htmlFor="">Ранг</label>
                        <select name="" id="" onChange={(e) => setRang(e.target.value)}>
                            <option value=""></option>
                            <option value="Бронза">Бронза</option>
                            <option value="Серебро">Серебро</option>
                            <option value="Золото">Золото</option>
                            <option value="Платина">Платина</option>
                            <option value="Алмаз">Алмаз</option>
                            <option value="Корона">Корона</option>
                            <option value="Ас">Ас</option>
                            <option value="Завоеватель">Завоеватель</option>
                        </select>
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Уровень</label>
                        <input onChange={(e) => setLevel(e.target.value)} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="inner-input">
                        <label htmlFor="">Первая привязка</label>
                        <select onChange={(e) => setFirst(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Discord">Discord</option>
                            <option value="Google Play">Google Play</option>
                        </select>
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Вторая привязка</label>
                        <select onChange={(e) => setSecond(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Discord">Discord</option>
                            <option value="Google Play">Google Play</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="inner-input">
                        <label htmlFor="">Владелец</label>
                        <input onChange={(e) => setOwner(e.target.value)} placeholder='Ваше имя' />
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Тел. номер</label>
                        <input onChange={(e) => setNumber(e.target.value)} placeholder='61234355' />
                    </div>
                </div>
                {/* <textarea placeholder="Опишите ваш аккаунт"></textarea> */}
                <input onChange={(e) => setPrice(e.target.value)} className="price" type="number" placeholder="Стоимость (манат)" />
                </div>
                <div className="screenshot">
                    <h3>Скриншот</h3>
                    <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}} />
                    {/* <button id="button">+ Добавить еще</button> */}
                </div>
                <div className="telegram">
                    <h3>Ваш Icq</h3>
                    <input onChange={(e) => setIcq(e.target.value)} type="text" placeholder="@NabelliAdam" />
                    <p>Пожалуйста, внимательно указывайте icq. Если с вами невозможно связаться — объявление будет удалено</p>       
                </div>
                <button onClick={createUser} id="button">Отправить объявление</button>
                {/* imageList.map((url) => {
                    console.log(url)
                    return <img src={url} alt='' />
                }) */}
            </div>
            </div>
            </section>
        </>
    )
}

export default AddPubg