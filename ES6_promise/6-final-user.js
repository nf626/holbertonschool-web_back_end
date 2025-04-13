import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const myPromise = Promise.allSettled([user, photo])
    .then((results) => [
      {
        status: results.status,
        value: results.status === 'fulfilled' ? results.value : results.reason,
      },
    ])
    .catch((error) => [
      {
        status: 'rejected',
        value: error,
      },
    ]);

  return myPromise;
}
