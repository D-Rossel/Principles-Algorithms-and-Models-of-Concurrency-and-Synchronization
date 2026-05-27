// ExampleC.ts
import { Worker, isMainThread, parentPort } from "node:worker_threads";

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));

  worker.postMessage("Hello worker");

  worker.on("message", (msg) => {
    console.log("From worker:", msg);
  });
} else {
  parentPort?.on("message", (msg) => {
    console.log("Received:", msg);
    parentPort?.postMessage("Hello main thread");
  });
}