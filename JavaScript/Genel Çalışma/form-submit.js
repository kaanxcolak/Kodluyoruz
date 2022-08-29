//FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault() //varsayılanı engeller = default islemi engelledik
    console.log("islem gerceklestirildi")
}