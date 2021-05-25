import 'mocha'
import {expect} from "chai";
import {decimalToBinary} from "./index.js";

describe('Stack Usage', () => {
    it('decimalToBinary', () => {
        expect(decimalToBinary(0)).to.equal('0')
        expect(decimalToBinary(1)).to.equal('1')
        expect(decimalToBinary(2)).to.equal('10')
        expect(decimalToBinary(3)).to.equal('11')
        expect(decimalToBinary(4)).to.equal('100')
        expect(decimalToBinary(5)).to.equal('101')
        expect(decimalToBinary(6)).to.equal('110')
        expect(decimalToBinary(7)).to.equal('111')
        expect(decimalToBinary(8)).to.equal('1000')
        expect(decimalToBinary(9)).to.equal('1001')
        expect(decimalToBinary(10)).to.equal('1010')
    })
})
