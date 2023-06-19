import React from 'react'
import {IoMan, IoWoman} from "react-icons/io5";
import {FaArrowDown} from "react-icons/fa";
import './layer-style/applicationlayer.css'

function ApplicationLayer() {
  return (
    <div className={'layer-wrapper'}>
        <h1 className={'title-layer'}>Application Layer</h1>
        <div className={'layer-wrapper_box'}>
            <div className={'box-main'}>
                <div className={'user-icon anime-from-left'}>
                    <IoMan className={'user-icon_svg'}/>
                    <IoWoman className={'user-icon_svg'}/>
                </div>
                <div className={'arrow-down-icon anime-from-right'}>
                    <FaArrowDown className={'arrow-down-icon_svg'}/>
                    <FaArrowDown className={'arrow-down-icon_svg'}/>
                </div>
                <div className={'data-box anime-scale'}>
                    <div className={'data-secondary text-center'}>FTP</div>
                    <div className={'data-secondary text-center'}>HTTP</div>
                    <div className={'data-secondary text-center'}>HTTPS</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApplicationLayer