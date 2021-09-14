import 'mocha'
import {expect} from "chai";
import LinkedList from "./LinkedList.js";

describe('LinkedList', () => {
    let linkedList
    beforeEach(() => {
        linkedList = new LinkedList()
    })
    it('push',()=>{
        linkedList.push(1)
        linkedList.push(2)
        expect(linkedList.size()).to.equal(2)
    })
    it('insert',()=>{
        linkedList.push(1)
        linkedList.push(3)
        linkedList.insert(2,0)
        linkedList.insert(4,2)
        expect(linkedList.size()).to.equal(4)
        expect(linkedList.getElementAt(0)).to.equal(1)
        expect(linkedList.getElementAt(1)).to.equal(2)
        expect(linkedList.getElementAt(2)).to.equal(3)
        expect(linkedList.getElementAt(3)).to.equal(4)
    })
    it('remove',()=>{
        linkedList.push(1)
        linkedList.push(2)
        linkedList.push(3)
        linkedList.push(4)
        linkedList.remove(2)
        expect(linkedList.toString()).to.equal('1 -> 3 -> 4')
        linkedList.remove(0)
        expect(linkedList.toString()).to.equal('1 -> 3 -> 4')
        linkedList.remove(1)
        expect(linkedList.toString()).to.equal('3 -> 4')
    })
    it('indexOf',()=>{
        linkedList.push(1)
        linkedList.push(2)
        linkedList.push(3)
        linkedList.push(4)
        expect(linkedList.indexOf(0)).to.equal(-1)
        expect(linkedList.indexOf(1)).to.equal(0)
        expect(linkedList.indexOf(2)).to.equal(1)
        expect(linkedList.indexOf(3)).to.equal(2)
        expect(linkedList.indexOf(4)).to.equal(3)
    })
    it('removeAt',()=>{
        linkedList.push(1)
        linkedList.push(2)
        linkedList.push(3)
        linkedList.push(4)
        linkedList.removeAt(2)
        expect(linkedList.getElementAt(0)).to.equal(1)
        expect(linkedList.getElementAt(1)).to.equal(2)
        expect(linkedList.getElementAt(2)).to.equal(4)
    })
    it('toString',()=>{
        linkedList.push(1)
        linkedList.push(2)
        linkedList.push(3)
        linkedList.push(4)
        expect(linkedList.toString()).to.equal('1 -> 2 -> 3 -> 4')
    })
})
