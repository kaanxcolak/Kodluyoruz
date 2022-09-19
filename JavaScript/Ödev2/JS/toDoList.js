// HTML Sayfasindaki elementlerin seçilmesi

let taskDOM = document.querySelector("#task") //task inputun ID'si. Bunu alıp taskDOM'a atadım
let listDOM = document.querySelector("#list") //list ve ul ID'si kullanılarak listDOM'a atandı
let ulLength = document.getElementsByTagName("li") //burada  bütün li elementlerini ulLength'e atadım ve kaç tane li varsa onu anlamış oluruz
let btnDOM = document.querySelector("liveToastBtn") //ekle yazan buton seçimi için liveToastBtn id'sini btnDOM'a atadım



//




//butonlara listener tanımı
btnDOM.addEventListener('click',elemanEkle) // addEventListener ile 'click' yönlendirmesi sayesinde butona tıklanırsa elemanEkle fonksiyonu calisir

// Fonksiyonlarımız
function removeButton(){
    this.parentElement.remove(); //carpiyi silmek icin parentElement.remove classını kullandım
}

//Eleman Eklemek Icin Fonksiyon
function elemanEkle(){
    if(taskDOM.value == "" ) { //input degeri bos veya degil durumu ici yapilir
        $(".error").toast("show"); //error classını kullandım
    }else{
        $(".success").toast("show"); //basarılı durumunda ise success kullandim
    }

    let liDOM = document.createElement('li') //yeni bir element olsturuldu ve liDOM degiskenine atamasi yapildi
    listDOM.appendChild(liDOM) // olusacak her liDOM icin listDOM'un en sonuna eklenecegini tanimladik
    liDOM.innerHTML = task.value; // Bu kisim ise inputID.deger diyerek inputa girilen degerlerin liDOM'a atanmasini sagladik
    taskDOM.value = ""; //eklendikten sonra input kısmı tekrar bos kalmasini sagladi 

}