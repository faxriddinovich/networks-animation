import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './style/sidebar.css'
import Content from '../Page/Content'
import $ from 'jquery'
import ExclusivePage from '../Page/ExclusivePage'

function Sidebar() {

    const [result,setResult] = useState('')
    const [items,setItems] = useState([])
    const [article,setArticle] = useState('')

    function selectItem(id,item){

        let items = document.querySelectorAll('li.article');
        [].forEach.call(items, function(el) {
            el.classList.remove("active");
        });

        let newItem = document.getElementById(id)
        console.log(newItem)
        newItem.classList.add('active')

        setArticle(item)
    }

    useEffect(()=>{
        	$.ajax({
			type: "POST",
			url: 'http://localhost:8000/server.php',
			data: {title:'themes'},
			success(data) {
				setResult(JSON.parse(data));
			},
		});
    },[])

    function showItems(id,title){
        if(title==='articels'){
            $.ajax({
                type:"POST",
                url:'http://localhost:8000/items.php',
                data:{id:id,tableName:title},
                success(message){
                    setItems(JSON.parse(message))
                }
            })
        }
        else if(title==='exclusive') {
            let items = document.querySelectorAll('li.article');
            [].forEach.call(items, function(el) {
                el.classList.remove("active");
            });

            let newItem = document.getElementById(id)
            newItem.classList.add('active')
            setArticle('exclusive')
            }
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2 col-sm-2 bg-dark  d-flex flex-column justify-content-between min-vh-100'>
                <div className='mt-2'>
                    <a href="#" className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
                        <span className='f5-4  mt-3'>Site menu</span>
                    </a>
                    <hr className='text-white d-none d-sm-block'/>
                    <ul className="nav nav-pills flex-column mt-2 mt-sm-0 " id='parentM'>
                        
                        {result ? result.map(item =>{
                            return <li className="nav-item my-1 py-2 py-sm-0 parent-content" key={item[0]} id={item[0]+'parent'} onClick={()=>{
                                if(item[4]){
                                    showItems(item[0],'articels')
                                }
                                else showItems(item[0]+'parent','exclusive')
                            }}>
                            <a href={`#`+item[2]} className="nav-link  text-white text-center text-sm-start" data-bs-toggle="collapse" aria-current="page">
                                <i className={item[3]}></i>
                                <span className='ms-2  d-none d-sm-inline'>{item[1]}</span>
                                {item[4] ? <i className='bi bi-chevron-down ms-0 ms-sm-3'></i> : ''}
                            </a>
                            {item[4] ? <ul className='nav collapse ms-2 flex-column' id={item[2]} data-bs-parent={item[4] ? "#parentM" : ''}>
                                {items.map(content=>{
                                    return <li className="nav-item article" key={item[0]} id={content[0]} onClick={()=>selectItem(content[0],content)}>
                                        <a className="nav-link text-white" href="#" aria-current="page">
                                            <span className='d-none d-sm-inline'>{content[1]}</span> 1
                                        </a>    
                                    </li>
                                })}
                            </ul> : ""}
                        </li>
                        }) : ''}
                    </ul>
                </div>
            </div>
            
            <div className='col-md-10'>
                {article ? <Content item={article}/> : <h1 className='text-center mt-3'>Ixtiyoriy mavzuni tanlang.</h1>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar