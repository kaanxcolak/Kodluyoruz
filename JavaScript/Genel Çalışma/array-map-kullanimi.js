// Array Map Kullanimi

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

//userName icinde orijinal isim kalsin,
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

// const NEW_USERS = USERS.map(user => user.toLowerCase()) //hepsi kucuk harf oldu
// console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item => {
//     return {
//         userName: item, shortName: `${item[0]}. `, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// }
// )
const NEW_USERS = USERS.map(user => user.toLowerCase()) //hepsi kucuk harf oldu
console.log(NEW_USERS)

const USERS_OBJ = USERS.map(item => (
    {
        userName: item, shortName: `${item[0]}. `, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
     )
)

console.log(USERS_OBJ)

// Örnek 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;

const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]

// "sayilar" adında veri tipi const(sabit) bir değişken tanımlandık. Bunu içine statik değerler atadık. Daha sonra "yeniArray" olarak belirlediğimiz yeni değişkenimizde sayılar içerisinde map ile döngü oluşturarak mevcuttaki değeri 2 ile çarparak return ettik. Bu işlemden sonra sayılar array'inde herhangi bir değişiklik olmadığını görebilirsiniz.

// Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log( yeniMaaslar );
//[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]
// Maaşlar adında statik verilerden oluşan bir array oluşturduk. Bu array içinde dönerek maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 ekleyerek oluşan array'i return ettik.