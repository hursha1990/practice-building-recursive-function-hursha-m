function reverseString(str) {
    // Base Case: If the string is empty or has only one character
    if (str.length <= 1) {
        return str;
    }

    // Recursive Case: Last character + reversed remaining string
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}
console.log(reverseString("hello"));       // Outputs: "olleh"
console.log(reverseString("recursion"));   // Outputs: "noisrucer"
console.log(reverseString("a"));           // Outputs: "a"
console.log(reverseString(""));            // Outputs: ""
console.log(reverseString("my pumpkin"));  // Outputs: "nikpmup ym"
console.log(reverseString("launchcode"));  // Outputs: "edochcnual"
console.log(reverseString("welcome"));     // Outputs: "emoclew"
console.log(reverseString("happy"));       // Outputs: "yppah"    

