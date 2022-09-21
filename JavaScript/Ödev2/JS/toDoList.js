// HTML Sayfasindaki elementlerin seçilmesi

let taskDOM = document.querySelector("#task") //task inputun ID'si. Bunu alıp taskDOM'a atadım
let listDOM = document.querySelector("#list") //list ve ul ID'si kullanılarak listDOM'a atandı
let ulLength = document.getElementsByTagName("li") //burada  bütün li elementlerini ulLength'e atadım ve kaç tane li varsa onu anlamış oluruz
let btnDOM = document.querySelector("liveToastBtn") //ekle yazan buton seçimi için liveToastBtn id'sini btnDOM'a atadım



//Var olan sayfayi silmek istersek carpi butonu olusturmaliyiz
for (let i = 0; i < ulLength.length; i++) {
    let closeButton = document.createElement("span") //yeni bir span elementi olusturup closeButton'a atadım
    closeButton.textContent = "\u00D7"; //carpi isareti icin \u00D7 kullanildi
    closeButton.classList.add("close"); //close class'ini butona ekledim
    closeButton.onclick = removeButton; //carpi isarete basildiginda removeButton fonksiyonu calismasini söyledik
    ulLength[i].append(closeButton); //degiskeni ulLength'in indexlerine eklemis olduk
    ulLength[i].onclick = check; //tiklandiginda check fonsikyonu calistirdik
}




//butonlara listener tanımı
btnDOM.addEventListener('click', elemanEkle) // addEventListener ile 'click' yönlendirmesi sayesinde butona tıklanırsa elemanEkle fonksiyonu calisir

// Fonksiyonlarımız
function removeButton() {
    this.parentElement.remove(); //carpiyi silmek icin parentElement.remove classını kullandım
}
function check() {
    this.classList.toggle("checked"); // toggle switch iki duruma sahip(evet-hayir veya active-passive) durumlar icin var. toggle("checked") ile tilanan üstünü ciz dedik yanina tik koydurduk 
}

//Eleman Eklemek Icin Fonksiyon
function elemanEkle() {
    if (taskDOM.value == "") { //input degeri bos veya degil durumu ici yapilir
        $(".error").toast("show"); //error classını kullandım
    } else {
        $(".success").toast("show"); //basarılı durumunda ise success kullandim


        let liDOM = document.createElement('li') //yeni bir element olsturuldu ve liDOM degiskenine atamasi yapildi
        listDOM.appendChild(liDOM) // olusacak her liDOM icin listDOM'un en sonuna eklenecegini tanimladik
        liDOM.innerHTML = task.value; // Bu kisim ise inputID.deger diyerek inputa girilen degerlerin liDOM'a atanmasini sagladik
        taskDOM.value = ""; //eklendikten sonra input kısmı tekrar bos kalmasini sagladi 


        //Sonradan Eklenen Elemanlari silmek icin ayni islemler yapilmasi
        liDOM.onclick = check;
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        liDOM.append(closeButton);
        liDOM.append(liDOM);
        inputElement.value = ("");

    }
}
