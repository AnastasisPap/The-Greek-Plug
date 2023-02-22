import { firestore } from './../../firebase/utils';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const handleSaveOrder = order => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleGetUserOrderHistory = uid => {
  console.log('TEST')
  return new Promise((resolve, reject) => {
    let ref = collection('orders').orderBy('dateOrdered');
    const q = query(ref, where('userID', '==', uid));

    getDocs(q)
      .then(snap => {
        const data = [
          ...snap.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];
        resolve({ data });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleGetOrder = orderID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc(orderID)
      .get()
      .then(snap => {
        if (snap.exists) {
          resolve({
            ...snap.data(),
            documentID: orderID
          })
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}
