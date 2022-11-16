"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = __importDefault(require("./builder"));
let vuyisa = new builder_1.default("Vuyisa");
vuyisa.setAge(21);
console.log(vuyisa.getAge()); // prints:21
vuyisa.setLastName("Ndubela");
console.log(vuyisa.getLastName()); //prints :Ndubela
vuyisa.setAge(31);
console.log(vuyisa.getAge()); // and now it prints 31 not 21
vuyisa.setPhone("068123123");
console.log(vuyisa.getPhoneNumber()); //prints 068123123
