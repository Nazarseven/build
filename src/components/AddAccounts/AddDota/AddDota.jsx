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

const AddDota = () => {

    const { user } = React.useContext(AppContext)

    // window.scrollTo(0, 0);


    /*  */
    const [title, setTitle] = React.useState('')
    const [owner, setOwner] = React.useState('')
    const [number, setNumber] = React.useState()
    const [price, setPrice] = React.useState()
    const [rang, setRang] = React.useState()
    const [image, setImage] = React.useState('')
    const [icq, setIcq] = React.useState('')
    const [cultural, setCultural] = React.useState('')
    const [star, setStar] = React.useState()
    const [hour, setHour] = React.useState()
    const [check, setCheck] = React.useState(false)
    const [email, setEmail] = React.useState(user.email)

    const usersCollectionRef = collection(db, 'usersdota')

    const [imageUpload, setImageUpload] = React.useState(null)
    const [imageList, setImageList] = React.useState([])


    const createUser = async () => {
        
        if (imageUpload == null) return
        const imageRef = ref(storage, `imgdota/${imageUpload.name + v4()}`)
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
            rang: rang,
            cultural: cultural,
            number: number,
            owner: owner,
            price: price,
            star: star,
            title: title,
            hour: hour,
            email: email
        })

        /* console.log(imageList)
        console.log(1) */
    }

    /*  */


    return(
        <>
            <section id="section4">
        <div className="container3">
            <Link to='/AddGameAccount'>Вернуться</Link>
            <h2>Dota 2</h2>
                <div className="form">
                    <input onChange={(e) => setTitle(e.target.value)} className="title" type="text" placeholder="Заголовок" />
                <div className="row">
                    <div className="inner-input">
                        <label for="">Ранг</label>
                        <select onChange={(e) => setRang(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Рекрут">Рекрут</option>
                            <option value="Страж">Страж</option>
                            <option value="Рыцарь">Рыцарь</option>
                            <option value="Герой">Герой</option>
                            <option value="Легенда">Легенда</option>
                            <option value="Властелин">Властелин</option>
                            <option value="Божество">Божество</option>
                            <option value="Титан">Титан</option>
                        </select>
                    </div>
                    <div className="inner-input">
                        <label for="">Звезда ранга</label>
                        <input onChange={(e) => setStar(e.target.value)} type="number" />
                    </div>
                </div>
                <div className="row">
                    <div className="inner-input">
                        <label for="">Часы игры</label>
                        <input onChange={(e) => setHour(e.target.value)} type="number" />
                    </div>
                    <div className="inner-input">
                        <label for="">Порядочность</label>
                        <input onChange={(e) => setCultural(e.target.value)} type="number" />
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

export default AddDota