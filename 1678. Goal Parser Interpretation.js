// 1678. Goal Parser Interpretation
// Easy

// 848

// 68

// Add to List

// Share
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

 

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
 

// Constraints:

// 1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.


// Accepted
var interpret = function(cmd) {
    let res=[]
    for(let i=0;i<cmd.length;i++){
        if(cmd[i]=="(" && cmd[i+1]==")"){
            res.push("o")
        }else if(cmd[i]=="(" && cmd[i+1]=="a" && cmd[i+2]=="l" && cmd[i+3]==")"){
            res.push("al")
        }else{
            if(cmd[i]=="G")
            res.push("G")
        }
    }
    return res.join("")

};  

let cmd = "(al)G(al)()()G"
console.log(interpret(cmd))