import { Mutex } from "async-mutex";

const mutex = new Mutex();
let counter = 0;

async function incrementCounter() {
    await mutex.runExclusive(async () => {
        const current = counter;           // 1. Counter lesen
        await new Promise(r => setTimeout(r, 0)); // 2. PAUSIEREN (Race Point!)
        counter = current + 1;             // 3. Counter schreiben (mit Mutex geschützt!)
        console.log(counter);              // 4. Logging
    });
}

async function run() {
    await Promise.all(
        Array.from({length: 10}, () => incrementCounter())
    );
    console.log("Final counter:", counter);
}

run();