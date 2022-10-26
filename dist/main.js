"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class UserBuilder {
    constructor(name) {
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
let kate = new UserBuilder("Kate");
let john = new UserBuilder("John");
kate.setAge(12).setLastName("Jill").setPhone("0781232");
john.setAge(32);
console.log(kate.build());
console.log(john.build());
