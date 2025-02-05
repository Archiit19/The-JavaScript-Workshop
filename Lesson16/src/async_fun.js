import {Identity, Failure} from './functors';

async function asyncFun() {
  let oneTwoOrThree = () => Math.floor(Math.random() * 3) + 1;  // function generates 1, 2 or 3
  let promise = new Promise((resolve, reject) => { // create promise
    setTimeout(() => {  // dummy async request function
      let value = oneTwoOrThree();  // get random number
      if (value % 2 == 0) {  // if number is even
        reject(Failure.from(value));  // resolve with Failure
      } else {
        resolve(Identity.from(value));  // otherwise, resolve with Identity
      }
    }, 2000);  // that delays resolving for 2 seconds
  });
  let result = await promise;
  return result;
}
export {asyncFun};