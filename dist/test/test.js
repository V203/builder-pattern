"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const main_1 = __importDefault(require("../main"));
"./main";
describe('My function', function () {
    it('s', function () {
        let john = new main_1.default("John");
        let actual = { User: { name: 'John' } };
        let expected = john.build();
        console.log(expected);
        assert_1.default.equal(expected, actual);
    });
});
