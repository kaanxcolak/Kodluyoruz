// Hata yonetimi icin try-catch kullanimi

let products;

try{ //kontrol kisimlari burada
    products.forEach(item => console.log(item));
} catch(error) { //hatalari düzeltme durumu burda yapilabilir
    console.log("error: ", error)
    // products = [1, 2, 3]
    // products.forEach(item => console.log(item));

}

console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)

//Ornek 
// "stric-mode"
// var messages, 
//     number;

// /*********************************
//   try / catch code test
// *********************************/
// function getValue() {
//   messages = document.getElementById("error-message");
//   messages.innerHTML = ""
//   messages.style.color = "red";

//   number = document.getElementById("get-value").value;
  
//   try {
//     if (number == "") throw "is Empty";    
//     if (isNaN(number)) throw "is not a number";
//     if (number > 10) throw "is too Big";
//     if (number < 5) throw "is too Small";
    
//     debugger;
    
//     if (number == number) {
//         messages.style.color = "green";
//         throw "is " + number;
//     }    
//   } catch(err) {
//       messages.innerHTML = "Input " + err;
//   } finally {
//     var test = document.getElementById("get-value").value = "";
//   } 
//   console.log([typeof test, test, number.valueOf()]);
  
// }

//Ornek 2
/* Try, catch, finally */

// try {
//     console.log('Start of try runs');
    
//     unicycle;
  
//     console.log('End of try runs -- never reached'); 
  
//   } catch(err) {
  
//     console.log('Error has occured: ' + err); 
  
//   } finally {
//     console.log('This is always run'); 
//   }
  
//   console.log('...Then the execution continues');
   
//   let json = '{ "age": 30 }';
   
//   try {
   
//     let user = JSON.parse(json); 
//     if (!user.name) {
//       throw new SyntaxError("Incomplete data: no name");
//     }
   
//     console.log( user.name );
   
//   } catch(e) {
//     console.log( "JSON Error: " + e ); 
//   }
  
// const componentLoadingClass = "component-loading";
// const componentEl = document.querySelector(".component");
// const usernameEl = componentEl.querySelector("#username");
// const reponameEl = componentEl.querySelector("#reponame");
// const formEl = componentEl.querySelector("form");
// const starsNumberEl = componentEl.querySelector(".stars-number");

// function startLoadingAnimation() {
//   componentEl.classList.add(componentLoadingClass);
// }

// function stopLoadingAnimation() {
//   componentEl.classList.remove(componentLoadingClass);
// }

// // HELPERS

// // EVENTS
// formEl.addEventListener("submit", async function(e) {
//   e.preventDefault();

//   starsNumberEl.innerHTML = "";
//   startLoadingAnimation();

//   try {
//     const starsNumber = await fetch(
//       `https://api.github.com/repos/${usernameEl.value}/${reponameEl.value}`
//     )
//       .then(res => res.json())
//       .then(data => data.stargazers_count);

//     starsNumberEl.innerHTML = starsNumber;
//   } catch (err) {
//     starsNumberEl.innerHTML = "Couldn't get the stars number";
//   } finally {
//     stopLoadingAnimation();
//   }
// });

  