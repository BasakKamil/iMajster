const initState = {
 
}

const projectReducer = (state= initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
         case 'CREATE_PROJECT':
             console.log(' Projekt Utworzony ', action.project);
             return state
         case 'CREATE_PROJECT_ERROR':
             console.log('Utowrzono projekt błędnie :(', action.error);
             return state
         default:
            return state
    }
   
}

export default projectReducer