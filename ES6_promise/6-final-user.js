// 6-final-user.js

import signUpUser from './4-user-promise'; // Import signUpUser
import uploadPhoto from './5-photo-reject'; // Import uploadPhoto

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const myPromise = Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((arr) => ({
      status: arr.status,
      value: arr.status === 'fulfilled' ? arr.value : String(arr.reason),
    })));
  return myPromise;
}
