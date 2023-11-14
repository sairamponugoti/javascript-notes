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

# Strict Mode
- To write secure javascript
- mistyping a variable name results in an error instead of creating a new global variable
- deleting a variable or object is not allowed (delete x)
- "use strict";
- x=3 // This will cause error because x is not declared
- variables need to be declared before initializing

# Callback Functions
- Passing a function as an argument to another function, the function which we pass is called as callback function
- Callback functions are very powerful in JS, because they give access to asynchronous world to a synchronous single-threaded language

# EventListeners, Garbage Collection & removeEventListeners
- EventListeners are heavy, they occupy memory. So whenever we don't need them we should remove them

# Event Loop
- Browser --> JS Engine -> CallStack
- Browser has lot's of superpowers like localSTorage, timers, url, ability to communicate with servers etc...
- Inorder for JS Engine to communicate/access these super powers, browsers has WEB APIs
- WEB APIs
    - setTimeout()
    - DOM APIs
    - fetch()
    - local storage
    - console
    - location
- Browser wraps all these super powers (WEB APIs) into a GLobal Object called "WINDOW"
- Event Loop checks the Callback Queue if it finds anything in the queue it pushes to to CallStack to execute that.
- Suppose we have setTimeout(), the callback fn is registered with a timer, once the timer is finished, callback fn is pushed to CALLBACKQUEUE or TASKQUEUE -->EVENTLOOP (PUSHES CB FN) to --> CALLSTACK 
- Event Loop constantly monitors the CALLBACK QUEUE AND CALLSTACK
    - CALLSTACK <---(Push to) EVENTLOOP (Fetches from)<--- CALLBACK QUEUE
    - In case of Fetch() APIS and Promises there is a High Priority Queue called "MICROTASK QUEUE", callback fns in microtask queue will get higher priority and pushed to callstack for execution first then callback fns in CALLBACK QUEUE will get pushed.
    - MutationObservers also gets pushed to "MICROTASK QUEUE"
    - Only after all the tasks in "MICROTASK QUEUE" are finished execution then EventLoop checks the CALLBACK QUEUE

# JS Runtime Environment
    - To run JS anywhere we need JS Engine, APIs to communicate outside, Event Loop, Callback Queue, microtask queue
    - Every Browser has all these, browser contains JS runtime environment
    - Similarly Node.JS also has the JS runtime environment to run any piece of JS code
    - Node JS can run outside the Browser, Node JS is open source JS Runtime.
    - SpiderMonkey is the first JS Engine created by the JS creator himself (Brendan Eich)
    - Firefox - SpiderMonkey, Microsoft Edge - Chakra, Chrome, Node, Deno - V8
    - High Level code (Human readable) (JS code) ---> JS Engine (eg: V8 written in c++)
        - JS Engine takes the code and this code goes through 3 steps
            - Parsing --> Compilation --> Execution
                - Parsing phase - code converts to TOKENS - Syntax Parser (AST- Abstarct Syntax Parser)
                - Compilation Phase

# Functional Programming
- Higher order Functions
    - A function which takes another function as an input/argument or returns another function is Higher Order Function
    - First-class functions are JavaScript functions that can behave like variables. They can also be passed as arguments to higher-order functions.

# this keyword in JS
- https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/


# callback hell & Inversion of control
- callbacks are the super powerful way to handle asynchronous operations in JS.
- Issues with callbacks
    - callback hell - nested callbacks makes code unmaintainable and unreadable - Also called Pyramid of Doom
    - Inversion of Control - Loosing control of the program because we pause callback function into another function, we are giving control of one function to another


# Promises
- A promise is an object representing the eventual completion or failure of an asynchronous operation
- Three states Pending | FullFilled | Rejected
- Promise returns promise object and the promise objects are immutable.
- Promise chanining helps us getting out of Callback hell
- promises call the callback fn automatically once it returns and we have control back. It will call the callback fn only once
- Promises resolves Inversion of control issue

# Async-Await
- Async is a keyword that is used before a function to create Async function
- Async function always returns a promise
- we can either return a promise explicitly or if we return a normal value then async function wraps it 
in a promise and returns promise
- Async and Await combo is used to handle promises
- await is a keyword that can only be used inside a async function
- we use await keyword infront of a promise that needs to be resolved
- Async-Await is basically a syntactical sugar, more readable code

# Promise APIs
- promise.all([p1,p2,p3])
    - To handle parallel api calls
    - Takes in array of promises
    - It is Fail Fast
    - Make all the API calls at a time and waits for all of the promises to be resolved and returns array with responses
    - As soon as one of the promise gets rejected (results in an error) promise.all([p1,p2,p3]) will throw the error, suppose p2 gets rejected it returns error from p2 promise, it doesn't wait for p1, p3 (but they won't get cancelled) but p1, p3 can be resolved but it doesn't matter our promise.all gets rejected.
    - *** Promises are not cancellable

- promise.allSettled([p1,p2,p3])
    - waits for all promises to be settled whether they are success or failure(error) it doesn't matter
    - It returns responses [val1, err2(if p2 errored out), val3]

- promise.race([p1,p2,p3])
    - suppose p1 takes 3sec, p2 takes 1s, p3 takes 2s
    - After 1s it gives the value of promise p2
    - Basically it returns value of first settled promise
    - What if the first settled promise results in an error? it returns an error as result

- promise.any([p1,p2,p3])
    - very similar to promise.race() but this will wait for the first succesfully settled promise
    - If first settled promise results in an error it won't return the error it ignores it
    - It waits for the first succesfully settled promise
    - what if all the promises failed? the return result will be an AggregatedError [err1, err2, err3]


# Prototype & Prototypal Inheritance
- One object inheriting properties and methods of another object is Prototypal Inheritance
- Attaching a object to whatever we create like array, object, function, string, each of these will have some properties and methods that we can access by using dot operator
- let's consider arr as an array
    - arr.__proto__ --> Array.prototype
    - arr.__proto__.__proto__ --> Object.prototype
    - arr.__proto__.__proto__.__proto__ --> null  --> end of prototype chain
- Everything in JS (Array, String, Function, Object) is a Object

# Async & Differ Attributes
- Async and Differ are boolean attributes which are used along with script tags to load the external scripts efficiently into our web page
    - <script src=""> --> HTML parsing stops as soon as script tag is encountered and fetches that script and executes it and then html parsing starts back
    - <script async> --> scripts are fetched asynchronously while HTML parsing happening and once the script is fetched parsing stops and executes the script and coninues parsing
    - <script defer> --> scripts are fetched asynchronously while HTML parsing continues and once the HTML parsing is completed then scripts are executed
    - Async tag doesn't guarantee the order of execution of scripts, if we have scripts dependent on each other then Async tag won't work. We should use "Defer".
    - Suppose we have scripts that are independent (like Google Analytics, any other 3rd party scripts) of our code we can use "Async" attribute

# CORS - (Cross Origin Resource Sharing)
    - CORS is a mechanism which uses additional HTTP Headers to tell the browser whether a specific web app can share the resources with another web app
    - Both the Web Apps should have different origin. If they have same origin it is easy to share resources
    - If web apps have different origins then they need to follow CORS Mechanism
    - Before CORS mechanism, data from different Domains, SubDomains, different ports and differnet protocols (http, https) are not allowed
    - CORS Mechanism is a Web Standard that allows resource sharing in large scale web applications with Microservices architecture.
    - Suppose we have Domain1 and Domain2, Domain1 needs to post something to Domain2
    - Browser will make a Pre-Flight call (also called as OPTIONS call) to Domain2 before making actual call and Domain2 takes the responsibility of verifying whether this call is valid or not
    - If the call is valid then Domain2 sets some additional Headers and let the Client (Browser/Domain1) know that this is safe and then the Actual call is made
    - HTTP Headers
        - Access-Control-Allow-Origin : * --> Any Domain outside of that domain can access it
        - Access-Control-Allow-Methods --> we can restrict methods like GET, PUT, DELETE, POST

# Event Bubbling, Event Capturing (Event Trickling)
- Event Bubbling, event propagates upwards from child to parent (If we click on child, propagates child --> parent)
- Event Capturing is opposite, event propagates downwards from parent to child (If we click on child, propagates parent --> child)

# Event Delegation
- It is a technique to handle events in our web page in best possible way
- Event Delegation is a technique that utilizes Event Bubbling
- Using Event Delegation is a major Performance Improvement for our web page
- Instead of attaching the Event Handlers to all the elements (which eventually affects the performance) we can attach the event handler to the Parent Element of all the children this technique is Event Delegation
- PROS
    - Improves Memory eventually improves performance, because we attach a single event handler on parent
    - Writing less code
    - DOM Manipulation (If we have like infinite scrolling and the new childs gets added we don't need to add the event handlers to the newly added children)
- CONS/Limitations
    - All the events are not bubled up (events like blur, focus, resizing a window, scrolling)
    - If we use stopPropagation on any of the child element then Event Bubbling stops