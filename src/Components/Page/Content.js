import React, { useEffect } from 'react'
import '../Sidebar/style/animation.css'
import '../Sidebar/style/animation.css'
import ExclusivePage from './ExclusivePage'
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

function Content({item}) {

    const navigate = useNavigate()

    useEffect(()=>{
        console.log(item)
    },[])

  return (
    <div className='wrapper-container'>
        {item==='exclusive' ? <ExclusivePage/> :
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mx-auto my-3'>
                        <div className='header'>
                            <h1 className='text-center mt-3'>{item[1]}</h1>
                        </div>

                        <div className='body'>
                            <p className='content-text'>
                                {item[2]}
                            </p>
                            <div className='animation-box'>
                                <Spline scene={item[4]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Content