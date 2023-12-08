const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello,Kamil in Functions!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc=> console.log('Notification Added', doc))
})

exports.projectCreated = functions.firestore
    .document('orders/{orderId}')
    .onCreate(doc=>{
        const order = doc.data();
        const notifications = {
            content: `Zamówienie Nowe`,
            user: `${order.authorFirstName} ${order.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notifications);
});

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc=>{
                const newUser = doc.data();
                const notification = {
                    content: "Dołączył do imprezy",
                    user: `${newUser.authorFirstName} ${newUser.authorLastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification);
            })
})