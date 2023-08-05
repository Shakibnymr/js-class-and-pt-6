/*
In JavaScript, there are three ways to declare variables: `var`, `let`, and `const`. Each of these keywords has its own characteristics and use cases.

- `var`: This keyword is used to declare variables in the pre-ES6 era of JavaScript. Variables declared with `var` are either globally scoped or function/locally scoped. They can be re-declared and updated within the same scope¹².

- `let`: This keyword was introduced in ES6 (EcmaScript 2015) and is used to declare variables that can be reassigned. It is block-scoped, meaning that the variable is only accessible within the block in which it is declared¹.

- `const`: This keyword was also introduced in ES6 and is used to declare variables that cannot be reassigned. Like `let`, it is also block-scoped¹.

As a general rule, you should always declare variables with `const`. If you realize that the value of the variable needs to change, go back and change it to `let`. Use `let` when you know that the value of a variable will change. Use `const` for every other variable³. It's important to understand the differences between these keywords and their respective scopes, so you can use them correctly in your code.
*/