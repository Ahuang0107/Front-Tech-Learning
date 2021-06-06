import 'mocha'
import {expect} from "chai";
import DeQue from "./DeQue.js";

describe('DeQue', () => {
    let deque
    beforeEach(() => {
        deque = new DeQue()
    })
    it('implements FIFO logic', () => {
        expect(deque.size()).to.equal(0)
    })
    it('implements double end queue logic', () => {
        deque.addBack(1)
        expect(deque.peekFront()).to.equal(1)
        deque.addBack(2)
        expect(deque.size()).to.equal(2)
        expect(deque.peekFront()).to.equal(1)
        expect(deque.peekBack()).to.equal(2)
        deque.addBack(3)
        deque.addFront(0)
        expect(deque.size()).to.equal(4)
        expect(deque.peekFront()).to.equal(0)
        expect(deque.peekBack()).to.equal(3)
        deque.addBack(4)
        deque.addBack(5)
        deque.addBack(6)
        deque.addFront(-1)
        deque.removeBack()
        deque.removeFront()
        expect(deque.size()).to.equal(6)
        expect(deque.peekFront()).to.equal(0)
        expect(deque.peekBack()).to.equal(5)
        deque.removeFront()
        deque.removeFront()
        deque.removeFront()
        deque.removeFront()
        expect(deque.size()).to.equal(2)
        expect(deque.peekFront()).to.equal(4)
        expect(deque.peekBack()).to.equal(5)
    })
})