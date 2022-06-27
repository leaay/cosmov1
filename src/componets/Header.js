import React,{useState} from 'react'
import { NavLink , Link } from 'react-router-dom'
import { CREW, DESTINATION, HOME, TECHNOLOGY } from '../routes'
import SideMenu from './SideMenu'


export default function Header() {


  const [sideMenu,setSideMenu] = useState(false)
  

  const active = 'text-white uppercase tab-item title1 tab-item-active '
  const nonActive = 'text-white uppercase tab-item title1'



  


  return (


    <nav  className='nav'>

      <Link  aria-label='go to home page'   to={HOME} ><img className='logo' src='./img/shared/logo.svg' alt='logo' /></Link>

      <button aria-label='open side menu' tabIndex={1} onClick={()=>(setSideMenu(true) , document.body.style.overflowY='hidden' )}><img src='./img/shared/icon-hamburger.svg' alt='burger-menu'/></button>

      {sideMenu? <SideMenu change={setSideMenu} /> : null}

      <div className='bigger-nav'>

                    <NavLink aria-label='go to home page'  tabIndex={2} className={({ isActive }) => isActive ? active : nonActive } to={HOME}><span>01</span>home</NavLink>
                    <NavLink aria-label='go to destination page' tabIndex={2} className={({ isActive }) => isActive ? active : nonActive } to={DESTINATION}><span>02</span>destination</NavLink>
                    <NavLink aria-label='go to crew page' tabIndex={2} className={({ isActive }) => isActive ? active : nonActive } to={CREW}><span>03</span>crew</NavLink>
                    <NavLink aria-label='go to technology page' tabIndex={2} className={({ isActive }) => isActive ? active : nonActive } to={TECHNOLOGY}><span>04</span>technology</NavLink>

      </div>

    </nav>

    
  )

}
