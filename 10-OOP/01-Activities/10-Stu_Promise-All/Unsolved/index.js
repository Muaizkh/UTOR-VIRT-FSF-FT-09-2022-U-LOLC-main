const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: If the duration is longer than maxDuration, reject() the promise
      if(duration > maxDuration) {
        const message = new Error(`This request times out: ${duration}`);
        reject(message);
      }else {
        resolve(`"Response received: ${duration} ms."`)
      }
      // TODO: Otherwise resolve() the promise
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all (promises)
.then((data) => console.log(data))
.catch((err)=> console.error(err));