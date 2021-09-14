import 'mocha'
import {expect} from "chai";
import {search} from "./704 二分查找.js";

describe("704 二分查找", () => {
    it("", () => {
        const nums = [-1, 0, 3, 5, 9, 12], target = 9
        expect(search(nums, target)).to.equal(4)
    })
    it("", () => {
        const nums = [-1, 0, 3, 5, 9, 12], target = 2
        expect(search(nums, target)).to.equal(-1)
    })
})
