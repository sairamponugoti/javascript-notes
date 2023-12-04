# OOP

- Object Oriented Programming is a programming paradigm or a way of thinking about and structuring code.
- It is a specific style to implement certain principles.
- There are other paradigms such as Procedural, Functional and Logic.

# Object

- Collection of methods and properties
- building blocks and can interact with one another.
- Many ways to create objects in JS
  - Object Literals
  - Constructor functions
  - Classes
  - factories etc...

# Why OOP

- Makes code easier to read and understand
- Reuse Code
- Prevents sphagetti code
- Flexible and allows us to build complex applications

- Constructor Functions : Creates a blueprint for an object
- Prototypes: A way for objects to inherit properties and methods from another
- Classes: Another way to create a blueprint. "Syntactic Sugar" in JS, but part of many other languages
- Instances: Objects are instantiated using the blueprint (Constructor or Class)

# 4 Basic Principles of OOP

- Abstraction
  - Hiding all but the relevant parts of an object in order to reduce complexity and increase efficiency
  - Hiding the details of how something works but only know how to use
  - fetch(), addEventListener() - we have no clue how they work, we only know about the methods and use them
- Encapsulation
  - The process of wrapping up data and methods into a unit such as a class or a function.
  - Hide the properties or state of an object from outside
  - Encapsulation usually includes some kind of "Data Hiding"
- Inheritance
  - The process of inheriting the properties and methods from a parent class or constructor
  - Way to Re-use code and reduce redundancy
- Polymorphism
  - Way to perform a task in multiple forms, applied to functions or methods.
  - Allows the Objecy/Class to decide which form of the function to implement at compile time as well as run time
  - Compile-time polymorphism (Method Overloading)
  - Run-time polymorphism (Method Overriding)

# Prototype

- It is an object where additional methods and properties can be attached and shared across all the instances of it's constructor function
