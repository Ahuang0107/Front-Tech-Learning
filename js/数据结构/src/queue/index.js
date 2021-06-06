import Queue from "./Queue.js";

export function hotPotato(elementList, num) {
    const queue = new Queue()
    const eliminatedList = []
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue())
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}