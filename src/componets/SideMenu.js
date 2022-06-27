import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { CREW, DESTINATION, HOME, TECHNOLOGY } from '../routes'
import { gsap } from  'gsap'
export default function SideMenu( props) {

    const active = 'text-white uppercase tab-item title1 tab-item-active '
    const nonActive = 'text-white uppercase tab-item title1'

    function hideSlider(){
      const tl = gsap.timeline({default:{duration:.2,ease:'power3.out'}})
      tl.fromTo('div.side-menu',{x:0},{x:255,onComplete:()=>{props.change(false)}})
    }

    useEffect(()=>{

      gsap.fromTo('div.side-menu',{x:200 , overflowX:'hidden'},{x:0,ease:'power3.out',duration:.5})

    },[])

  return (
    <div className='side-menu'>
      
        <div onClick={()=>( hideSlider() , document.body.style.overflowY='auto' )} className='close-area'></div>

        <div className='side-menu-content'>
                    <button  onClick={()=>(hideSlider() , document.body.style.overflowY='auto' )} className='side-menu-close-icon' ><img src='./img/shared/icon-close.svg'/></button>

                    
                    <NavLink  onClick={()=>(props.change(false) , document.body.style.overflowY='auto' )}  className={({ isActive }) => isActive ? active : nonActive } to={HOME}><span>01</span>home</NavLink>
                    <NavLink  onClick={()=>(props.change(false) , document.body.style.overflowY='auto' )}  className={({ isActive }) => isActive ? active : nonActive } to={DESTINATION}><span>02</span>destination</NavLink>
                    <NavLink  onClick={()=>(props.change(false) , document.body.style.overflowY='auto' )}  className={({ isActive }) => isActive ? active : nonActive } to={CREW}><span>03</span>crew</NavLink>
                    <NavLink  onClick={()=>(props.change(false) , document.body.style.overflowY='auto' )}  className={({ isActive }) => isActive ? active : nonActive } to={TECHNOLOGY}><span>04</span>technology</NavLink>
         
        </div>
    </div>
  )
}
