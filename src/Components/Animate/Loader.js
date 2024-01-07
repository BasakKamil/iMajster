import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


export default function Loader(){




    return(
              <div className="Loader">
                  <div className="Gif">
                        <h1>ROMMEL</h1>
                        <ClipLoader
                          loading={true}
                          size={150}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                  </div>
              </div>
    )
  
}


