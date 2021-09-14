import {defaultEquals} from "../utils/index.js";

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element) {
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    insert(element, position) {
        if (position < 0 || position > this.size()) throw Error("insert index out of range")
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            for (let i = 0; i < position; i++) {
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
        this.count++
    }

    getElementAt(index) {
        if (index < 0 || index > this.size()) throw Error("index out of range")
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current.element
    }

    remove(element) {
        if (!this.isEmpty()) {
            if (this.head.element == element) this.head = this.head.next
            else {
                let current = this.head
                while (current.next != null) {
                    if (current.next.element == element) {
                        current.next = current.next.next
                    }
                    current = current.next
                }
            }
        }
    }

    indexOf(element) {
        if (!this.isEmpty()) {
            if (this.head.element == element) return 0
            else {
                let count=0
                let current = this.head
                while (current.next != null) {
                    if (current.next.element == element) {
                        return count+1
                    }
                    current = current.next
                    count++
                }
            }
        }
        return -1
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head

            if (index === 0) {
                this.head = current.next
            } else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }

    isEmpty() {
        return this.count == 0
    }

    size() {
        return this.count
    }

    toString() {
        if (this.isEmpty()) return ''
        let objString = `${this.head.element}`
        let current = this.head.next
        while (current != null) {
            objString = `${objString} -> ${current.element}`
            current = current.next
        }
        return objString
    }

}

class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}
