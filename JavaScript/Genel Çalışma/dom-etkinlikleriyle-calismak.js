//DOM Etkinlikleriyle Calismak
//https://www.w3schools.com/js/js_htmldom_events.asp

let greeting = document.querySelector("#greeting")
//greeting.addEventListener("click", domClick)
greeting.addEventListener("mouseover", domClick)

function domClick(){
    //console.log("tiklandi")
    console.log("etkinlik denetlendi")
    //console.log(this.innerHTML = "tiklandigi icin bilgi degisti")
    //console.log(this.style.color = "red")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"

}