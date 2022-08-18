//Template Literals Kullanimi:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "kaan"
const DOMAIN ="kodluyoruz.org"
let email = username + "@" + DOMAIN

//console.log("Merhaba", username, "sitemie hosgeldin", "mail adresin: ", email)

let info = `Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

kisa isminiz: ${username[0]}.

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2+3) *10} TL
gunun saat bilgisi: ${new Date().getHours()}
`

console.log(info) //