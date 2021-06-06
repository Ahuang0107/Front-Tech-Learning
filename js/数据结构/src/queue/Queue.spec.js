import 'mocha'
import {expect} from "chai";
import Queue from "./Queue.js";

describe('Queue', () => {
    let queue
    beforeEach(() => {
        queue = new Queue()
    })

    it('queue empty', () => {
        expect(queue.size()).to.equal(0)
        expect(queue.isEmpty()).to.equal(true)
        queue.enqueue(1)
        expect(queue.size()).to.equal(1)
        expect(queue.isEmpty()).to.equal(false)
    })
    it('enqueue elements', () => {
        queue.enqueue(1)
        expect(queue.size()).to.equal(1)
        queue.enqueue(2)
        expect(queue.size()).to.equal(2)
        queue.enqueue(3)
        expect(queue.size()).to.equal(3)
    })
    it('dequeue elements', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.size()).to.equal(3)
        expect(queue.peek()).to.equal(1)
        expect(queue.dequeue()).to.equal(1)
        expect(queue.peek()).to.equal(2)
        expect(queue.size()).to.equal(2)
    })
    it('implements FIFO logic', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.dequeue()).to.equal(1)
        expect(queue.dequeue()).to.equal(2)
        expect(queue.dequeue()).to.equal(3)
    })
    it('clears the stack', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.dequeue()).to.equal(1)

        queue.clear()
        expect(queue.dequeue()).to.equal(undefined)
    })
    it('returns toString primitive types', () => {
        expect(queue.toString()).to.equal('')

        queue.enqueue(1)
        expect(queue.toString()).to.equal('1')

        queue.enqueue(2)
        expect(queue.toString()).to.equal('1,2')

        queue.clear()
        expect(queue.toString()).to.equal('')

        queue.enqueue('el1')
        expect(queue.toString()).to.equal('el1')

        queue.enqueue('el2')
        expect(queue.toString()).to.equal('el1,el2')
    })
})