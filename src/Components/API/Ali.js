import React from "react";
import axios from 'axios';


const Ali = () => {



    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'DSERS_API_ENDPOINT';
    
    const fetchDataFromDSers = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data from DSers:', error);
      }
    };
    
    fetchDataFromDSers();
    

return(

    <div> 
         Ali
    </div>

)



} 

export default Ali