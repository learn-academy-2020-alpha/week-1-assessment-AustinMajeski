// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended


// Programmed by Austin Majeski

///  - - -  - - -  - - -  - - -  - - -
console.log("\n------------------------------------")
///  - - -  - - -  - - -  - - -  - - -


///  === === === === === === === === === === ===
///  === === === === === === === === === === ===
/*

        The Class created here is only for
        colorful text.  It is irrelevant to
        the overall function of the program.
		
*/
///  === === === === === === === === === === ===
///  === === === === === === === === === === ===


///  - - -  - - -  - - -  - - -  - - -
class TextFormat{
    constructor(text="", colorText=-1, colorBackground=-1){
        this.text = text
        this.textColor = colorText
        this.backgroundColor = colorBackground
    }

    addText(str=this.text, colorText=this.textColor, colorBackground=this.backgroundColor)
    { return new TextFormat(this.text+=str, colorText, colorBackground) }
    static addText(str, colorText=-1, colorBackground=-1)
    { return new TextFormat(str, colorText, colorBackground) }


    colorText(color, str=this.text)
    { return new TextFormat(str, color, this.backgroundColor) }
    static colorText(color, str="")
    { return new TextFormat(str, color, this.backgroundColor) }


    colorBackground(color, str=this.text)
    { return new TextFormat(str, this.textColor, color) }
    static colorBackground(color, str="")
    { return new TextFormat(str, this.textColor, color) }


    toString(){
        let outputString = ""
        if (this.backgroundColor > -1 && this.backgroundColor < 256)
            { outputString += TextFormat.ESC+"[48;5;"+this.backgroundColor+"m" }
        if(this.textColor > -1 && this.textColor < 256)
            { outputString += TextFormat.ESC+"[38;5;"+this.textColor+"m" }
        return outputString += this.text + TextFormat.ESC+"[0m"
    }

    broadcast()
    { console.log(this.toString()) }

    extend(c=1){
        for(let s=0; s<c; s++) { this.text+=" " }
        return new TextFormat(this.text, this.textColor, this.backgroundColor)
    }

    static printNewLines(n=1){
        for(let nln=0; nln<n; nln++)
        {console.log("")}
    }
}
// Constants
TextFormat.ESC = String.fromCharCode(033)
///  - - -  - - -  - - -  - - -  - - -


// Tests
/*
let ape = "A Gorila"
console.log(TextFormat.addText(ape).addText(" is around here somewhere...").colorBackground(105).toString())
console.log(new TextFormat(ape,-1,105).toString())
TextFormat.colorBackground(93,"Some more text!").broadcast()
TextFormat.addText("  Is This Working Right?  ",15,88).broadcast()
*/
///  - - -  - - -  - - -  - - -  - - -
///  === === === === === === === === === === ===
///  === === === === === === === === === === ===






///  - - -  - - -  - - -  - - -  - - -
///         Assessment Start
///  - - -  - - -  - - -  - - -  - - -


// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const determineBoiling = tempIn =>{
    if(tempIn<212)
    { return `${tempIn} is below boiling point.` }
    else if(tempIn>212)
    { return `${tempIn} is above boiling point.` }
    return `${tempIn} is at the boiling point.`
}
TextFormat.printNewLines(3)
TextFormat.addText("  - determineBoiling:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(32).broadcast()
TextFormat.addText(determineBoiling(`  ${temp1}`),232,255).extend(4).broadcast()
TextFormat.addText(determineBoiling(`  ${temp2}`),232,255).extend(3).broadcast()
TextFormat.addText(determineBoiling(`  ${temp3}`),232,255).extend(2).broadcast()
TextFormat.addText("").colorBackground(255).extend(32).broadcast()
// console.log(determineBoiling(temp1))
// console.log(determineBoiling(temp2))
// console.log(determineBoiling(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
var myListTest1 = [3, "dog", 7, 0, true, 6, -9, "buffalooo"]

const multiplyByFive = numArrayIn =>{
    let lengthIn = numArrayIn.length
    for(let n=0; n<lengthIn; n++){
        if(typeof numArrayIn[n] === "number")
        { numArrayIn[n] *= 5 }
    }
}
multiplyByFive(myNumbers1)
multiplyByFive(myListTest1)

TextFormat.printNewLines(3)
TextFormat.addText("  - multiplyByFive:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(41).broadcast()
TextFormat.addText(`  [ ${myNumbers1} ]`,232,255).extend(21).broadcast()
TextFormat.addText(`  [ ${myListTest1} ]`,232,255).extend(2).broadcast()
TextFormat.addText("").colorBackground(255).extend(41).broadcast()
/*
console.log("\n\n\n  - multiplyByFive:")
multiplyByFive(myNumbers1);     console.log(myNumbers1)
multiplyByFive(myListTest1);    console.log(myListTest1)  // alternate test  >> irrelevant
*/

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const multipyByFiveMap = numArrIn =>
{ return numArrIn.map(item => item*=5) }

TextFormat.printNewLines(3)
TextFormat.addText("  - multipyByFiveMap:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(24).broadcast()
TextFormat.addText("   [ ").addText(multipyByFiveMap(myNumbers2),232,255).addText(" ]").extend(3).broadcast()
TextFormat.addText("").colorBackground(255).extend(24).broadcast()
// console.log("\n\n\n  - multipyByFiveMap:")
// console.log(multipyByFiveMap(myNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const removeVowels = stringIn =>{
    let vowelsList = ['a','e','i','o','u'] // and sometimes 'y'   ; D
    return stringIn.split("").filter(letter => vowelsList.indexOf(letter.toLowerCase()) < 0 ).join("")
}
TextFormat.printNewLines(3)
TextFormat.addText("  - removeVowels:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(20).broadcast()
TextFormat.addText("   ").addText(removeVowels(stringWithVowels1),232,255).extend(4).broadcast()
TextFormat.addText("   ").addText(removeVowels(stringWithVowels2),232,255).extend(8).broadcast()
TextFormat.addText("").colorBackground(255).extend(20).broadcast()
// console.log("\n\n\n  - removeVowels:")
// console.log(removeVowels(stringWithVowels1))
// console.log(removeVowels(stringWithVowels2))


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const removeVowelsAndDetermineString = stringIn =>{
    if(typeof stringIn === "string"){
        let vowelsList = ['a','e','i','o','u'] // and sometimes 'y'   ; D
        return stringIn.split("").filter(letter => vowelsList.indexOf(letter.toLowerCase()) < 0 ).join("")
    }
    return ["Wrong input detected in 'removeVowelsAndDetermineString':",">  input not a string."]
}
let rvads1 = removeVowelsAndDetermineString(notAString1)
let rvads2 = removeVowelsAndDetermineString(notAString2)
TextFormat.printNewLines(3)
TextFormat.addText("  - removeVowelsAndDetermineString:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(63).broadcast()
TextFormat.addText("   "+rvads1[0],232,255).extend(3).broadcast()
TextFormat.addText("        "+rvads1[1],232,255).extend(33).broadcast()
TextFormat.addText("").colorBackground(255).extend(63).broadcast()
TextFormat.addText("   "+rvads2[0],232,255).extend(3).broadcast()
TextFormat.addText("        "+rvads2[1],232,255).extend(33).broadcast()
TextFormat.addText("").colorBackground(255).extend(63).broadcast()
// console.log("\n\n\n  - removeVowelsAndDetermineString:")
// console.log(removeVowelsAndDetermineString(notAString1))
// console.log(removeVowelsAndDetermineString(notAString2))


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const getCats = toonArrIn =>
{ return toonArrIn.filter(item => item.animal === "cat") }

let catsHere = getCats(toonimals)
let catsOut1 = `[ { name: \"${catsHere[0].name}\", animal: ${catsHere[0].animal} }, `
let catsOut2 = `  { name: \"${catsHere[1].name}\", animal: ${catsHere[1].animal} }, `
let catsOut3 = `  { name: \"${catsHere[2].name}\", animal: ${catsHere[2].animal} } ]`

TextFormat.printNewLines(3)
TextFormat.addText("  - getCats:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(42).broadcast()
TextFormat.addText("   ").addText(catsOut1,232,255).extend(4).broadcast()
TextFormat.addText("   ").addText(catsOut2,232,255).extend(2).broadcast()
TextFormat.addText("   ").addText(catsOut3,232,255).extend(5).broadcast()
TextFormat.addText("").colorBackground(255).extend(42).broadcast()
// console.log("\n\n\n  - getCats:")
// console.log(getCats(toonimals))


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const getAntiCats = toonArrIn =>
{ return toonArrIn.filter(item => item.animal !== "cat") }

let catsHerea = getAntiCats(toonimals)
let catsOuta1 = `[ { name: \"${catsHerea[0].name}\", animal: ${catsHerea[0].animal} }, `
let catsOuta2 = `  { name: \"${catsHerea[1].name}\", animal: ${catsHerea[1].animal} }, `
let catsOuta3 = `  { name: \"${catsHerea[2].name}\", animal: ${catsHerea[2].animal} } ]`

TextFormat.printNewLines(3)
TextFormat.addText("  - getAntiCats:   ").colorText(15).colorBackground(88).broadcast()
TextFormat.addText("").colorBackground(255).extend(40).broadcast()
TextFormat.addText("   ").addText(catsOuta1,232,255).extend(1).broadcast()
TextFormat.addText("   ").addText(catsOuta2,232,255).extend(2).broadcast()
TextFormat.addText("   ").addText(catsOuta3,232,255).extend(5).broadcast()
TextFormat.addText("").colorBackground(255).extend(40).broadcast()
// console.log("\n\n\n  - getAntiCats:")
// console.log(getAntiCats(toonimals))









///  - - -  - - -  - - -  - - -  - - -
console.log("\n")
///  - - -  - - -  - - -  - - -  - - -
//EOF