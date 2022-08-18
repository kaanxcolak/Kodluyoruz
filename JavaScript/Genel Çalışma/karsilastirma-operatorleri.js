//Karsilastirma Operatoleri ve Mantıksal Operatorler

let price = "100"
let user = "hakan"
//== Eşitse

console.log(price == 1) //false
console.log(price == 100) //true

// === Hem Degeri Hem de Türü Esitse
console.log( price === 1)  //false
console.log( price === 100)  //false

// != Esit degilse
console.log( price != 1) //true
console.log( user != "guest") //true

// < kücükse
console.log(price < 100) //false

// <= kücükse veya esitse
console.log(price <= 100) //true

// > buyukse
console.log(price > 100) //false

// >= buyuk veya esitse
console.log(price >= 200) //true

//&& ve
console.log( price=321 && user != "guest") //true

// || veya
console.log( price > 0 || user != "guest") //true

// ! degil (tersi)
console.log(price > 100 && !user == "guest") //false