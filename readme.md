# Builder pattern

The builder pattern, which eliminates the need to create numerous parameters for a construct. What it actually does is have the ability to instantly create new properties.Creating and assembling the parts of a complex object directly within a class is inflexible. It commits the class to creating a particular representation of the complex object and makes it impossible to change the representation later independently from (without having to change) the class.

****

## Answers questions like

* How can a class (the same construction process) create different representations of a complex object?
* How can a class that includes creating a complex object be simplified?

## Features

Supports method chaining by having the methods return the "this" keyword

``` 
setLastName(lastName:string){
        this.user.lastName = lastName
        return this;// this line makes the method chainable 

    }

```
 

```
        let smith = new UserBuilder("smith");

        smith.setAge(34).setLastName("Davidson").setPhone("0596592").build(); <= method chaining take place at this line

        console.log(actual);// outputs : User { name: 'smith', age: 34, lastName: 'Davidson', phone: '0596592' }
```