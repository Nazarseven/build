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


const AddCsgo = () => {

    const { user } = React.useContext(AppContext)

    window.scrollTo(0, 0);

    /*  */
    const [title, setTitle] = React.useState('')
    const [owner, setOwner] = React.useState('')
    const [number, setNumber] = React.useState()
    const [price, setPrice] = React.useState()
    const [pocta, setPocta] = React.useState('')
    const [image, setImage] = React.useState('')
    const [icq, setIcq] = React.useState('')
    const [zwanie, setZwanie] = React.useState('')
    const [hour, setHour] = React.useState()
    const [prime, setPrime] = React.useState()
    const [check, setCheck] = React.useState(false)
    const [email, setEmail] = React.useState(user.email)
    

    const usersCollectionRef = collection(db, 'userscsgo')

    const [imageUpload, setImageUpload] = React.useState(null)
    const [imageList, setImageList] = React.useState([])


    const createUser = async () => {
        
        if (imageUpload == null) return
        const imageRef = ref(storage, `imgcsgo/${imageUpload.name + v4()}`)
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
            pocta: pocta,
            zwanie: zwanie,
            number: number,
            owner: owner,
            price: price,
            hour: hour,
            title: title,
            prime: prime,
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
            <h2>CSGO</h2>
                <div className="form">
                    <input onChange={(e) => setTitle(e.target.value)} className="title" type="text" placeholder="Заголовок" />
                <div className="row">
                    <div className="inner-input">
                        <label for="">Звание</label>
                        <select onChange={(e) => setZwanie(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Калибровка">Калибровка</option>
                            <option value="Скрытое звание">Скрытое звание</option>
                            <option value="Silver I">Silver I</option>
                            <option value="Silver II">Silver II</option>
                            <option value="Silver III">Silver III</option>
                            <option value="Silver IV">Silver IV</option>
                            <option value="Silver Elite">Silver Elite</option>
                            <option value="Silver Elite Master">Silver Elite Master</option>
                            <option value="Gold Nova I">Gold Nova I</option>
                            <option value="Gold Nova II">Gold Nova II</option>
                            <option value="Gold Nova III">Gold Nova III</option>
                            <option value="Gold Nova Master">Gold Nova Master</option>
                            <option value="Master Guardian I">Master Guardian I</option>
                            <option value="Master Guardian II">Master Guardian II</option>
                            <option value="Master Guardian Elite">Master Guardian Elite</option>
                            <option value="Distinguished Master">Distinguished Master</option>
                            <option value="Legendary Eagle">Legendary Eagle</option>
                            <option value="Legendary Eagle Master">Legendary Eagle Master</option>
                            <option value="Supreme Master">Supreme Master</option>
                            <option value="Global Elite">Global Elite</option>
                        </select>
                    </div>
                    <div className="inner-input">
                        <label for="">Часы игры</label>
                        <input onChange={(e) => setHour(e.target.value)} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="inner-input">
                        <label for="">Прайм</label>
                        <select onChange={(e) => setPrime(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Есть">Есть</option>
                            <option value="Нет">Нет</option>
                        </select>
                    </div>
                    <div className="inner-input">
                        <label for="">Почта аккаунта</label>
                        <select onChange={(e) => setPocta(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="Прилагается">Прилагается</option>
                            <option value="Меняется">Меняется</option>
                            <option value="Не прилагается">Не прилагается</option>
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

export default AddCsgo