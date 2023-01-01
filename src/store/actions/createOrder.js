export const createOrder = (order,description) => {
  
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const author = getState().firebase.auth.uid;
        console.log(description);
        firestore.collection('orders').add({
            authorFirstName: profile.name,
            authorLastName: profile.surname,
            authorId: author,
            createdAt: new Date(),
            description: description,
            orders: order
        }).then(()=>{
            dispatch({type: 'CREATE_ORDER', order});
        }).catch((err)=>{
            dispatch({type:'CREATE_ORDER_ERROR', err});
        })
    }
}