import React,{ useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {createProduct} from '../../store/actions/productsActions';


function Admin(props){
    // const history = useHistory();
        const [product,setProduct] = useState({
            content: '',
            name: '',
            img: '',
            price: 40,
            section: ''
        });

        const handleChange = (e) => {
            setProduct({...product,
                [e.target.id]: e.target.value
            });
        } 

        const create= () => {
            props.createProduct(product);
            props.history.push('/');
            
        } 

        // function back(){
        //    history.goBack();
        // }

  
   

        const {auth} = props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container AboutKamil">
                <div className='AdminDash container'>
                    <div className='row'>
                            <h2>Admin</h2>
                        <div className='col'>
                            <form className='KamilFormAdd'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Content</label>
                                    <input id="content" value={product.content} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label>Img URL</label>
                                    <input id="img" value={product.img} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <input id="name" value={product.name} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label >Price</label>
                                    <input id="price" value={product.price}  onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label >Section</label>
                                    <input id="section" value={product.section} onChange={handleChange}/>
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={create}>Submit</button>
                                {/* <button class="btn btn-danger" onClick={back}>Powrot</button> */}
                                
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    
    }
    


const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProduct: (product) => dispatch(createProduct(product))
    }
}
 

export default connect(mapStateToProps,mapDispatchToProps)(Admin)
