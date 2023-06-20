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
  )
}

export default ExclusivePage