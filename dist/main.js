"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
}
class UserBuilder extends User {
    constructor(name) {
        super(name);
        this.user = new User(name);
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
    build() {
        return this.user;
    }
}
exports.default = UserBuilder;
