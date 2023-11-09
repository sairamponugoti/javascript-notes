# javascript-notes

- Javascript is  a Synchronous Single Threaded language.
- Javascript is a loosely typed language i.e.. it doesn't attach it's variables to any specific datatype.
- whenever a JS code is executed
    - Global Execution Context is Created
    - Global Window Object is created
    - "this" varaible is created
    - At Global level this === window 

# Execution Context
- Everything in JS happens inside an Execution Context
- Assume Execution Context as a container (box) and it has two parts to it
    1. Memory Component (Variable Environment) - where all the variables and functions are stored as key:value pairs
    2. Code Component ( Thread of Execution) - Executes code one line at a time

# CALLSTACK
- JS manages all the Execution Contexts created while execution code Using CALLSTACK
    - Global Execution Context is first pushed to CALLSTACK and thereafter for every new function invocation a new Execution Context is created and pushed to the CALLSTACK
- CALLSTACK maintians the order of execution of execution contexts

# Hoisting
    - Creation Phase/ Memory allocation Phase of Execution context

# Scope Chain, Scope & Lexical Environemnt
    - Scope is where you can access a specific variable or a function in our code
    - Scope is directly dependent on the Lexical Environment
    - Whenever a Execution Context is created a Lexical Env is created
    - Lexical Env is the Local Memory along with it's parents Lexical Env
    - Chain of all the Lexical environments and parent references is called Scope chain

# Temporal Dead Zone - let & const
    - Are let and const declarations Hoisted in JS - Yes they are hoisted but in a temporal dead zone
    - But they are hoisted differently than the "VAR" declarations
        - console.log(a) --> Reference Error: cannot access 'a' before initialization
        - console.log(b) --> undefined
        - let a = 10
        - var b = 100
    - let and Const are hoisted but instead of allocating memory in Global space they are allocated a different Memory space and that space is not accesible before intitalization
    - Temporal Dead Zone is the time since when the let variable is Hoisted and till the let variable is initialized
        time b/w these two is the Temporal Dead Zone
    - In above example "b" is attached to window object and can be accessed like window.b or this.b
    - whereas "a" is not attached to window object (window.a is undefined)
    - We cannot Re-Declare same let variable
        -let a = 10
        -let a = 100
        - the above will throw Syntax Error: Identifier "a" has already been declared
        - when there are "SYNTAX ERRORS" JS code doesn't run any code
    - let can be declared and inititlaized later, But Const should be decalred and initialized.
        - let a;
        - a = 10; // Valid
        - const b;
        - b= 100; // not valid we get SYNTAX ERROR: Missing initializer in const declaration
        - const c = 100;
        - c=1000 // TYPE ERROR: Assignment to constant variable

# Function Scope, Block Scope, Shadowing
- VAR is function scoped
- LET & CONST are Block Scoped
- If we shadow a "let" variable inside a block with "var" then it is Illegal Shadowing and we cannot do it. Thows Syntax Error
- we can shadow let using let
- we cdn shadow var using let

# Closures
- It is a function bind with it's Lexical Environment / Function along with it's Lexical Scope
- It doesn't matter how many nested levels we have, deeply nested function will have access to it's parents lexical scope
- The nested function REMEMBERS THE REFERENCES TO THE VARIABLES OF IT'S LEXICAL SCOPE
- Uses of Closures:
    - Module Design Pattern
    - Currying
    - Functions like once
    - memoize
    - Data hiding and encapsulation
    - maintaining state in async world
    - setTimeouts
    - Iterators
- Disadvantages of Closure
    - Over Using of closures can cause over consumption of Memory, every time a closure is formed it consumes memory
    - Because of lot of closures the variables are not garbage collected till the program execution expires and consumes memory
    - It can cause memory leaks because the variables are kept for a long period of time
# Garbage Collector
    - It's a program in the browser/JS Engine which frees up the unutilized memory
    - Because Javascript is a high level language it allocates memory for variables by itself we won't assign memory
    - Whenever there are unused variables in the memeory Garbage Collector will delete those variables from memory

# Anonymous Functions, First Class Functions
    - Anonymous functions
    - First Class Functions
    - Higher Order Functions
    - Arrow Functions
    - Pure Functions
    - Impure Functions
    
    - what is Function Statement vs Function Expression vs Function Declaration ??