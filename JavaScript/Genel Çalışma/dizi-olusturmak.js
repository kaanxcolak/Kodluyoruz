// array - dizilerle calismak

// Array olusturmak 
/* let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] //bos liste

//Array icerisindeki eleman/oge sayisini ogrenmek
console.log(items.length) //Array icindeki oge sayisi
// document.querySelector('#info').innerHTML = items.length

//Array icindeki ilk elemanın cagirilmasi
console.log(items[0] ) //1

//Array icindeki ortadaki elemanın cagirilmasi
console.log(
    "ortadaki: ",
    items[Math.floor(items.length / 2)] //
    )

//Array icindeki son elemanin cagirilmasi
console.log( items[items.length - 1] ) //kodluyoruz

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(typeof(items)) //object 
console.log(Array.isArray(items)) //True

//hangileri isAray -> True verir?
console.log("[] : ", Array.isArray( [] )) //True
console.log("1 : ",Array.isArray( 1 )) //false
console.log("true : ",Array.isArray( true )) //false
*/

//Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi

let items = [10,20,30,40,]
console.log("items - ilk hali : ", items)

//Array: son oge / eleman eklemek -> push
items.push(50) 
console.log("50: ", items) //sona 50 eklenir

//Array: basa oge eklemek -> unshift
items.unshift(5)
console.log("5: ", items)

//Array: sondaki ogeyi cikarmak ->pop
let lastItem = items.pop() //son elemani lastItem icine ekledik
console.log("lastItem: ", lastItem, ", items: ", items)

//Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift() //ilk elemani firstItem icine ekledik
console.log("firstItem: ", firstItem, ", items: ", items)

//Array icindeki bir ogenin bilgisinin degistirilmesi:

//ilk elemanin degistirilmesi 
items[0] = 5;
console.log(items)

//son elemanin degistirilmesi 
items[items.length - 1] = 1000;
console.log(items)

items[10000] = 10000
console.log(items) //olmayan kisimlarda bos oge yazdı
















