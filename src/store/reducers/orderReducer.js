const initState = {
 
}

const orderReducer = (state= initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
         case 'CREATE_ORDER':
             console.log('Utworzono Zamówienie :D ', action.order);
             alert('Dziekujemy za złoenie Zamówienia :)');
             return state
         case 'CREATE_ORDER_ERROR':
             console.log('Utowrzono Zamówienie Błędnie :(', action.error);
             return state
         default:
            return state
    }
   
}

export default orderReducer 