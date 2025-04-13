import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject.js';

function handleProfileSignup(firstName, lastName, fileName) {
  const myPromise = Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(new Promise((resolve, reject) => {
      resolve();
      reject();
    }));
  return myPromise;
}

export default handleProfileSignup;
