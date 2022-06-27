
import React,{useEffect,useRef} from 'react'
import { DESTINATION } from '../routes'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";


export default function Home() {

  const btn = useRef()

  useEffect(()=>{

    const tl = gsap.timeline({defaults:{duration:.7,ease:'power3.out'}})

        tl.fromTo('nav.nav' ,{y:-50,duration:.2,ease:'power3.out'}, {y:0} )
        tl.fromTo(btn.current , {rotate:-200,scale:.2} , {rotate:0,scale:1} , '<'  )
        tl.fromTo('h5.uppercase , h1.home-page-h1 , p.standard-text' , {opacity:0,y:-15} , {opacity:1,y:0,stagger:.2} , '<')

  } , [])


  



  return (



        <div className='home-page'>
        <div className='home-page-content'>

          <div className='home-page-text'>
                    <h5 className='uppercase' style={{color:'hsl(var(--clr-light))',letterSpacing:'3.75px',fontWeight:'lighter',fontSize:'var(--fs-400)'}}> So, you want to travel to </h5>
                    <h1  className='uppercase home-page-h1' >Space</h1>

                    <p className='standard-text' >
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                      outer space and not hover kind of on the edge of it. Well sit back, and relax 
                      because we’ll give you a truly out of this world experience! 
                    </p>

          </div>
                      <Link aria-label='explore-button' ref={btn} className="btn uppercase" to={DESTINATION}>explore</Link>
                     

        </div>
    </div>
  )
}
