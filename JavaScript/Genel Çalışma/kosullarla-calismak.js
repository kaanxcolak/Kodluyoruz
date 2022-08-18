//Kosullarla Calismak 

let username = prompt("Kullanici Adini Giriniz:")
//eger kullanici bilgisi varsa ekrana ismini yazdir
//eger(username.length > 0) {console.log(username)}

if(username.length > 0){
    console.log(`Kullanici Bilginiz ${username}`)
}else{
    console.log("bilgi yok ")
}

//Coklu Kosullarla Calismak

//let userName = prompt("Kullanici Adiniz: ")
let age = prompt("Yasiniz: ")
//let info = document.querySelector("#info")

if(userName && age >= 18){
    info.innerHTML = "ehliyet alabilirsiniz..."
}else if(!userName){
    info.innerHTML = "Kullanici Adiniz Yok..."
}else if( !(age >= 18)){
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz..."
}

//Ternary operator ile short if kullanimi

//eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi

let userName = prompt("Kullanici Bilginizi Yaziniz: ")
let info = document.querySelector("#info")

//ternary kullanimi:
//kosul ? dogruysa : yanlıssa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilgisi Yok!"}`