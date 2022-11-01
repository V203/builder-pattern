class User{
    private name:string
    constructor(name:string){
        this.name = name

    }
}


export default class UserBuilder extends User{
    private  user:any
    constructor(name:string){
        super(name)
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


    getName():string{
        return this.user.name
    }

    getAge():number{
        return this.user.age
    }
    

    getLastName():string{
        return this.user.lastName
    }

    getPhoneNumber():string{
        return this.user.phone
    }

    


    build(){
        return this.user
    }


}


