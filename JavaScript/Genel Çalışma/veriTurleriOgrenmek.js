//veri turu ogrenmek typeOf:
let price = 100
let stringPrice = "100"
let hasPassword = true

console.log(
    "price: ",
    typeof(price) //number
)
console.log(
    "stringPrice: ",
    typeof(stringPrice) //string
)
console.log(
    "hasPassword: ",
    typeof(hasPassword) //boolean
)

//string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: " ,number1,  typeof(number1)) //rakama cevrildi 11
 
let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2)) //rakama cevrildi 11

let number3 = "11px"
number3 = Number(number3)
console.log("number3: ", number3, typeof(number3)) //NaN oldu sayı olamaz!!

let number4 = "11.4px"
number4 = parseFloat(number4)
console.log("number4: ", number4, typeof(number4)) //11.4 olur

//number veri tipinden string'e donusturmek :
let number5 = 55
number5 = number5.toString()

console.log(number5,typeof(number5)) //string oldu