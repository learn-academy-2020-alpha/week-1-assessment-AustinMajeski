
//  Test 1
function BigBoi() {
	return arguments[0]
}
console.log("");	console.log(BigBoi("It passed through."))


// Test 2
function printAllArgs() {
	let argLength = arguments.length
	for(let v=0; v<argLength; v++)
	{ console.log(arguments[v]) }
}
console.log("");	printAllArgs(12,54,78,"we are the champions",true,false,87,98,"Frogs",12.1598)


// Test 3
function passUndefined()
{ return arguments[0] }
console.log("");	console.log(passUndefined());	


// Test 4
const myBoi = () =>{
		return arguments[0] + arguments[1]		// not allowed in arrow functions
}
console.log("");	console.log(myBoi(5,6));	
	// arrow functions are not reccomended to be used as methods














console.log("");	console.log("")
//EOF