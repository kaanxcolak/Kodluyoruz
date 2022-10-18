const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-500x500.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//we can select button section from index.html
const getButtons = document.querySelector(".btn-container")
getButtons.innerHTML = `
<ul class="list-inline">
<li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="all"> All </button></li>
<li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="korea"> Korea</button></li>
<li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="japan"> Japan</button></li>
<li class="list-inline-item"><button class="btn btn-outline-dark d-inline" id="china"> China</button></li>
</ul>`

//We should dived block by 2 because it is realating bootstrap grid systems
//I mean col-6 shows two block in a row
// Create event-click function 
const allButton = document.querySelector("#all")
allButton.addEventListener("click", allFunction)
const rowDOM = document.querySelector("#foodMenu") //menu items columns

function allFunction() {
  if (rowDOM) { //if you clicked,it will be reloaded!!!
    rowDOM.innerHTML = ``
    menu.map((object) => { //I entered to menu lists with map!!!
      const colDOM = document.createElement("div") //Creating div
      colDOM.classList.add("col-sm-12", "col-lg-6", "menu-items") //I added col classes and menu items to div for responsive structure!!!
      colDOM.innerHTML = `
      <div>
        <img class="photo" src="${object.img}" alt="" />
      </div>
      <div>
        <h4 class="menu-title menu-info">
          <div>${object.title}</div>
          <div>${object.price}</div>
        </h4>
        <div class="menu-info menu-text">${object.desc}</div>
      </div>
    ` // it is relating with div and menu items rules
      rowDOM.appendChild(colDOM) //I added colDOM to rowDOM
    })
  }
}

//KOREA
const koreaButton = document.querySelector("#korea")
koreaButton.addEventListener("click", koreaFunction)

function koreaFunction() {
  if (rowDOM) {
    rowDOM.innerHTML = ``
    menu.map((object) => {
      if (object.category == "Korea") { //I chose korea catagory
        const colDOM = document.createElement("div")
        colDOM.classList.add("col-sm-12", "col-lg-6", "menu-items")
        colDOM.innerHTML = `
        <div>
        <img class="photo" src="${object.img}" alt="" />
      </div>
      <div>
        <h4 class="menu-title menu-info">
          <div>${object.title}</div>
          <div>${object.price}</div>
        </h4>
        <div class="menu-info menu-text">${object.desc}</div>
      </div>
        `
        rowDOM.appendChild(colDOM)
      }
    })
  }
}

//JAPAN

const japanButton = document.querySelector("#japan")
japanButton.addEventListener("click", japanFunction)
function japanFunction() {
  if (rowDOM) {
    rowDOM.innerHTML = ``
    menu.map((object) => {
      if (object.category == "Japan") {
        const colDOM = document.createElement("div")
        colDOM.classList.add("col-sm-12", "col-lg-6", "menu-items")
        colDOM.innerHTML = `
        <div>
          <img class="photo" src="${object.img}" alt="">
        </div>
        <div>
          <h4 class="menu-title menu-info">
            <div>${object.title}</div>
            <div>${object.price}</div>
          </h4>
          <div class="menu-info menu-text">${object.desc}</div>
        </div> 
        `
        rowDOM.appendChild(colDOM)
      }
    })
  }
}

//CHINA
const chinaButton= document.querySelector ("#china")
chinaButton.addEventListener ("click",chinaFunction)

function chinaFunction() {
  if (rowDOM) {
    rowDOM.innerHTML=``
    menu.map ((object) => {
      if (object.category=="China") {
        const colDOM =document.createElement ("div")
        colDOM.classList.add("col-sm-12", "col-md-6", "menu-items")
        colDOM.innerHTML = `
        <div>
          <img class="photo" src="${object.img}" alt="">
        </div>
        <div>
          <h4 class="menu-title menu-info">
            <div>${object.title}</div>
            <div>${object.price}</div>
          </h4>
          <div class="menu-info menu-text">${object.desc}</div>
        </div>
        `
        rowDOM.appendChild(colDOM)
      }
    
    })
  }
}