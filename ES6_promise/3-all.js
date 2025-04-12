import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const myPromise = Promise.all([uploadPhoto(), createUser()])
    .then(([photo, name]) => {
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
  return myPromise;
}

export default handleProfileSignup;
