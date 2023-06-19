import React from 'react'
import {FaLongArrowAltDown, FaLongArrowAltUp} from 'react-icons/fa'
import {FiCornerDownRight,FiCornerRightUp} from 'react-icons/fi'
import AIWriter from 'react-aiwriter'

function PhysicalLayer() {
  return (
    <div className='layer-wrapper'>
        <h1 className='title-layer'>Physical Layer</h1>
        <div className='layer-wrapper_box'>
            <div className='box1'>
                <h3 className='first-text'>From data-link layer</h3>
            </div>
            <div className='box2'>
                <h3 className='second-text'>To data-link layer</h3>
            </div>

            <br/>

            <div className='box1 text-center'>
                <FaLongArrowAltDown className='arrow-down'/>
            </div>
            <div className='box2 text-center'>
                <FaLongArrowAltUp className='arrow-up'/>
            </div>

            <br/>

            <div className='box1 text-center'>
                <div className='box_one text-center'>
                    <AIWriter>
                        <p className='sending-text'>001100111010101001</p>
                    </AIWriter>
                </div>
            </div>
            <div className='box2 text-center'>
                <div className='box_two text-center'>
                    <AIWriter >
                        <p className='sending-text'>001100111010101001</p>
                    </AIWriter>
                </div>
            </div>

            <br/>

            <div className='box3 text-right'>
                <FiCornerDownRight className='corner-right'/>
            </div>

            <div className='box3 text-center'>
                <div className='medium-box'>
                    <h3>Transmission medium</h3>
                </div>
            </div>

            <div className='box3'>
                <FiCornerRightUp className='corner-right-up'/>
            </div>
        </div>
    </div>
  )
}

export default PhysicalLayer