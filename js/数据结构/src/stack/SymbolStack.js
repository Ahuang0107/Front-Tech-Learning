const _items = Symbol('stackItems')

export default class SymbolStack {
    constructor() {
        this[_items] = []
    }

    push(element) {
        this[_items].push(element)
    }

    pop() {
        return this[_items].pop()
    }

    size() {
        return this[_items].length
    }

    isEmpty() {
        return this.size() === 0
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this[_items][this[_items].length - 1]
    }

    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this[_items][0]}`
        for (let i = 1; i < this[_items].length; i++) {
            objString = `${objString},${this[_items][i]}`
        }
        return objString
    }
}
