import React from 'react';


function filter(props){

        return (

            <div class="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Products
                    </button>
                    <ul className="dropdown-menu MenuKamilcia" onChange={props.handleChangeSort}>
                        <li><button class="dropdown-item" type="button" value={props.sort}>Lowest to Highest</button></li><br/>
                        <li><button class="dropdown-item" type="button" value={props.sort}>Highest to Lowest</button></li>
                    </ul>
            </div>

        )
    
}

export default filter
