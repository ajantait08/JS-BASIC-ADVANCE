const accountId = 144553 // variables whose variables cannot be changed
let accountEmail = "ajanta@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2
console.log(accountId);
accountEmail = "ag@ag.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// Prefer not to use var because of the issue of block scope and functional scope

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
