"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class UserBuilder extends User_1.default {
    constructor(name) {
        super(name);
        this.user = new User_1.default(name);
    }
    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setName(name) {
        this.user.name = name;
        return this;
    }
    setLastName(lastName) {
        this.user.lastName = lastName;
        return this;
    }
    getName() {
        return this.user.name;
    }
    getAge() {
        return this.user.age;
    }
    getLastName() {
        return this.user.lastName;
    }
    getPhoneNumber() {
        return this.user.phone;
    }
    build() {
        return this.user;
    }
}
exports.default = UserBuilder;
