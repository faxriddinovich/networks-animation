import React from 'react'
import {AiOutlineSend} from 'react-icons/ai' 

function NetworkLayer() {
  return (
    <div className='layer-wrapper'>
        <h1 className='title-layer'>Network Layer</h1>
        <div className='layer-wrapper_box'>
          <div className='box-main'>
            <h3 className='title-layer'>Transport layer</h3>
            <div className='data-pocket'>
              <h4 className='data-pocket_title'>Data pockets</h4>
            </div>
            <div className='message-icon'>
              <AiOutlineSend className='decoding-message'/>
            </div>
          </div>
          <div className='box-main'>
            <div className='network-layer'>
              <p>Ma'lumotlarni tarmoq fragmentlariga ajratish va manzillarini birlashtirish</p>
            </div>
            <div className='message-icon'>
              <AiOutlineSend className='decoding-message'/>
            </div>
          </div>
          <div className='box-main'>
            <h3 className='title-layer'>Data-link layer</h3>
          </div>
        </div>
    </div>
  )
}

export default NetworkLayer