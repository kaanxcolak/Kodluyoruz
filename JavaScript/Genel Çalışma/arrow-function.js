// Arrow Function Kulanimi

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => {
    console.log(`Merhaba ${firstName}`)
}

helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2") //bir parametre, bir donus islemi

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)

helloFuncV3("helloFuncV3", "Last Name info")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`

    console.log(info)
    return info
}

helloFuncV4("helloFuncV4", "Other info")

// Pekistirme Sorulari
// 1 -  Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların herbirini 1'den başlayarak alt alta yazalım.

const seriesList = list => {
    list.forEach((series,index) => {
        console.log(`${index+1}. ${series}`)
    });
};
seriesList(["Firefly","The Mandalorian","Breaking Bad"]);
/*output: 
1.Firefly
2.The Mandalorian
3.Breaking Bad
*/

//  2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün. Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.

const newArray = (nums) => {
    const newNums = nums.map(e => {
        if(e%2==0){
            return e*2
        }else if(e%2 == 1){
            return e*3
        }
    });
    return newNums
}

console.log(newArray([1,2,3,4,5])); //output: [3,4,9,8,15]