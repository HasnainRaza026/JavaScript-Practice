// Ternary Operator
const a = 0 ? 'truthy' : 'falsy'
console.log(a)
/*
Ternary Operatore is a simple shortcut for if statemnet. It works as follow:
'a = condition ? val1 : val2'

val1 will be sved in the variable a if condition is true and val2 will be save in the varaible a if condition is false.

It is used when we need to save the result in a varable or had to do quick check
*/


// Guard Operator
const b = 5 && 'hello'
console.log(b)
/*
Guard Operatore is a simple shortcut for if statemnet. It works as follow:
'b = condition && val'

val will be sved in the variable b if condition is true otherwise the condition (truthy or false value) will be saved in the variable.

It is used when we need to save the result in a varable or had to do quick check
*/


// Default Operator
const c = 0 || 'hi'
console.log(c)
/*
Default Operatore is a simple shortcut for if statemnet. It works as follow:
'c = condition || val'

val will be sved in the variable c if condition is false otherwise the condition (truthy or false value) will be saved in the variable.

It is used when we need to save the result in a varable or had to do quick check
*/