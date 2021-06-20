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
})