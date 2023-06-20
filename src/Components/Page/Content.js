import React from 'react'
import '../Sidebar/style/animation.css'
import '../Sidebar/style/animation.css'
import ExclusivePage from './ExclusivePage'
import Spline from '@splinetool/react-spline';

function Content({item}) {

  return (
    <div className='wrapper-container'>
        {item==='exclusive' ? <ExclusivePage/> :
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mx-auto my-3'>
                        <div className='header'>
                            <h1 className='text-center mt-3'>{item.title_article}</h1>
                        </div>

                        <div className='body'>
                            <p className='content-text'>
                                {item.content}
                            </p>
                            <div className='animation-box'>
                                <Spline scene={item.animation_link} />
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