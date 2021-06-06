import 'mocha'
import {expect} from "chai";
import {hotPotato} from "./index.js";

describe('Queue Usage', () => {
    it('hotPotato', () => {
        const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
        const result = hotPotato(names, 7)
        expect(result.winner).to.equal('John')
    })
})