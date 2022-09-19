// Array Filter Kullanimi

//5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"] 

const NEW_PRODUCTS = PRODUCTS.filter( item => item.length > 5 )
console.log(NEW_PRODUCTS)

//Aktif kullanicilar ? 
const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true )
const ACTIVE_USERS = USERS.filter(user => user.isActive ) //true durumuna bakmak isteriz her zaman
console.log(ACTIVE_USERS)

//Sorular:
const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  }
];
// Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const NEW_PERSON = person.filter(person => person.age > 30)
console.log(NEW_PERSON)

// Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const LANGUAGE = person.filter( language => language.languages.includes("JavaScript"))
console.log(LANGUAGE)