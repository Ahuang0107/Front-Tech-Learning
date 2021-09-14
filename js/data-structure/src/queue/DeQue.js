import Queue from "./Queue.js";

export default class DeQue extends Queue {
    addFront(element) {
        this.items[this.lowestCount - 1] = element
        this.lowestCount--
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--
        return result
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
}