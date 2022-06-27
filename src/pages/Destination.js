import React,{useState,useEffect} from 'react'
import destination from '../data/destination'
import {gsap} from 'gsap'
export default function Destination() {

    const [planet, setPlanet] = useState('Moon');
    const [isFristTime , setIsFristTime] = useState(true)

    const active = 'planet-nav-item text-white uppercase tab-item tab-item-active '
    const notAcive = 'planet-nav-item text-white uppercase tab-item'

    function planetAnimation(condition){

        const tl = gsap.timeline({defaults:{duration:1,ease:'power3.out'}})
        
        tl.fromTo('img.planet-img',{rotate:-200,scale:.2,x:-200,y:200} , {rotate:0,scale:1,x:0,y:0})
        tl.fromTo('h1.planet-name',{opacity:0,duration:.4} , {opacity:1},'<')

          if(condition){
              tl.fromTo('div.planet-nav',{opacity:0 , y:-20} , {opacity:1 , y:0 , transformOrigin:'left'}, '<')
          } else{
            return
          }

    }

        
    function  handleClick(e){
      setPlanet(e.target.getAttribute('item'))
      planetAnimation(isFristTime)
    }

    function  handleKeyPress(e){
      if(e.key === 'Enter'){
        setPlanet(e.target.getAttribute('item'))
      }
    }


    useEffect(()=>{

      gsap.fromTo('nav.nav' ,{y:-50,duration:.2,ease:'power3.out'}, {y:0} )
      planetAnimation(isFristTime)
      setIsFristTime(false)

    },[])






    const  navigation = destination.map(item => 
        <button aria-label={`change planet ${item.name}`} onKeyDown={handleKeyPress} item={item.name}  key={item.name} className={planet === item.name ? active : notAcive} onClick={handleClick}><h2 item={item.name} style={{fontWeight:'lighter'}}>{item.name}</h2></button>
    )


    const items = destination.map(item=>
          <div className={planet === item.name ? 'show-planet ' : 'hide-planet'} key={item.name}>
              <h2 className='title1 uppercase  '><span>01</span> pick your destination </h2>
              <img className='planet-img' src={item.images.webp}/>
              <div className='planet-nav'>{navigation}</div>
              <h1  className='uppercase home-page-h1 planet-name' >{item.name}</h1>
              <p className='standard-text'>{item.description}</p>
              <span className='deco-line'></span>
              
              <div className='planet-info-box'>

                  <div className='palnet-info-item'>
                    <h5 style={{fontSize:'var(--fs600)'}} className='title1 uppercase'>avg. distance</h5>
                    <h4 className='heading4 uppercase'>{item.distance}</h4>
                  </div>

                  <div className='palnet-info-item'>
                    <h5 style={{fontSize:'var(--fs600)'}} className='title1 uppercase'>est. travel time</h5>
                    <h4 className='heading4 uppercase'>{item.travel}</h4>
                  </div>

              </div>
              
              
          </div>)




    

  return (
    <div className='destination-page  main-grid'>
        {items}
    </div>
  )
}
