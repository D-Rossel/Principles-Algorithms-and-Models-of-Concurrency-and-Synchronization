let counter = 0;

async function incrementCounter() {
    const current = counter;           // Alle 10 Tasks lesen counter = 0
    await new Promise(r => setTimeout(r, 0)); // Alle pausieren
    counter = current + 1;             // Alle 10 Tasks setzen counter = 0 + 1 = 1
    console.log(counter);              // Alle loggen counter = 1
}

async function run() {
    await Promise.all(
        Array.from({length: 10}, () => incrementCounter())
    );
    console.log("Final counter:", counter);
}

run();