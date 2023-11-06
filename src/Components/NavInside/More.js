import React from 'react';
import gsap from 'gsap';
import { useLayoutEffect } from 'react'
// import Skycons from 'react-skycons';

const More = () => {



useLayoutEffect(() => {

    gsap.to('box', {
      rotation: "+=360"
    });
  });
  
  return(
    <div className="info">
      <div className="box" >
        Nazywam sie Kamil Basak i jestem wlascicielem sklepu 
      </div>
      <div class="container">
        <div class="row">
           <div class="col">
           <div className="WeatherApp"> 
                   
                   <p className="Tempka"></p>
                   {/* <Skycons 
                     color='black' 
                     icon={ikon.skycons} 
                     autoplay={false}
                     className="Emota"
                   />  */}
               </div>
           </div>
           <div class="col">
            Column 
           </div>
           <div class="col">
            Column
           </div>
        </div>
        </div>
      </div>
  )


  }



export default More