//INPUT icindeki degeri(value) almak

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault() //varsayılanı engeller = default islemi engelledik
    console.log("islem gerceklestirildi")

    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score',scoreInputDOM.value)
}

//Alistırmalar
// Bir input oluşturup yanına ekleyeceğimiz buton ile butona tıkladığımızda değerimiz alt satırda alalım.

function myFunction(){
    var x = document.getElementById("#myInput").value;
    document.getElementById("myP").innerHTML = ("degerimiz:" + " " + x);
}

//2.Bir validation form oluşturup e-mail, yaş ve isim bilgilerini standartlara uygun şekilde alalım.
function sampleFunction() {
    var at = document.getElementById("email").value.indexOf("@");
    var age = document.getElementById("age").value;
    var fname = document.getElementById("fname").value;
    submitOK = "true";
  
    if (fname.length > 10) {
      alert("The name may have no more than 10 characters");
      submitOK = "false";
    }
  
    if (isNaN(age) || age < 1 || age > 100) {
      alert("The age must be a number between 1 and 100");
      submitOK = "false";
    }
  
    if (at == -1) {
      alert("Not a valid e-mail!");
      submitOK = "false";
    }
  
    if (submitOK == "false") {
      return false;
    }
  }