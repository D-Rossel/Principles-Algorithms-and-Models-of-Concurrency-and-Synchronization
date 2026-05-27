import { Mutex } from "async-mutex";

const mutex = new Mutex();
let counter = 0;

async function increment() {
  await mutex.runExclusive(async () => {
    const current = counter;
    await new Promise(r => setTimeout(r, 1));
    counter = current + 1;
  });
}

async function main() {
  await Promise.all(Array.from({length: 1000}, () => increment()));
  console.log(counter); // 1000
}

main();