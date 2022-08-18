//0 ve 1'i anlamak :
let isActive = false //0
isActive = true //1
console.log(isActive) //true

let userName;
let isUserName = Boolean(userName) //false
console.log(isUserName)

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

userName ="user"
console.log("user Name:", Boolean(userName))


//0, -0, null, false, NaN, undefined, ("") : 
Boolean(0) //false
Boolean(-0) //false
Boolean(0) //false
Boolean(-0.1) //true
Boolean(0 === 0) //true