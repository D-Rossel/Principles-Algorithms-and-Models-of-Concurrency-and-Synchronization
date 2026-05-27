function task(name: string, delay:number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name, " finished");
            resolve();
        }, delay);
    });
}

async function main() {
    await Promise.all([
        task("Task A", 1000),
        task("Task B", 500)
    ]);

    console.log("All tasks done")
}

main();
