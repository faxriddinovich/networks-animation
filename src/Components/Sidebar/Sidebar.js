import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './style/sidebar.css'
import Content from '../Page/Content'

function Sidebar() {

    const array = [
        {
            id: Math.floor(Math.random()*2000+10),
            title_article:"Lokal tarmoq",
            content:"Lokal tarmoqlar - bir binoda yoki bir-biriga yaqin binolarda joylashgan kompyuterlarda o‘zaro axborot almashish imkonini beruvchi tarmoq hisoblanadi. \n" +
                "\n" +
                "Bunday tarmoqlarda axborot almashinish aloqa kabellari (ba’zan, telefon tizimi yoki radiokanal) orqali amalga oshiriladi. Bunda foydalanuvchilar tarmoqqa ulangan kompyuterlardagi ma’lumotlarni birgaliqda qayta ishlash va ma’lumotlarni ayirboshlash va dastur, chop etish qurilmasi, modem va boshqa qurilmalardan birgalikda foydalanish imkoniyatiga ega bo‘lishadi. ",
            theme_id:1,
            animation_link:"https://prod.spline.design/thotrHwPg4eHnuL9/scene.splinecode"
        },
        {
            id: Math.floor(Math.random()*2000+10),
            title_article: "Mintaqaviy tarmoq",
            content: "Mintaqaviy tarmoq — biror tuman, viloyat yoki respublika miqyosidagi kompyuterlarni o‘zida mujassamlashtirgan tarmoq. \n" +
                "\n" +
                "Bunday tarmoqda bir nechta markazlashgan (ya’ni lokal tarmoqlarni birlashtiruvchi) juda quvvatli serverlar mavjud bo‘ladi va bunday serverlar o‘rtasidagi axborot aloqa kabeli, optik tolali yoki sunhiy yo‘ldosh radioaloqa kanallari yordamida uzatiladi. ",
            theme_id: 1,
            animation_link: "https://prod.spline.design/IH9oYwN92F3avprb/scene.splinecode\n"
        },
        {
            id: Math.floor(Math.random()*2000+10),
            title_article: "Global tarmoq",
            content: "Global tarmoq— dunyoning ixtiyoriy davlatidagi kompyuterlarni o‘zida birlashtirish imkoniga ega bo‘lgan tarmoq. Bu tarmoq internet (Intenet) deb ham yuritiladi.\n" +
                "Internet bilan birga intranet tushunchasi ham ishlatiladi.\n" +
                "Intranet— bu internet texnologiyasi, dastur ta’minoti va bayonnomalari asosida tashkil etilgan, ma’lumotlar ombori va elektron jadvallar bilan jamoa bo‘lib ishlash imkonini beruvchi korxona yoki tashkilot miqyosidagi yangi axborot muhitini tashkil etuvchi kompyuter tarmog‘idir.\n" +
                "Intranet boshqa kompyuter tarmoqlaridan quyidagi jihati bilan farklanadi: bir yoki bir nechta serverdan tashkil topgan tarmoq mijozi undagi ma’lumotlardan foydalanish uchun ularning qaysi serverda, qaysi katalogda, qanday nom bilan saqlanayotganligini, ularga kirish usul va shartlarini bilishi zarur bo‘ladi.\n" +
                "Internetda esa bunday noqulayliklarning oldi olingan bo‘lib, uning foydalanuvchisi bunday ma’lumotlarni bilishi shart emas. Bundan tashqari, internet tarmog‘ida mavjud bo‘lgan barcha elektron hujjatlar va ma’lumotlar omborini giperbog‘lanishlar yordamida o‘zaro bog‘lab yagona axborot muhiti qurish, unda qulay axborot qidiruv tizimlarini tashkil etish mumkin bo‘ladi.",
            theme_id: 1,
            animation_link: "https://prod.spline.design/ejuW4qUa4jpwBVW7/scene.splinecode"
        },
        {
            id: Math.floor(Math.random()*2000+10),
            title_article: "Point to Point",
            content: "Point to point topologiya - jo'natuvchi va qabul qiluvchining funksionalligi ustida ishlaydigan topologiyaning bir turi. Bu ikkita tugun o'rtasidagi eng oddiy aloqa bo'lib, ulardan biri jo'natuvchi, ikkinchisi esa qabul qiluvchidir. Point-to Point yuqori tarmoqli kengligini ta'minlaydi.",
            theme_id: 3,
            animation_link: "https://prod.spline.design/NQ-0KByQCD2c4FmD/scene.splinecode"
        },
        {
            id: Math.floor(Math.random()*2000+10),
            title_article: "Bus",
            content: "Shina topologiyasi - bu har bir kompyuter va tarmoq qurilmasi bitta kabelga ulangan tarmoq turi. U ikki tomonlama. Bu ko'p nuqtali ulanish va mustahkam bo'lmagan topologiya, chunki magistral ishlamay qolsa topologiya buziladi. Avtobus topologiyasida turli MAC (Media kirishni boshqarish) protokollaridan keyin TDMA, Pure Aloha, CDMA, Slotted Aloha va boshqalar kabi LAN chekilgan ulanishlari qo'llaniladi.",
            theme_id: 3,
            animation_link: "https://prod.spline.design/OzFFM1s8EcYuWFLi/scene.splinecode"
        },
        {
            id: Math.floor(Math.random()*2000+10),
            title_article: "Xalqasimon",
            content: "Ring topologiyasida u ikkita qo'shni qurilmalar bilan bog'lovchi qurilmalarni halqa hosil qiladi. Ko'p sonli tugunlarga ega bo'lgan Ring topologiyasi uchun bir qator takrorlagichlar qo'llaniladi, chunki agar kimdir 100 ta tugunli halqa topologiyasining oxirgi tuguniga ba'zi ma'lumotlarni jo'natmoqchi bo'lsa, u holda ma'lumotlar 100-ga etish uchun 99 tugundan o'tishi kerak bo'ladi. tugun. Shunday qilib, tarmoqda ma'lumotlar yo'qolishining oldini olish uchun takrorlagichlardan foydalaniladi.\n" +
                "\n" +
                "Ma'lumotlar bir yo'nalishda oqadi, ya'ni u bir yo'nalishli, lekin har bir Tarmoq tugunlari o'rtasida 2 ta ulanishga ega bo'lgan holda uni ikki tomonlama qilish mumkin, u Dual Ring Topologiyasi deb ataladi. In-Ring Topologiyasi, Token Ring Passing protokoli ma'lumotlarni uzatish uchun ish stantsiyalari tomonidan qo'llaniladi.",
            theme_id: 3,
            animation_link: "https://prod.spline.design/WjcXwHhr-7PjvOVz/scene.splinecode"
        }
    ]

    const [mainState,setMainState] = useState([
        {
            id: 1,
            title: "Tarmoqlar",
            unique_id:"first_theme",
            icon:"bi bi-hdd-network-fill",
            child:true
        },
        {
            id: 2,
            title: "Internet protokollari",
            unique_id:"second_theme",
            icon:"bi bi-pc-display",
            child:false
        },
        {
            id: 3,
            title: "Tarmoq topologiyasi",
            unique_id:"third_theme",
            icon:"bi bi-database-gear",
            child:true
        }
    ])
    const [children,setChildren] = useState([])
    const [article,setArticle] = useState('')

    function selectItem(id,item){

        let items = document.querySelectorAll('li.article');
        [].forEach.call(items, function(el) {
            el.classList.remove("active");
        });

        let newItem = document.getElementById(id)
        newItem.classList.add('active')

        setArticle(item)
    }

    function showItems(id,title){
        if(title==='exclusive') {
            let items = document.querySelectorAll('li.article');
            [].forEach.call(items, function(el) {
                el.classList.remove("active");
            });

            let newItem = document.getElementById(id)
            newItem.classList.add('active')
            setArticle('exclusive')
            }
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2 col-sm-2 bg-dark  d-flex flex-column justify-content-between min-vh-100'>
                <div className='mt-2'>
                    <a href="#" className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
                        <span className='f5-4  mt-3'>Site menu</span>
                    </a>
                    <hr className='text-white d-none d-sm-block'/>
                    <ul className="nav nav-pills flex-column mt-2 mt-sm-0 " id='parentM'>
                        
                        {mainState.map(item =>{
                            return <li className="nav-item my-1 py-2 py-sm-0 parent-content" key={item.id} id={item.id+'parent'} onClick={()=>{
                                if(!item.child) showItems(item.id+'parent','exclusive')
                                else if (item.child) setChildren(array.filter(content=>content.theme_id==item.id))
                            }}>
                            <a href={`#`+item.unique_id} className="nav-link  text-white text-center text-sm-start" data-bs-toggle="collapse" aria-current="page">
                                <i className={item.icon}></i>
                                <span className='ms-2  d-none d-sm-inline'>{item.title}</span>
                                {item.child ? <i className='bi bi-chevron-down ms-0 ms-sm-3'></i> : ''}
                            </a>
                            {item.child ? <ul className='nav collapse ms-2 flex-column' id={item.unique_id} data-bs-parent={"#parentM"}>
                                { children.map(content=>{
                                    return <li className="nav-item article" key={content.id} id={content.id} onClick={()=>selectItem(content.id,content)}>
                                        <a className="nav-link text-white" href="#" aria-current="page">
                                            <span className='d-none d-sm-inline'>{content.title_article}</span> 1
                                        </a>    
                                    </li>
                                })}
                            </ul> : ""}
                        </li>
                        })}
                    </ul>
                </div>
            </div>
            
            <div className='col-md-10'>
                {article ? <Content item={article}/> : <div className={'wrapper-container'}>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div className={'col-md-12'}>
                                <h1 className={'text-center my-2'}>Kompyuter immitatsion modeli.</h1>
                                <p className={'content-text my-2'}>
                                    Kompyuter imitatsion modeli – bu real hodisa va jarayonning kompyuter dasturlari asosidagi adekvat yoki yaqinlashtirilgan modelidir. Kompyuter asosidagi imitatsion modelashtirish odatda obyektni o’rganish, hodisalar, predmet soha, hayotiy vaziyatlar va masalalarning qanday ko’rinishda bo’lishidan boshlanadi. Obyekt o’rganib bo’lingandan so’ng model tuziladi. Model tuzishda asosiy bosh omillar ajratiladi (ikkinchi darajalilari tashlab yuboriladi). Undan so’ng algoritm, dastur tuziladi va kompyuter eksperimenti o’tkaziladi. Kompyuter imitatsion modeli dan o’quv qo’llanmalarda foydalanish analitik (hisoblash va mantiqiy) va kompyuterning obrazli ko’rinishida o’quv materiallarini taqdim etish imkoniyatlarini hamda o’rganilayotgan obyektning ichki va tashqi xossalarini namoyon qilishga zamin yaratadi. Kompyuter imitatsion modeli asosida multimediali elektron qo’llanmalar va virtual laboratoriyalarni yaratish va ulardan foydalanish ishlari yo’lga qo’yiladi (metodikasi yaratiladi).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar