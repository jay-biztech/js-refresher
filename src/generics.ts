const names: Array<string> = ['Jay', 'Kishan']; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
    // resolve(10);
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});
