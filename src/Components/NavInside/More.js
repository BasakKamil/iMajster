import React,{useEffect,useState} from 'react';
import gsap from 'gsap';
import { useLayoutEffect } from 'react'
import Skycons from 'react-skycons';

const More = () => {


  // const lat = 52.185970;
  // const long = 21.184840;
  // const proxy = 'https://cors-anywhere.herokuapp.com/';
  // // const api = `${proxy}https://api.darksky.net/forecast/a18f321825c2c6503931cf827ff61142/${lat},${long}`;

  const [ikon,setIkon] = useState(
    {
      skycons: new Skycons({color: "white"})
    }
  
  )


useEffect(()=>{

setIkon({})



},[]);
 
              
//             
             
//           
//   
//               const kamilaserver = `${proxy}https://nodeback-js.herokuapp.com/`;
//              
 
//                 fetch(api)
//                 .then(response => response.json())
//                 //  .then(data => console.log(data))
//                  .then(data=>{
                  
//                   this.place = data.timezone;
//                   this.temperature = data.currently.temperature;
//                   this.new = ((this.temperature - 32) * 5/9);
//                   // Zaokragle sobie temp do całości
//                   this.real = Math.round(this.new);
//                   const warsow = `<p> Obecnie w ${this.place} mamy:</p><h1> ${this.real}<img className="imgC" style="width:30px; margin-left:20px" src=${Temp} /></h1>`;
//                   document.querySelector('.Tempka').innerHTML = warsow;
//                   this.icon = data.currently.icon;
//                   this.currentIcon =  this.icon.replace(/-/g,"_").toUpperCase();
//                   // ustawiam na stanie icone odpowiednia do pogody obecnej w Wawie 
//                   this.setState({
//                     icon: this.currentIcon
//                   })
//                   console.log(this.currentIcon);
//                  });
        
//          
//            



//     
        
    
//     }

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
                   <Skycons 
                     color='black' 
                     icon={ikon.skycons} 
                     autoplay={false}
                     className="Emota"
                   /> 
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