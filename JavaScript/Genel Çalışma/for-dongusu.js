// For Dongusu

//for([baslangicAtamasi]; [kosulIfadesi]; [arttirimIfadesi]) {
//   yapilacak islem
// }

let users = ["Lorem", "Ipsum", "Dolor", ]

// for(let index = 0; index < 100; index++) {
//     console.log(index)
// }

// let index = 0
// for( ; index < 100; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector('#userList')
for(let index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
    
}