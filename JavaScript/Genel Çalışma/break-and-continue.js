// Break & Continue

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit'
]

let counter = 0 

// for( ; counter < 10; counter++){
//     if(counter === 5){break} // 0 1 2 3 4
//     console.log(counter)
// }
// for( ; counter < 10; counter++){
//     if(counter === 5){continue} // 0 1 2 3 4 6 7 8 9 10
//     console.log(counter)
// }

const UL_DOM = document.querySelector('#userList')

let index = 0
// for(; index < LOREM_LIST.length; index++){
//     if(LOREM_LIST[İNDEX] == "dolor" ) {break} //lorem ipsum
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }

for(; index < LOREM_LIST.length; index++){
    if(LOREM_LIST[İNDEX] == "dolor" ) {continuej} //dolr haric hepsi gelir
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}