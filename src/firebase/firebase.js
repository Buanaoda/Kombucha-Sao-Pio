import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://kombucha-sao-pio-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, storage, firebase, database as default };







































/* Memory Refreshers */ 

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Tomato sauce',
//   note:'Elephant, very good.',
//   amount: 2.69,
//   createdAt: new Date()
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'One',
//   age: 27,
//   stressLevel: 7.753,
//   job: {
//     title: 'Software developer',
//     company: 'Jesuits'
//   },
//   location: {
//     city: 'Juiz de Fora',
//     region: 'Minas Gerais',
//     houseNumber: '20',
//     saintJosephPrayForUs: true
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });


// database.ref().update({
//   stressLevel: 9.897,
//   'job/company': 'Amazon',
//    'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data was updated');
// }).catch(() => {
//   console.log('Updating data failed', e);
// });

// database.ref('location/region')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch(() => {
//     console.log('Removing data failed', e);
//   });
 
