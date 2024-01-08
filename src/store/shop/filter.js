import React from 'react';


function Filter(props){

    

    function onFilterValueChanged(event){
        props.onFilterValueSelected(event.target.value);
    }



        return (

            <div class="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Products
                    </button>
                    <select className="dropdown-menu MenuKamilcia" onChange={onFilterValueChanged}>
                        <option className="dropdown-item" type="button" value="All" >All</option>
                        <option className="dropdown-item" type="button" value="iPhone" >iPhone</option>
                        <option className="dropdown-item" type="button" value="Samsung" >Samsung</option>
                    </select>
            </div>

        )
    
}

export default Filter
