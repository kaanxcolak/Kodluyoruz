//DOM 
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

//pathname 
console.log(document.location.pathname)

console.log(document.head)
console.log(document.body)

console.log(document.URL)
console.log(document.baseURI)
document.body.style.backgroundColor = "aqua"

//DOM icinden Oge Secimi

let title = document.getElementsByTagName('h2')
console.log(title)
 
let link = document.querySelector("ul>li")
link.innerHTML = "link bilgisi degisti"
