export const createProduct = (product) => {
  
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
    
   
        // console.log(description);
        firestore.collection('products').add({
            ...product
        }).then(()=>{
            dispatch({type: 'CREATE_PRODUCT', product});
        }).catch((err)=>{
            dispatch({type:'CREATE_PRODUCT_ERROR', err});
        })
    }
}

export const deleteProduct = (id) => {
  
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        // console.log(description);
        firestore.collection('products').doc(id).delete()
        .then(()=>{
            dispatch({type: 'DELETE_PRODUCT'});
        }).catch((err)=>{
            dispatch({type:'DELETE_PRODUCT_ERROR', err});
        })
    }
}