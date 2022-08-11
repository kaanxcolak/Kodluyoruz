//number veri turu tanimlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(price,tax,priceTax,total)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)


//arttirma ve azaltma islemleri
let counter = 320
counter = counter + 1; //uzun
counter += 1; //kısa
counter ++; //daha kısa
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *=10;
console.log(counter)

counter /=2;
console.log(counter)

//islem onceligi:
console.log(2+3*10) //32 olur. 
console.log((2+3)*10) //50 olur. 

//mod(kalan) alma %;
//sayi tek mi cift mi ???
console.log(3 % 2) //1 kalan olur

//8 urun alan koliye tum urunler sigiyor mu ?
console.log(8%8) // ürünler yerleşir. 18 olsaydı 2 koli dışarda kalırdı
//us alma
console.log(2**4) 

//asagi yuvarlama islemi -> Math.floor;
console.log(Math.floor(1,7)) //1

//yukari yuvarlama islemi -> Math.ceil;
console.log(Math.ceil(1,9)) //2

//yakina yuvarlama islemi -> Math.round;
console.log(Math.round(1,4)) //1
console.log(Math.round(1,5)) //2 































