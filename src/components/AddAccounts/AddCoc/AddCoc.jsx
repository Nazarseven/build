import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../../firebase-config';

/*  */
import { storage } from '../../../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { AppContext } from '../../app/app';
/*  */

const AddCoc = () => {

    // window.scrollTo(0, 0);

    const { user } = React.useContext(AppContext)


    /*  */
    const [title, setTitle] = React.useState('')
    const [owner, setOwner] = React.useState('')
    const [number, setNumber] = React.useState()
    const [price, setPrice] = React.useState()
    const [level, setLevel] = React.useState()
    const [image, setImage] = React.useState('')
    const [icq, setIcq] = React.useState('')
    const [nick, setNick] = React.useState('')
    const [ratusa, setRatusa] = React.useState()
    const [trofei, setTrofei] = React.useState()
    const [check, setCheck] = React.useState(false)
    const [email, setEmail] = React.useState(user.email)


    const usersCollectionRef = collection(db, 'userscoc')

    /*  */

    const [imageUpload, setImageUpload] = React.useState(null)
    const [imageList, setImageList] = React.useState([])

    const createUser = async () => {
        
        if (imageUpload == null) return
        const imageRef = ref(storage, `imgcoc/${imageUpload.name + v4()}`)
        await uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
                /* console.log("await") */
            })
        })
        
        addDoc(usersCollectionRef, {
            check: check,
            icq: icq,
            image: imageList,
            level: level,
            nick: nick,
            number: number,
            owner: owner,
            price: price,
            ratusa: ratusa,
            title: title,
            trofei: trofei,
            email: email
        })

        /* console.log(imageList)
        console.log(1) */
        
    }
    return(
        <>
            <section id="section4">
        <div className="container3">
            <Link to='/AddGameAccount'>Вернуться</Link>
            <h2>Clash Of Clans</h2>
                <div className="form">
                    <input onChange={(e) => setTitle(e.target.value)} className="title" type="text" placeholder="Заголовок" />
                <div className="row">
                    <div className="inner-input">
                        <label for="">Ратуша</label>
                        <input onChange={(e) => setRatusa(e.target.value)} type="number" />
                    </div>
                    <div className="inner-input">
                        <label for="">Уровень</label>
                        <input onChange={(e) => setLevel(e.target.value)} type="number" />
                    </div>
                </div>
                <div className="row">
                    <div className="inner-input">
                        <label for="">Кубков</label>
                        <input onChange={(e) => setTrofei(e.target.value)} type="number" />
                    </div>
                    <div className="inner-input">
                        <label for="">Смена ника</label>
                        <select onChange={(e) => setNick(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Есть">Есть</option>
                            <option value="Нет">Нет</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="inner-input">
                        <label htmlFor="">Владелец</label>
                        <input onChange={(e) => setOwner(e.target.value)} placeholder='Ваше имя' type='text' />
                    </div>
                    <div className="inner-input">
                        <label htmlFor="">Тел. номер</label>
                        <input onChange={(e) => setNumber(e.target.value)} placeholder='61234355' type='number' />
                    </div>
                </div>
                {/* <textarea placeholder="Опишите ваш аккаунт"></textarea> */}
                <input onChange={(e) => setPrice(e.target.value)} className="price" type="number" placeholder="Стоимость (манат)" />
                </div>
                <div className="screenshot">
                    <h3>Скриншоты</h3>
                    <input onChange={(e) => {setImageUpload(e.target.files[0])}} type="file" />
                </div>
                <div className="telegram">
                    <h3>Ваш Icq</h3>
                    <input onChange={(e) => setIcq(e.target.value)} type="text" placeholder="@NabelliAdam" />
                    <p>Пожалуйста, внимательно указывайте icq. Если с вами невозможно связаться — объявление будет удалено</p>       
                </div>
                <button onClick={createUser} id="button">Отправить объявление</button>
        </div>
            </section>
        </>
    )
}

export default AddCoc