

const initState = {
         a : "Nie Udało się zalogować :(",
         b: "Udało się zalogować :)"
}




const authReducer = (state= initState, action) => {
    
     // eslint-disable-next-line default-case
     switch(action.type){
                  
          // eslint-disable-next-line no-fallthrough
          case 'LOGIN_ERROR' :
               console.log(initState.a);
               return{
                    ...state,
                    authError: initState.a
               }
          case 'LOGIN_SUCCESS':
               console.log(initState.b);
               return{
                    ...state,
                    authError: initState.b
               }
          case 'SIGNOUT_SUCCESS':
               console.log('DO zobaczenia niedługo :)');
               return state;

          case 'SIGNOUT_ERROR':
               console.log('Coś nie działa Wylogowywanie :(');
               return state;

          case 'SIGNUP_SUCCESS':
               console.log('Zarejstrowałeś się bez problemów :P');
               return{
                    ...state,
                    authError: null
               }
          case 'SIGNUP_ERROR':
               console.log('Coś poszło nie tak przy restracji stary :/');
               return{
                    ...state,
                    authError: action.err.message
               }
               
          default :
               return state;
     }
     
}

export default authReducer