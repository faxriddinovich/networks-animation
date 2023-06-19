import React, { useState } from 'react'
import ApplicationLayer from './Layers/ApplicationLayer'
import PresentationLayer from './Layers/PresentationLayer'
import SessionLayer from './Layers/SessionLayer'
import TransportLayer from './Layers/TransportLayer'
import NetworkLayer from './Layers/NetworkLayer'
import DataLinkLayer from './Layers/DataLinkLayer'
import PhysicalLayer from './Layers/PhysicalLayer'
import './exclusivecontent.css'
import './Layers/layer-style/layerstyle.css'
import './Layers/layer-style/animation.css'
import './Layers/layer-style/transport-layer.css'
import './Layers/layer-style/networklayer.css'
import './Layers/layer-style/presentationlayer.css'
import './Layers/layer-style/sessionlayer.css'
import './Layers/layer-style/datalink.css'

function ExclusivePage({item}) {
    const [page,setPage] = useState([
        {
            name:'application',
            component:<ApplicationLayer/>
        },
        {
            name:'presentation',
            component:<PresentationLayer/>
        },
        {
            name:'session',
            component:<SessionLayer/>
        },
        {
            name:'transport',
            component:<TransportLayer/>
        },
        {
            name:'network',
            component:<NetworkLayer/>
        },
        {
            name:'data-link',
            component:<DataLinkLayer/>
        },
        {
            name:'physical',
            component:<PhysicalLayer/>
        },
    ])

    const [animationBlock,setAnimationBlock]=useState({
        visible:false,
        component:""
    })
    function openAnime(itemName){
        let animationBox = document.querySelector('div.animation-box_content'),btnBox = document.querySelector('div.animation-box_buttons')
        btnBox.classList.add('animation-box_buttons-stratched')
        animationBox.classList.add('animation-box_content_active')
        let something = page.filter(item=>item.name===itemName)
        setAnimationBlock({visible:true,component:something[0].component})
    }
  return (
    <div className='wrapper'>
        <div className='container-fluid'>
            <div className='col-md-12'>
                <h1 className='text-center mt-3'>Tarmoq protokollari konseptsiyasi.</h1>
                <div className="container-box">
                    <div className="box">
                        <div className="animation-box">
                            <div className="animation-box_buttons" id='buttons'>
                                <ul>
                                    <li>
                                        <button className="layers-button green-btn" onClick={()=>openAnime('application')}>
                                            <span className="order-of-content">7</span>
                                            <div className="green-btn_content"><span className="content">Application <br/> layer</span></div>
                                            <p>smtp http ftp https...</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="layers-button green-btn" onClick={()=>openAnime('presentation')}>
                                            <span className="order-of-content">6</span>
                                            <div className="green-btn_content"><span className="content">Presentation <br/> layer</span></div>
                                            <p></p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="layers-button green-btn" onClick={()=>openAnime('session')}>
                                            <span className="order-of-content">5</span>
                                            <div className="green-btn_content"><span  className="content">Session <br/> layer</span></div>
                                            <p></p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="layers-button blue-btn" onClick={()=>openAnime('transport')}>
                                            <span className="order-of-content">4</span>
                                            <div className="blue-btn_content"><span className="content">Transport <br/> layer</span></div>
                                            <p>tcp udp...</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="layers-button yellow-btn" onClick={()=>openAnime('network')}>
                                            <span className="order-of-content">3</span>
                                            <div className="yellow-btn_content"><span className="content">Network <br/> layer</span></div>
                                            <p>ip icmp ipsection...</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="layers-button yellow-btn" onClick={()=>openAnime('data-link')}>
                                            <span className="order-of-content">2</span>
                                            <div className="yellow-btn_content"><span className="content">Data link <br/> layer</span></div>
                                            <p>arp vlan stpr...</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="layers-button yellow-btn" onClick={()=>openAnime('physical')}>
                                            <span className="order-of-content">1</span>
                                            <div className="yellow-btn_content"><span className="content">Physical <br/> layer</span></div>
                                            <p>hubs fiber...</p>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="animation-box_content">
                                {animationBlock.visible ? animationBlock.component : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div className='wrapper'>
    //     <div className='container'>
    //         <div className='row'>
    //             <div className='col-md-12 mx-auto my-3'>
    //                 <h1 className='text-center mt-3'>Tarmoq protokollari konseptsiyasi.</h1>
                    
    //                 <div className='text-box my-3'>
    //                     <h3>Tarmoq va tarmoq protokoli nima?</h3>
    //                     <p className='content-text'>Kompyuter tarmoqlarida, <strong>tarmoq</strong> Tarmoq - turli aloqa kanallari (simli yoki simsiz) orqali ulangan o'zaro bog'langan qurilmalar (kompyuterlar, serverlar va boshqalar) guruhi. Tarmoqning asosiy g'oyasi resurslarni almashish, ma'lumotlar almashinuvi va ulangan qurilmalar o'rtasida aloqa o'rnatishga imkon berishdir. Tarmoqlar kichik uy tarmoqlaridan tortib Internet kabi yirik tarmoqlargacha bo'lgan o'lchamlari bo'yicha farq qilishi mumkin.</p>
    //                     <p className='content-text'>Tarmoq ichidagi qurilmalar bir-biri bilan <strong>tarmoq protokollari</strong> deb nomlanuvchi muayyan qoidalar yoki protokollarga rioya qilish orqali muloqot qiladi. Ushbu protokollar ma'lumotlarni almashish va qurilmalar o'rtasida ishonchli va samarali aloqani ta'minlash uchun standartlashtirilgan usullardir.</p>
    //                 </div>

    //                 <div className='text-box my-3'>
    //                     <h3>Kompyuter tarmoqlarining OSI modeli.</h3>
    //                     <p className='content-text'>Open Systems Interconnection (OSI) - Ochiq tizimlar oʻzaro aloqasi modeli kompyuter tizimlarining tarmoq orqali qanday aloqa qilishini tushunish uchun asosdir. OSI modeli yetti qatlamdan iborat bo‘lib, ularning har biri tarmoqning turli jihatlarini ifodalaydi.</p>
    //                     <ul className='content-list'>
    //                         <li>Application layer - ilova qatlami tarmoq va undan foydalanadigan ilovalar o'rtasidagi interfeysni ta'minlaydi. </li>
    //                         <li>Presentation layer - taqdimot qatlami ma'lumotlarni formatlash va kodlash bilan shug'ullanadi.</li>
    //                         <li>Session layer - seans qatlami qurilmalar oʻrtasida ulanishlarni oʻrnatadi va tugatadi.</li>
    //                         <li>Transport layer - transport qatlami ma'lumotlarning to'g'ri tartibda ishonchli yetkazib berilishini ta'minlaydi. </li>
    //                         <li>Network layer - tarmoq qatlami ma'lumotlarni turli tarmoqlar o'rtasida yo'naltirish uchun javobgardir.</li>
    //                         <li>Data link layer - ma'lumotlar havolasi qatlami bir xil tarmoqdagi qurilmalar o'rtasida ishonchli ma'lumotlarni uzatishni ta'minlaydi. </li>
    //                         <li>Physical layer - jismoniy qatlam xom ma'lumotlarni jismoniy ulanish orqali uzatish bilan shug'ullanadi.</li>
    //                     </ul>
    //                 </div>
    //                 <div className='animation-box'>
    //                     <Spline scene="https://prod.spline.design/MXLcKXp7Hi-uGi6B/scene.splinecode" />
    //                 </div>
    //                 <div className='text-box my-3'>
    //                     <h2 className='my-4 text-center'>Tarmoq protokollari turlari.</h2>
    //                     <h3 className='my-3'>Internet protokollari (IP).</h3>
    //                     <p className='content-text'>Internet Protokoli (IP) — tarmoq sathi protokoli boʻlib, u maʼlumotlar paketlarini tarmoqlar orqali oʻtish va belgilangan manzilga yetib borish uchun yoʻnaltirish va manzillash imkonini beradi. Shunday qilib, bir mashina boshqa mashinaga ma’lumot jo‘natmoqchi bo‘lsa, uni IP-paketlar ko‘rinishida yuboradi.</p>
    //                 </div>
    //                 <div className='text-box my-3'>
    //                     <h3>IP paket nima?</h3>
    //                     <p>IP-paket internet yoki Internet Protokolidan (IP) foydalanadigan boshqa tarmoq orqali uzatiladigan ma'lumotlarning asosiy birligidir. Bu tarmoqdagi qurilmalar o'rtasida ma'lumotlarni uzatish uchun standartlashtirilgan formatdir. </p>
    //                     <p>IP-paket ikkita asosiy qismdan iborat: IP sarlavhasi va ma'lumotlar (foydali yuk).</p>
    //                     <ul>
    //                         <li>IP sarlavhasi bo'limi manba va maqsad IP manzillari, paketning umumiy hajmi, IP versiyasi va boshqa boshqaruv ma'lumotlari kabi paket haqidagi ma'lumotlarni o'z ichiga oladi.</li>
    //                         <li>Foydali yukda uzatilayotgan haqiqiy ma'lumotlar mavjud bo'lib, ular veb-sahifalar, elektron pochta xabarlari, rasmlar yoki boshqa turdagi kontentni o'z ichiga olishi mumkin.</li>
    //                     </ul>
    //                 </div>
    //                 <div className='animation-box'>
    //                     <Spline scene="https://prod.spline.design/niHSQ24mNu7NJa-V/scene.splinecode" />
    //                 </div>
    //                 <div className='text-box my-3'>
    //                     <p className='content-text'>Paket hajmi IP sarlavhasi va ma'lumotlar bo'limining o'lchamini o'z ichiga oladi. IP sarlavhasidagi boshqa muhim ma'lumotlarga quyidagilar kiradi: 1) Paket o'chirilgunga qadar amalga oshirishi mumkin bo'lgan sakrashlar sonini aniqlaydigan Yashash vaqti (TTL) maydoni 2) Ma'lumotlar bo'limi uchun foydalaniladigan protokolni belgilaydigan Protokol maydoni. </p>
    //                     <p className='content-text'>Qurilma paket jo‘natganda, avvalo, maqsad qurilmaning IP-manzilini aniqlaydi. Keyin paket tarmoqdagi birinchi hopga, ya'ni routerga yuboriladi. Router sarlavhadagi maqsad IP-manzilni tekshiradi va paketni yo'naltirish kerak bo'lgan tarmoqdagi keyingi sakrashni aniqlaydi. Bu jarayon paket yakuniy manzilga yetguncha davom etadi. Eslatma: Bu erda marshrutlash algoritmlari paketlarning tarmoq orqali o'tishi uchun eng yaxshi yo'lni aniqlash uchun ishlatiladi. Turli marshrutlash algoritmlarini alohida blogda yoritamiz.</p>
    //                 </div>
    //                 <div className='text-box my-3'>
    //                     <h2 className='text-center'>IP adres nima?</h2>
    //                     <p className='content-text'>IP manzillar tarmoqdagi qurilmalarni identifikatsiya qiluvchi va joylashtiradigan raqamli manzillarga o'xshaydi. Ular noyobdir va Internetga ulanadigan har bir qurilma yoki domenga tayinlanadi.IP manzillar nuqtalar bilan ajratilgan to'rtta raqam sifatida yoziladi, masalan, 192.168.1.1. Bu raqamlar manzilning raqamli qiymatini ifodalaydi. IP manzillarning ikkita asosiy turi mavjud: <strong>IPv4</strong> va <strong>IPv6</strong>.</p>
    //                     <h2 className='text-center'>IPv4 vs IPv6</h2>
    //                     <p className='content-text'>IPv4 1983-yilda taqdim etilgan IP-ning birinchi versiyasi edi. U 32-bitli manzil sxemasidan foydalanadi, ya'ni u maksimal 4,294,967,296 noyob IP-manzillarni sig'dira oladi. Cheklovlarga qaramay, IPv4 hali ham internet-trafikning katta qismini, taxminan 94% ni tashkil etadi. IPv4, shuningdek, shifrlangan maʼlumotlarni uzatish va tejamkor maʼlumotlarni marshrutlash kabi bir qancha afzalliklarni taqdim etadi.IP-manzillarga talab ortib borishi bilan IPv6 1990-yillarda IPv4 cheklovlarini yengish uchun ishlab chiqilgan. U 3,4 x 10^38 noyob IP manzillarini joylashtirishga qodir 128 bitli manzil maydonidan foydalanadi. U IPng (Keyingi avlod Internet Protokoli) nomi bilan ham tanilgan. Eslatma: IPv6 IP4 bilan solishtirganda yaxshilangan marshrutlash, paketlarni qayta ishlash va xavfsizlik xususiyatlarini taklif etadi. Ammo IPv6 IPv4 bilan mos kelmaydi va yangilash qiyinchilik tug'dirishi mumkin.</p>
    //                     <h1 className='text-center'>
    //                         <strong>Transmission Control Protocols (TCP)</strong>
    //                     </h1>
    //                     <p className='content-text'>Tasvirlar yoki elektron pochta xabarlari kabi katta hajmdagi fayllarni yuborishda bitta IP-paket yetarli boʻlmasligi mumkin. Bunday hollarda ma'lumotlarni uzatish uchun bir nechta paketlardan foydalaniladi. Afsuski, bu paketlarning belgilangan manzilga etib bormaslik, adashib qolish yoki noto'g'ri tartibda yetib kelish xavfini oshiradi. Bu erda transport qatlami protokoli rasmga tushadi. Transmission Control Protocol (TCP) - bu Internet protokoli (IP) ustiga qurilgan transport qatlami protokoli. U ko'pincha IP bilan birgalikda ma'lumotlarni uzatish uchun aloqa protokollarining to'liq to'plamini ta'minlash uchun ishlatiladi.</p>
    //                     <ul>
    //                         <li>TCP ma'lumotlarni kichik paketlarga ajratadi va ularni qabul qiluvchi tomonda to'g'ri tartibda qabul qilinishini ta'minlash uchun ularni ketma-ket raqamlaydi. Yo'qotilgan ma'lumotlar paketlari TCP yordamida ham qayta uzatilishi mumkin. Umuman olganda, IP paketlarni yetkazib berish uchun mas'ul, TCP esa ularni to'g'ri tartibda joylashtirishga yordam beradi.</li>
    //                         <li>Mashina TCP yordamida boshqa mashina bilan aloqa o'rnatmoqchi bo'lsa, u maqsadli mashina bilan ketma-ket tasdiq (qo'l siqish jarayoni) orqali aloqa o'rnatadi. Ulanish o'rnatilgandan so'ng, ikkita mashina erkin muloqot qilishlari mumkin. Oddiy so'z bilan aytganda, TCP ulanishga yo'naltirilgan protokol bo'lib, ma'lumotlar uzatilishidan oldin ilovalar o'rtasida ulanish o'rnatilishi kerak.</li>
    //                         <li>Shuningdek, ma'lumotlar hech qanday xato va buzilishlarsiz qabul qilinishini ta'minlash uchun xatolarni tekshirish mexanizmlarini taqdim etadi.</li>
    //                     </ul>
    //                 </div>
    //                 <div className='text-box my-3'>
    //                     <h1 className='text-center'><strong>User Datagram Protocol (UDP)</strong></h1>
    //                     <p className='content-text'>UDP - ulanishsiz transport qatlami protokoli. TCP dan farqli o'laroq, UDP hech qanday ishonchlilik, oqimni boshqarish yoki xatolarni tiklash funktsiyalarini ta'minlamaydi. Natijada, UDP TCP ning ishonchlilik mexanizmlari zarur bo'lmagan va tezroq uzatish zarur bo'lgan holatlarda foydalidir. Boshqacha qilib aytadigan bo'lsak, UDP tezligi va past kechikish ishonchlilikdan muhimroq bo'lgan ilovalarda foydali bo'ladi va paketlarning tushib ketishi umumiy dastur samaradorligiga sezilarli ta'sir ko'rsatmasdan toqat qilinishi mumkin.</p>
    //                     <h1 className='text-center my-3'><strong>HyperText Transfer Protocol&nbsp;(HTTP)</strong></h1>
    //                     <p className='content-text'>Gipermatnni uzatish protokoli (HTTP) - bu taqsimlangan, hamkorlikdagi va gipermedia axborot tizimlarida muloqot qilish uchun foydalaniladigan amaliy qatlam protokoli. U Transmission Control Protocol (TCP) ustiga qurilgan va ishlab chiquvchilarga TCP va IP paketlarining tafsilotlariga emas, balki o'z ilovalariga e'tibor qaratish imkonini beruvchi yuqori darajadagi abstraksiyani ta'minlaydi. Ba'zi umumiy HTTP usullari orasida PUT, GET, POST va DELETE kiradi.</p>
    //                     <h1 className='text-center my-3'><strong>Hypertext Transfer Protocol Secure (HTTPS)</strong></h1>
    //                     <p className='content-text'>Hypertext Transfer Protocol Secure (HTTPS) gipermatnni uzatish protokolining (HTTP)&nbsp;<strong>xavfsizlangan versiyasi</strong>&nbsp; Oddiy matn formatida maʼlumotlarni uzatuvchi HTTPdan farqli oʻlaroq, HTTPS maʼlumotlarni shifrlangan formatda uzatadi va paketlarni uzatishda xakerlar tomonidan talqin qilinishi yoki oʻzgartirilishidan himoya qiladi.Ko'pincha parollar va moliyaviy operatsiyalar kabi nozik ma'lumotlar uzatilganda ishlatiladi. Ammo shifrlash va shifrni ochish jarayonining ortiqcha yuki tufayli HTTPS HTTPdan sekinroq bo'lishi mumkin.</p>
    //                     <h1 className='text-center my-3'>
    //                         <strong>File Transfer Protocol (FTP)</strong>
    //                     </h1>
    //                     <p className='content-text'>Fayl uzatish protokoli (FTP) mahalliy va masofaviy hostlar o'rtasida fayllarni uzatish uchun ishlatiladi. U Transmission Control Protocol (TCP) ustida ishlaydi va ikkita TCP ulanishini yaratadi:&nbsp;<strong>nazorat ulanishi</strong>&nbsp;va&nbsp;<strong>ma'lumotlar ulanishi</strong>. Boshqaruv ulanishi fayllarni olish va saqlash uchun parollar va buyruqlar kabi boshqaruv ma'lumotlarini uzatish uchun ishlatiladi, ma'lumot ulanishi esa haqiqiy faylni uzatish uchun ishlatiladi. Ikkala ulanish ham fayl uzatish jarayoni davomida parallel ravishda ishlaydi.FTP bir vaqtning o'zida katta fayllar va bir nechta kataloglarni almashish, agar u uzilib qolgan bo'lsa, fayl almashishni davom ettirish, yo'qolgan ma'lumotlarni tiklash va fayllarni uzatishni rejalashtirish qobiliyatiga ega. Ammo FTP ning kamchiliklari ham bor. Unda xavfsizlik yo'q, chunki ma'lumotlar, foydalanuvchi nomlari va parollar oddiy matnda uzatiladi, bu esa ularni zararli shaxslarga nisbatan zaif qiladi. FTP ham shifrlash qobiliyatiga ega emas, bu esa uni sanoat standartlariga mos kelmaydi.</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default ExclusivePage