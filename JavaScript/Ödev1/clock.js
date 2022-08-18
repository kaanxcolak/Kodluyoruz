let userName = prompt("Adınız Nedir: ")

myName.innerHTML = `${userName}`

// let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();

    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + " " + d;
    setTimeout(showTime,1000);
}

showTime();