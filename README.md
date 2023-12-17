Question Answer:

Question#01. What are some benefits of using TypeScript over JavaScript in a project?
Answer: TypeScript is a superset of JavaScript that means any valid JavaScript code is also a valid TypeScript code. So it is easy to adopt TypeScript in an existing JavaScript project.  TypeScript offers several benefits, like- static typing, which allows us to catch type-related errors during development rather than at runtime. Beside this It supports the use of explicit types that provides better documentation for functions and variables. This also includes features like auto-completion, refactoring, and improved navigation within the codebase. As projects grow in size, maintaining and refactoring code can become challenging. The static typing helps in larger codebases, making easier to refactor and modify code without introducing unexpected errors. TypeScript includes features from OOP, such as interfaces and classes that provides clear contracts for functions and objects. 
Question# 02. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.
Answer: The optional chaining (?.) and nullish coalescing (??) operators in TypeScript  are features introduced to handle situations of null or undefined.
Optional Chaining (?.): The optional chaining operator (?.)  is used to simplify the process of accessing properties on objects when the properties might be null or undefined. And also prevents runtime errors.
Example:
interface Person {
  name?: string;
  address?: {
    street?: string;
    city?: string;
  };
}

const person: Person = {};

const city= person.address?.city; 
Nullish Coalescing (??):
The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined. It differs from the logical OR ( || ) operator. It specifically checks for null or undefined, not just falsy values.
Example:
Const value = “city”
Const myTown = person.address.city ?? value
Both optional chaining and nullish coalescing operators enhance the readability of code, especially dealing with absent values.

Question# 03. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?
Async-await make the code asynchronous and improve readability. It avoids callback nesting and reduces the likelihood of callback-based pyramid code. It allows to write asynchronous code in a more sequential manner. This is especially beneficial to perform multiple asynchronous operations in a specific order. It simplifies debugging compared to callback-based code. It makes the code cleaner and more concise then using callbacks or chaining Promises.

Question#04.  How can you use TypeScript's enums, and what are their advantages?
Enums is the short form of enumerations. Which are powerful features in TypeScript. They also allow to define a set of named constants that make codes more readable and understandable by using descriptive names instead of magic numbers or strings. They help to maintain code consistency and prevent errors. Enums also improve type safety by providing a compile-time check for the values assigned to variables and function parameters. It serves as form of documentation within code and clarify values.
Question #05.  Explain the role of type guards in TypeScript and provide an example of a custom type guard.
In TypeScript, type guards are a way to narrow down the type of a variable in a certain code block. They are particularly useful in union types or conditional types, where a variable can have multiple possible types. Typeof and instanceof are two defferent types of type guard.

Question#06.  Can you give an example of how to use "readonly" properties in TypeScript?
Answer: In TypeScript, “readonly” modifier is used to make properties of a class or object immutable or unchangeable. Once a property is marked as “readonly”, its value cannot be changed. This can be useful for creating objects with fixed values or ensuring certain properties remain constant.

Question#07.  Explain what a union type is in TypeScript and provide an example of its usage.
In TypeScript;  a union type allows a variable or parameter to hold values of multiple types. It is denoted using the | (pipe) symbol between the types. This means that the variable can store values of any of the specified types. Union types provide flexibility and particularly useful when a function or variable can accept different data types.

