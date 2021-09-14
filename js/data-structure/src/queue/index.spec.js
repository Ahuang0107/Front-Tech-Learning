import 'mocha'
import {expect} from "chai";
import {hotPotato, palindromeChecker} from "./index.js";

describe('Queue Usage', () => {
    it('hotPotato', () => {
        const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
        const result = hotPotato(names, 7)
        expect(result.winner).to.equal('John')
    })
    it('palindromeChecker', () => {
        expect(palindromeChecker('a')).to.equal(true)
        expect(palindromeChecker('madam')).to.equal(true)
        expect(palindromeChecker('racecar')).to.equal(true)
        expect(palindromeChecker('raccar')).to.equal(true)
        expect(palindromeChecker('racecer')).to.equal(false)
        expect(palindromeChecker('raccer')).to.equal(false)
        expect(palindromeChecker('')).to.equal(true)
    })
})