function handleResponseFromAPI(promise) {
  promise.then({
    status: 200,
    body: 'success',
  }, new Error('The fake API is not working currently'));
  console.log('Got a response from the API');
}

export default handleResponseFromAPI;
