import assert from 'assert';

import UserBuilder from '../builder'; 


describe('My function', function () {
    it('Set the user as john and get the users name.', () => {

        let john = new UserBuilder("John");
        let actual = john.getName()
        let expected = "John"
        
        assert.strictEqual(expected, actual);


    });
    
    it("We should be able set and get the users age",()=>{
        let kate = new UserBuilder("Kate");
        kate.setAge(23);
        let expected = 23;
        let actual = kate.getAge()
        assert.strictEqual(expected,actual)

    })

    it("We should be able set and get the users Phone number",()=>{
        let kate = new UserBuilder("Kate");
        kate.setAge(23);
        kate.setPhone("067234343")
        let actual = kate.getPhoneNumber();
        let expected = "067234343";
        assert.deepStrictEqual(expected,actual)
        

    })


    it("We should be able to get and set the last name of the user.",()=>{
        let pete = new UserBuilder("Pete");
        pete.setLastName("Jones");
        let actual = pete.getLastName();
        let expected = "Jones";


        assert.strictEqual(expected,actual);

    })

    it("Should try to get last name which we wont set and expect to return undefined.",()=>{
        let smith = new UserBuilder("smith");

        let expected = undefined;
        
        let actual = smith.getLastName();
                
        assert.strictEqual(expected,actual);
    })

});