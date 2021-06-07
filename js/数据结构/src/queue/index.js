import Queue from "./Queue.js";
import DeQue from "./DeQue.js";

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

export function palindromeChecker(string) {
    if (string === undefined || string === null || string.length === 0) {
        return false
    }

    const stringArray = string.split('')
    const queue = new DeQue()
    stringArray.forEach(char => {
        queue.enqueue(char)
    })
    while (queue.size() > 1) {
        if (queue.peekBack() === queue.peekFront()) {
            queue.removeBack()
            queue.removeFront()
        } else {
            return false
        }
    }
    return true
}