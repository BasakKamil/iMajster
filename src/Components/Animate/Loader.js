import React,{ useEffect, useState}  from 'react';



export default function Loader(){

    const [ Load, setLoad ] = useState(false);

    
    useEffect(() => {
        window.onload = () => {
            setLoad(true);    
        } 
    
    }, []);

    return  <div> 
        { !Load ?  <></> : 
              <div class="loader">
                <div class="Gif">
                  <h1>iMejster</h1>
                </div>
              </div>
        }
              
             </div>
  
}


