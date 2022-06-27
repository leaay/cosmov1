import React,{useState,useEffect} from 'react'
import technology from '../data/technology'
import {gsap} from 'gsap'

export default function Technology() {

    const [currentItem, setCurrentItem] = useState(0)
    const [windowWidth , setWindowWidth] = useState(document.body.clientWidth)


    function technologyAnimate(){

        
        const tl = gsap.timeline({defaults:{duration:.4,ease:'power3.out'}})
        tl.restart()
        tl.fromTo('div.technology-text-box > *' , {opacity:0,y:20} , { opacity:1 , y:0 , stagger:.1})
        tl.fromTo('img.technology-img', {opacity:.2,x:200} , {opacity:1 , x:0},"<")
        
    }

    function handleChange(e){
        
        const index = parseInt(e.target.getAttribute('ind'), 10);
        technologyAnimate()
        setCurrentItem(index)
        
    }


    useEffect(()=>{

        gsap.fromTo('nav.nav' ,{y:-50,duration:.2,ease:'power3.out'}, {y:0} )
        technologyAnimate()

    },[])


    const nav = technology.map((item , index) => <button aria-label='change technology' onClick={handleChange} className={currentItem === index ? 'circle circle-active' : 'circle'} ind={index} key={index}> {index + 1}</button>)
    
    const items = technology.map((item , index) => 
        <div key={index} className={currentItem === index ? 'technology-item main-grid' : 'technology-hide' } >

            <h2 className='title1 uppercase'><span>03</span> space launch 101 </h2>
            <img className='technology-img' src={windowWidth > 1199 ? item.images.portrait : item.images.landscape} />
            <div className='circles'>{nav}</div>

            <div className='technology-text-box'>   

                <h5 style={{fontSize:'var(--fs600)'}} className='title1 uppercase'>the terminology...</h5>
                <h4 className='heading4 uppercase'>{item.name}</h4>
                <p className='standard-text' >{item.description}</p>

            </div>
            

        </div>)



  return (

        <div className='technology-page main-grid'>

                {items}
            
        </div>

  )
}
