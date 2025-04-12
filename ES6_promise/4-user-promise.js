function signUpUser(firstName, lastName) {
  const myPromise = new Promise((resolve, reject) => {
    resolve({
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    });
    reject(new Error('Error'));
  });
  return myPromise;
}

export default signUpUser;
