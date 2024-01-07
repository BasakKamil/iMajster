
const initState = {
    loading: false,
    items: [],
    error: "", 
}

const productReducer = (state= initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
         case 'CREATE_PRODUCT':
             console.log('Utworzono nowy PRODUKT:D ', action.product);
             return { 
                ...state,
                authError: null 
            }
    
         case 'CREATE_PRODUCT_ERROR':
             console.log('NIE UDALO SIE :(', action.error);
             return { ...state }

         default:
            return state;
    }
   
}

export default productReducer