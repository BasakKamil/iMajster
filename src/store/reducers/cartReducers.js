import {UNDO,REDO} from '../actions/cartActions';



const cartReducers = (state,action) => {
    if(state === undefined){
        return {
            cart: [],
            history: [[]],
            historyIndex: 0
        }
    }
    // eslint-disable-next-line default-case
    switch(action.type){
        case UNDO:{
            let historyIndex = state.historyIndex - 1
            historyIndex = Math.max(historyIndex,0)
            return{
                ...state,
                cart: state.history[historyIndex],
                historyIndex
            }
        }

        case REDO:{
            let historyIndex = state.historyIndex + 1
            historyIndex = Math.min(historyIndex,state.history.length - 1)
            return{
                ...state,
                cart: state.history[historyIndex],
                historyIndex

            }
        }
        case 'ADD_TO_CART' : {
           const cart = [...state.cart,action.product]
           const history = [...state.history]
           history.splice(state.historyIndex + 1,state.history.length)
           history.push(cart)
           const historyIndex = history.length - 1
           
            return {
                ...state,
                cart, 
                history, 
                historyIndex

            }
        }
        // eslint-disable-next-line no-fallthrough
        case 'REMOVE_FROM_CART' : {
           const cart = [...state.cart]
           cart.splice(action.index, 1)

           const history = [...state.history]
           history.splice(state.historyIndex + 1,state.history.length)
           history.push(cart)
           const historyIndex = history.length - 1
           return {
               ...state,
               cart,
               history,
               historyIndex
           }
        }
   
        // eslint-disable-next-line no-fallthrough
        default : {
            return state
        }

    }
}
export default cartReducers