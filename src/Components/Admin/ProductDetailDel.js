import React from "react";
import { connect } from 'react-redux';
import { deleteProduct } from "../../store/actions/productsActions";

const ProductDetailDel = (props) => {

    const {product,deleteProduct} = props;

return(
    <div className="Kammaplist row" key={product.id}> 
                            <div className="col">
                                <div> { product.name } </div>
                                <div> { product.id } </div>
                                <button value={product.id} onClick={(e) => ( props.deleteProduct(e.target.value))} className="btn btn-danger">Delete</button>
                            </div>
    </div>

)


}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteProduct: (id) => dispatch(deleteProduct(id))
    }
}

export default connect(null,mapDispatchToProps)(ProductDetailDel)