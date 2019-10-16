/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: This is the default for the .this keyword. Gives undefined if using strict mode
* 2. Implicit Binding: the 'this' keyword refers to the object to the left of the dot when the function is invoked
* 3. Explicit Binding : when you are explicitly telling what the 'this' keyword is referring to by passing in an arguement.
* 4. New Binding: the 'new' keyword creates a new object that the 'this' keyword then points to. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function maybe(){
    console.log(this.its);
}
var its = 'Maybelline';
maybe();

// Principle 2

// code example for Implicit Binding
const maybe1 = {
    shes: 'born with it',
    its: 'Maybelline2',
    probably: function(){
        console.log(this.its);
    }
}

maybe1.probably();

// Principle 3

// code example for New Binding
function Maybe(is){
    this.its = is;
}
myMaybe = new Maybe('Maybelline3');
console.log(myMaybe.its);

// Principle 4

// code example for Explicit Binding
function maybe() {
    console.log(this.its);
}

const shes = {
    its: 'natural'
}
const itIs = {
    its: 'Maybelline4'
}

maybe.call(itIs);


//I know, I know. The Maybelline theme kind of fell apart, but I'd gone too far to just give up on it.

//for spacing on the console.
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');