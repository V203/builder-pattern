"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const builder_1 = __importDefault(require("../builder"));
describe('My function', function () {
    it('Set the user as john and get the users name.', () => {
        let john = new builder_1.default("John");
        let actual = john.getName();
        let expected = "John";
        assert_1.default.strictEqual(expected, actual);
    });
    it("We should be able set and get the users age", () => {
        let kate = new builder_1.default("Kate");
        kate.setAge(23);
        let expected = 23;
        let actual = kate.getAge();
        assert_1.default.strictEqual(expected, actual);
    });
    it("We should be able set and get the users Phone number", () => {
        let kate = new builder_1.default("Kate");
        kate.setAge(23);
        kate.setPhone("067234343");
        let actual = kate.getPhoneNumber();
        let expected = "067234343";
        assert_1.default.deepStrictEqual(expected, actual);
    });
    it("We should be able to get and set the last name of the user.", () => {
        let pete = new builder_1.default("Pete");
        pete.setLastName("Jones");
        let actual = pete.getLastName();
        let expected = "Jones";
        assert_1.default.strictEqual(expected, actual);
    });
    it("Should try to get last name which we wont set and expect to return undefined.", () => {
        let smith = new builder_1.default("smith");
        let expected = undefined;
        let actual = smith.getLastName();
        assert_1.default.strictEqual(expected, actual);
    });
});
