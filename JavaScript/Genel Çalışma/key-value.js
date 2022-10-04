// Object Key - Value

let laptop1 = { //obje olduğunu belirttik. [] olsaydı array derdik
    brand: "Apple",
    model: "MacBook Pro",    //key baslarken karakter bilgisi ile baslamali ya da cift tirnakla yazilir
    "1kg": 2,
    modelName: "MacBook Pro", //genelde bu kullanılır
    //model-name: "MacBook Pro", hatalıdır
    model_name: "MacBook Pro",
} 

console.log(laptop1)

// Dogru Anahtar Bilgisi Olusturmak

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["1kg"])

// Anahtar Bilgisine Yeni Deger Eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version = "10.15.21"
console.log(laptop1)

// Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)

keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1 ))

keys.foreach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// Deger Bilgilerine Ulasmak (values) -> Object.values(item)

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)    
})

let setting = {
    password: 1234,
    userName: 'user1'
}