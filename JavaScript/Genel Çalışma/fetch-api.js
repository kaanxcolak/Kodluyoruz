// Fetch Api ile calismak

//Json dosyadan veri cekmek: 
fetch("data/settings.json").then( //git bilgiyi al sonra datayı yazdir
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})


let userListDom = document.querySelector("#userList")
//API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
    ).then(responseJson => {
        responseJson.forEach(item => 
            {
                let liDOM = document.createElement('li')
                liDOM.innerHTML = item.title
                userListDom.appendChild(liDOM)
            })    
    })
