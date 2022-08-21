//Local Storage

// let user = {userName: "Kaan Colak", isActive: true}
// console.log(user)

// localStorage.setItem('userInfo', JSON.stringffy(user))

// let userInfo = localStorage.getItem('userInfo') //bilgiyi al
// userInfo = JSON.parse(userInfo)
// console.log(userInfo)

//LocalStorage Bolum Sonu Egzersizi
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0

let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent() {
        

        //console.log(this.id)
        this.id == "increase" ? counter +=1 : counter -=1
        localStorage.setItem('counter',counter)
        counterDOM.innerHTML = counter
}