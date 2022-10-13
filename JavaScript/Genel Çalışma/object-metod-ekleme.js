// Object icinde metot nasil eklenir ?

let user1 = {
    firstName: "Kaan",
    lastName: "Colak",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}` //this ile bu kullaniciya direk olarak ulas demek istedik
    }
};

console.log(user1)

/*
// Aşağıdakilerden hangisi bir kitap nesnesinin kitap bilgilerini ekrana yazdırmak için kullanılabilecek metottur?
//Birinci secenek: arrow function ile this yazilmaz.

//ikinci secenek: Dogru
var kitap = {
    kitapIsmi: "kitap",
    kitapYazari: "kitapYazari",
    kitapTanit: function() {
        return `${this.kitapIsmi} kitabinin yazari ${this.kitapYazari}.`;
    },
};
kitap.kitapTanit();
console.log(kitap.kitapTanit()); //kitap kitabinin yazari kitapYazari. Ikinci secenek de console.log yazmadigi icin ucuncu secenegi sectim

//Ucuncu secenek: Dogru
var kitap = {
    kitapIsmi: "kitap",
    kitapYazari: "kitapYazari",
    kitapTanit: () {
        `${kitap.kitapIsmi} kitabinin yazari ${kitap.kitapYazari}.`,
    };
    console.log(kitap.kitapTanit()); //kitap kitabinin yazari kitapYazari.

    //Dorduncu secenek: Yanlis kullanim ;
    //`${kitap.kitapIsmi} kitabinin yazari ${kitap.kitapYazari}.`
    var kitap = {
        kitapIsmi: "kitap",
        kitapYazari: "kitapYazari",
        kitapTanit: () => {
            return `${kitapIsmi} kitabinin yazari ${kitapYazari}.`
        },
    };
    console.log(kitap.kitapTanit()); //kitapIsmi is not defined at Object.kitapTanit
} */

//NOT:
// Sinifa Prototype yardimiyla fonksiyon eklemek: araba.prototype.korna
// Objeye Prototype yardimiyla fonksiyon eklemek: araba.__proto__.korna
