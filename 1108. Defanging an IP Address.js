// 1108. Defanging an IP Address
// Easy

// 1225

// 1540

// Add to List

// Share
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"



var defangIPaddr = function(address) {
    let res=""
    for(let i=0;i<address.length;i++){
        if(address[i]==".")
        res = res + "[.]"
        else
        res = res + address[i]
    }
    return res
};

let address = "255.100.50.0"
console.log(defangIPaddr(address))