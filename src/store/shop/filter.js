import React from 'react';


function Filter(props){

    // const {products, setFiltered, activeGenere} = props;
//   const {setActiveGenere } = props;

    // useEffect(()=>{
    // if(activeGenere === 0){
    //     setFiltered(products);
    //     return;
    // }
    // const fil = products.filter((product)=>{
    //     console.log(product)
    // });
    // setFiltered(fil);

    // },[activeGenere])


        return (

            <div class="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter Products
                    </button>
                    <ul className="dropdown-menu MenuKamilcia">
                        <li><button class="dropdown-item" type="button" >Lowest to Highest</button></li><br/>
                        <li><button class="dropdown-item" type="button" >Highest to Lowest</button></li>
                    </ul>
            </div>

        )
    
}

export default Filter
