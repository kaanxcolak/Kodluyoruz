//prompt ile kullanicidan bilgi almak

let fullName = prompt("Lutfen adinizi giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red"> ${fullName} </small>`


console.log(fullName)

//liste icerisinden son elemana ulasmak veya eleman eklemek

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti"


let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "son oge degisti"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

//ulDOM.append.(liDOM) //en sona ekler
ulDOM.prepend(liDOM)