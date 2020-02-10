# ASSESSMENT 1: INTRO TO JAVASCRIPT
## Tech Interview Practice Questions

>>>    Austin Majeski    <<<

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   




1. What is a function? Why would you use one?

  Your answer:

	- A function is a collection of statements organized under one name to do some complex task.  Typically having to take in some data for the input and creating something to output.

  Researched answer:

	 - In programming, a function is a named section of a program that performs a specific task.  I.e., a function is a type of procedure or routine.
	->  (does not have to be a complex task)




2. What is the difference between map and filter?

  Your answer:

	Map 	- Creates a copy of an array that has manipulated the data of said array in some way.

	Filter	- Creates a copy of an array that only includes data that falls under a certain criteria.


  Researched answer:

	Map	- 'map()' is a method in JavaScript called from an array that creates a new array by calling a specific function on each element present in the parent array. 
		->  Generally the map() method is used to iterate over an array and calling function on every element of array.
		->  By creating a new array, and not manipulating the data of the parent array, it is known as a 'non-mutating method.'

	Filter	- The 'filter()' method creates a new array with all elements that pass the test implemented by the provided function.
		->  It does not execute the function for array elements without values.
		->  It does not change the original array.  Again, i.e., a'non-mutating method.'




3. What is the difference between console.log() and return?

  Your answer:

	Log	- This built-in method with print whatever text or object to the console, if it is referenced within the parentheses.

	Return	- Used to return some value from a function.  If a variable is set to equal a function, the variable will then equal the very thing the function 'returns.'  This is the last thing a function will execute.  Once a function reaches this statement it will stop and essentially 'jump out' of that function.  


  Researched answer:

	Log	- For debugging purposes, you can use the console.log() method to display data.  It will output to the console related to where it is executed (e.g. in the Chrome console if run within Chrome for instance)

	Return	- The return statement stops the execution of a function and returns a value from that function.




4. In regards to functions, what is an argument?

  Your answer:

	- An argument is a value a function can take in and store in a locally to perform a task with.


  Researched answer:

	- Function arguments are the real values passed to (and received by) the function.

		Rules:	> JavaScript function definitions do not specify data types for parameters.
			> JavaScript functions do not perform type checking on the passed arguments.
			> JavaScript functions do not check the number of arguments received.

	Argument Object:
		- JavaScript functions have a built-in object called the "arguments object."
		- The argument object contains an array of the arguments used when the function was called (invoked).
		- Useful when a function is called with too many arguments.

			ex)  >      function     returnInput()     {    return    arguments[0]    }
				
				returnInput(  "SOMETHING"  )         >>         "SOMETHING"


	Notes:
		- If a function is called with missing arguments (less than declared), the missing values are set to: 'undefined.'

		- Arguments are Passed by Value
			-> If a function changes an argument's value, it does not change the parameter's original value.
			->  ( NO change outside the function. )

		- Objects and Arrays are Passed by Reference
			->  If a function changes an object or an array property, it changes the original value.
			-> ( CHANGES outside the function. )

		
	

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:

	- You'll have your 'Driver' and you 'Navagator'
	- The driver will be the one on the keyboard, and the navagator will work through the problems with the driver and catch any errors or potential problems they encounter.


  Researched answer:

	Steps:
		1.  Prepare
			- go through the problem on your own first in your head or on the keyboard.
			- know what tools you can use
		2.  Work closely together
			- good communication is key
			- be patient
		3.  Learn and facilitate learning
			- listen to one another
			- ^ you might learn a thing or two
			- if working with a slower/less experienced partner, take the time to explain your actions (and maybe what your thought proccess is)
			- if working with someone who is more experienced, ask questions whenever you don’t understand something.
		4.  Establish a rhythm
			- change roles every so often
			- let your partner take a swing at it
			- let the other take the wheel if they think of something they want to try




6. What is TDD? Describe the work flow associated with TDD.

  Your answer:

	- "Something" Driven Development.  It used widely when developing real-world applications.


  Researched answer:

	- "Test Driven Development"
	 ->  Test-driven development is a software development process that relies on the repetition of a very short development cycle.
	 ->  Requirements are turned into very specific test cases, then the code is improved so that the tests passes.

	1.  Break down a problem into small steps.  
	2.  Test those steps and log errors.  
	3.  Know what your results should be!  
	4.  Improve upon the solution until it can pass all tests.  
	5.  Work your way through the smaller tests, then work towards the bigger project.
	



7. What is something we did in class this week you found helpful?  

  Your answer:

	- Stand Up:	I think it was really helpful to have focused moment at the start of day.  It really helped me feel like we are all on the same page about things and gave a clear starting point to which the events of the day would unfold.  Otherwise I might feel like I had missed something or did not hear one thing the instructor(s) said.




## Looking Ahead: Terms for Next Week

Define the following terms to the best of your ability.

- React:	A framework that allows for a quicker and easier way of writting JavaScript code.

- Yarn:	A testing framework that makes testing very thorough by helping the user catch errors, find where they are, and know what they were expecting.

- React State:	I am unsure of what this is.  My guess it is for events?

- CRUD:	I am unfamiliar with this.

- this:	"This" is a keyword which refers to the object which it is called inside of.
