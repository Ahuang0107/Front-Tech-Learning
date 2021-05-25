const items = new WeakMap()

export default class WeakMapStack {
    constructor() {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    pop() {
        const s = items.get(this)
        return s.pop()
    }

    size() {
        return items.get(this).length
    }

    isEmpty() {
        return this.size() === 0
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return items.get(this)[items.get(this).length - 1]
    }

    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }

    toString() {
        return items.get(this).toString()
    }
}
