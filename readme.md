# Builder pattern

The builder pattern, which eliminates the need to create numerous parameters for a construct. What it actually does is have the ability to instantly create new properties.Creating and assembling the parts of a complex object directly within a class is inflexible. It commits the class to creating a particular representation of the complex object and makes it impossible to change the representation later independently from (without having to change) the class.

****

## Answers questions like

* How can a class (the same construction process) create different representations of a complex object?
* How can a class that includes creating a complex object be simplified?

## Features

Supports method chaining by having the methods return the "this" keyword

```
it("We should gracefully get all the users details handle an error",()=>{
        let smith = new UserBuilder("smith");

        let expected = undefined;
        
        let actual = smith.setAge(34).setLastName("Davidson").setPhone("0596592") .build();
        console.log(actual);// outputs : User { name: 'smith', age: 34, lastName: 'Davidson', phone: '0596592' }
        
        
        assert.strictEqual(expected,actual);
    })
```