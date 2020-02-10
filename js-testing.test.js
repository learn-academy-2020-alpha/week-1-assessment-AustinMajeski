// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


//////
/*
 function hello(){
     return "random string"
 }

 describe("hello", () => {
     test ("returns a random string", () => {
         expect(hello()).toBe("random string")
     })
})
*/
/////






// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

const addThemUp = (num1,num2) =>{
		return num1+num2
}
/*
describe("addThemUp", () => {
	test ("Takes two numbers as arguments and returns the sum.", () => {
		expect().toBe(A+B)
	})
})
*/


// --------------------1b) See the test fail. THEN write the code to make the test pass.

let [A,B] = [5,7]
 describe("addThemUp", () => {
     test ("Takes two numbers as arguments and returns the sum.", () => {
         expect(addThemUp(A,B)).toBe(A+B)       //Added 'addThemUp(A,B)' to 'expect()' last
     })
})



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

const triangleArea = (base,height) =>{
	return (base*height)/2
}
/*
describe("triangleArea", () => {
	test ("Takes the base and the height of a triange and returns the area.", () => {
		expect().toBe((A*B)/2)
	})
})
*/


// --------------------2b) See the test fail. THEN write the code to make the test pass.

 describe("triangleArea", () => {
     test ("Takes the base and the height of a triange and returns the area.", () => {
         expect(triangleArea(A,B)).toBe((A*B)/2)       //Added 'triangleArea(A,B)' to 'expect()' last
     })
})
