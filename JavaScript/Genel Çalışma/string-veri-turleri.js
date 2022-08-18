//String veri turleri

let email = "kaancolak3458@gmail.com"
let firstName = "kaan"
let lastName = "COLAK"

//string karakter sayisi - length
console.log(email.length)

//ilk karakteri bulmak - [0]
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf - kucuk harf: 
firstName = firstName.toUpperCase()
console.log(firstName) //KAAN

firstName = firstName.toLowerCase()
console.log(firstName) //kaan

//string icinde istedigimiz bilgiyi aramak ve yerini bulmak: search
console.log(email.search("@")) //15
console.log(email.search("olmayan")) //-1 aradıgımız yok anlamı tasir
console.log(email[15]) //@

//belli bir yere kadar olani almak - slice : (domain bilgisi)
let DOMAIN = email.slice(email.search("@") +1) // @'TEN SONRASINI ALIR 
console.log(DOMAIN) //
console.log(
    DOMAIN.slice(o,DOMAIN.indexOf('.')) //sadece gmail kismini aldik
    ) 
//bilgiyi degistir - replace:
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

//istedigimiz bilgi var mı? - includes
email.includes("ajslaksmda") //false
email.includes("@") //true

//istedigimiz bilgiyle basladi mi? bitti mi? - startsWidth, endsWidth: 
console.log(
    email.endsWith("kodluyoruz.org")
)

//ilk harflerini Buyuk yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} 
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)













