import React,{useState,useEffect} from 'react'
import crew from '../data/crew'
import {gsap } from 'gsap'

export default function Crew() {

  const [currentCrewMate, setCurrentCrewMate] = useState(0)
  const show = 'crew-mate-box show-crew'
  const noShow = 'noShow-crew'

  function crewAnimate(){

    const tl = gsap.timeline({defaults:{duration:.4,ease:'power3.out'}})
    tl.fromTo('div.crew-text-box > *' , {opacity:0,y:20} , { opacity:1 , y:0 , stagger:.1})
    tl.fromTo('img.crew-img', {opacity:.2,y:20} , {opacity:1 , y:0},"<")

  

  }

  function handleChange(e){
   
    const index = parseInt(e.target.getAttribute('ind'), 10);
    setCurrentCrewMate(index)
    crewAnimate()

    
  }


  useEffect(()=>{
    
    gsap.fromTo('nav.nav' ,{y:-50,duration:.2,ease:'power3.out'}, {y:0} )
    crewAnimate()

  },[])




  const crewNav = crew.map((item, index) => <button aria-label='change crew member' key={item.name} onClick={handleChange} ind={index} className={currentCrewMate === index ? 'dot dot-active' : 'dot'}></button>)

  const crewMates = crew.map((item , index) => 
    <div  key={item.name} className={currentCrewMate === index ? show : noShow}>

        <h2 className='title1 uppercase'><span>02</span> meet your crew </h2>
            <picture className='crew-img-wrapper'>
              <img className='crew-img' src={item.images.webp} />
            </picture>   
      
          <div className='dots'>
            {crewNav}
          </div>

        <div className='crew-text-box'>
            <h5 className='heading5 uppercase'>{item.role}</h5>
            <h4 className='heading4 uppercase'>{item.name}</h4>
            <p className='standard-text'> {item.bio}</p>
        </div>
        
        

      
    </div>)




  return (
    <div className='main-grid crew-page'>
        {crewMates}
    </div>
  )
}
