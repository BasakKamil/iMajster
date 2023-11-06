import React,{ useEffect, useState} from 'react';
import { RiMoneyEuroCircleFill,RiMoneyDollarCircleFill }from 'react-icons/ri';

export default function Weather(){


const dol =  "https://api.nbp.pl/api/exchangerates/rates/c/usd?format=json";
const eur = "https://api.nbp.pl/api/exchangerates/rates/c/eur?format=json";

const [dolar,setDolar] = useState(0);
const [euro,setEuro] = useState(0);
const [loading, setLoading] = useState(true);


function Round(n, k){
                    let factor = Math.pow(10, k+1);
                    n = Math.round(Math.round(n*factor)/10);
                    return n/(factor/10);
}



  useEffect(()=>{

                fetch(dol)
                .then(response => response.json())
                 .then(data=>{

                  let kurs = data.rates[0].ask;
                  setDolar(Round(kurs, 2));
                 });
                 fetch(eur)
                .then(response => response.json())
                  .then(data=>{
                    let kur= data.rates[0].ask;
                   setEuro(Round(kur, 2));
                  });
                  setLoading(false);
            

  },[]);

        return(
                <div>
                   {loading ? ( 
                      "Laduje sie..."
                   ) : (
                    <>
                    <div className="Current Alle"> 
                        <div class="container">
                          <div class="row">
                            <div className="col Dolce">    
                              <div>Obecny stan Dolara to: </div>
                              <div>{ dolar } </div> 
                            </div>
                            <div class="col Mooie2"><RiMoneyDollarCircleFill/></div>
                           </div>
                          
                        </div>
                        <div class="container">
                          <div class="row">
                            <div className="col Euro">    
                              <div>Obecny stan Euro to: </div>
                              <div>{ euro } </div> 
                            </div>
                            <div class="col Mooie"><RiMoneyEuroCircleFill/></div>
                           </div>
                          
                        </div>
                    </div>  
                  </>
                   )}
                </div>
                
              )
            }
    

 