import React from 'react'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {AiFillMessage} from 'react-icons/ai'
import {BsRouter} from 'react-icons/bs'

function DataLinkLayer() {
  return (
    <div className='layer-wrapper'>
        <h1 className='title-layer'>DataLinkLayer</h1>
        <div className='layer-wrapper_box'>
          <div className='computer-icon'>
            <HiOutlineDesktopComputer/>
            <h3 className='first-text'>Device A</h3>
          </div>
          <div className='message'>
            <AiFillMessage/>
          </div>
          <div className='router'>
            <BsRouter/>
          </div>
          <div className='computer-icon'>
            <HiOutlineDesktopComputer/>
            <h3 className='second-text'>Device B</h3>
          </div>
        </div>
    </div>
  )
}

export default DataLinkLayer