class User{
    private name:string
    constructor(name:string){
        this.name = name

    }
}

class UserBuilder {
    private  user:any
    constructor(name:string){
    this.user = new User(name)

    }


    setPhone(phone:string){
        this.user.phone = phone;
        return this
    }

    setAge(age:number){
        this.user.age = age
        return this

    }

    setName(name:string){
        this.user.name = name
        return this
    }

    setLastName(lastName:string){
        this.user.lastName = lastName
        return this

    }


    build(){
        return this.user
    }


}


let kate = new UserBuilder("Kate");
let john = new UserBuilder("John");
kate.setAge(12).setLastName("Jill").setPhone("0781232")
john.setAge(32)
console.log(kate.build());

console.log(john.build());

