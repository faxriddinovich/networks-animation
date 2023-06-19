import React from 'react'
import {TbDeviceLandlinePhone} from "react-icons/tb";
import {LuMoveHorizontal} from "react-icons/lu";
import {FaLaptopCode} from "react-icons/fa";
import {BsFillTvFill} from "react-icons/bs";
import {CiMobile3} from "react-icons/ci";

function TransportLayer() {
  return (
    <div className='layer-wrapper'>
        <h1 className='title-layer'>Transport Layer</h1>
        <div className={'layer-wrapper_box'}>
            <div className={'box3 text-center mt-2'}>
                <div className={'device-icon anime-from-top'}>
                    <TbDeviceLandlinePhone className={'device-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'line-icon anime-scale'}>
                    <LuMoveHorizontal className={'line-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'device-icon anime-from-top'}>
                    <TbDeviceLandlinePhone className={'device-icon_svg'}/>
                </div>
            </div>
        </div>

        <div className={'layer-wrapper_box'}>
            <div className={'box3 text-center mt-2'}>
                <div className={'laptop-icon anime-from-left'}>
                    <FaLaptopCode className={'laptop-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'line-icon anime-scale'}>
                    <LuMoveHorizontal className={'line-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'laptop-icon anime-from-right'}>
                    <FaLaptopCode className={'laptop-icon_svg'}/>
                </div>
            </div>
        </div>

        <div className={'layer-wrapper_box'}>
            <div className={'box3 text-center mt-2'}>
                <div className={'tv-icon anime-from-left'}>
                    <BsFillTvFill className={'tv-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'line-icon anime-scale'}>
                    <LuMoveHorizontal className={'line-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'tv-icon anime-from-right'}>
                    <BsFillTvFill className={'tv-icon_svg'}/>
                </div>
            </div>
        </div>

        <div className={'layer-wrapper_box'}>
            <div className={'box3 text-center mt-2'}>
                <div className={'mobile-icon anime-from-bottom'}>
                    <CiMobile3 className={'mobile-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'line-icon anime-scale'}>
                    <LuMoveHorizontal className={'line-icon_svg'}/>
                </div>
            </div>
            <div className={'box3 text-center mt-2'}>
                <div className={'mobile-icon anime-from-bottom'}>
                    <CiMobile3 className={'mobile-icon_svg'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransportLayer