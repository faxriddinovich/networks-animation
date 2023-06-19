import React from 'react'
import {FcDataRecovery} from 'react-icons/fc'
import {SiGnuprivacyguard} from "react-icons/si";


function SessionLayer() {
  return (
    <div className={'layer-wrapper'}>
        <h1 className={'title-layer'}>Session Layer</h1>
        <div className={'layer-wrapper_box'}>
            <div className={'box1'}>
                <div className={'data-icon'}>
                    <FcDataRecovery className={'data-icon_svg anime-scale'}/>
                </div>
                <br/>
                <h3 className={'title-function anime-from-top'}>Data recovery</h3>
            </div>
            <div className={'box1'}>
                <div className={'auth-icon'}>
                    <SiGnuprivacyguard className={'auth-icon_svg anime-scale'}/>
                </div>
                <br/>
                <h3 className={'title-function anime-from-top'}>Authentication</h3>
            </div>
        </div>
    </div>
  )
}

export default SessionLayer