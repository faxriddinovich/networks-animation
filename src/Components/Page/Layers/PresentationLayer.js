import React from 'react'
import {HiOutlineArrowDown,HiOutlineArrowUp} from "react-icons/hi2";
import {AiOutlineCloudServer} from "react-icons/ai";

function PresentationLayer() {
  return (
    <div className={'layer-wrapper'}>
        <h1 className={'title-layer'}>Presentation Layer</h1>
        <div className={'layer-wrapper_box'}>
            <div className={'box-main'}>
                <div className={'presentation-layer-box text-center anime-scale'}>
                    <h3>Presentation layer</h3>
                </div>
            </div>
            <div className={'box1 text-right'}>
                <div className={'arrow-down-icon anime-from-top'}>
                    <p>Encrypted data</p>
                    <HiOutlineArrowDown className={'arrow-down-icon_svg'}/>
                </div>
            </div>
            <div className={'box1'}>
                <div className={'arrow-up-icon anime-from-top'}>
                    <HiOutlineArrowUp className={'arrow-up-icon_svg'}/>
                    <p>Decrypted data</p>
                </div>
            </div>
            <div className={'box-main text-center'}>
                <div className={'network-icon anime-from-bottom'}>
                    <AiOutlineCloudServer className={'network-icon_svg'}/>
                    <span>Network</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PresentationLayer