import React,{useState, useEffect} from 'react'
import "./Nav.css"

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener("scroll",window.show);
        };
    },[])
  return (

    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" 
        alt="Netflix logo" />
    
        <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
        alt="Netflix Avatar" />
    </div>
    
  )
}

export default Nav
