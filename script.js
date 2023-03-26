const btn = document.querySelector(".order");
const display = document.querySelector(".display");
const updatebox = document.querySelector(".update");

// by using Async-await
function getMilk() {
  const milk = "🥛";
  return new Promise((resolve, reject) => {
    updatebox.textContent = "Getting the milk";
    setTimeout(() => {
      resolve(milk);
      updatebox.textContent  = "got the milk";
      return milk;
    }, 2000);
  });
}
const putPati = (milk) => {
  const pati = milk + "☕";
  return new Promise((resolve, reject) => {
    updatebox.textContent = "putting the pati in the milk"
    setTimeout(() => {

      resolve(pati);
      updatebox.textContent = "put the pati in the milk"
      return pati;
    }, 2000);
  });
};
const makeTea = (pati) => {
  const chai = pati + " " + "chai is ready";
  return new Promise((resolve, reject) => {
    updatebox.textContent = "chai is almost ready"
    setTimeout(() => {
      resolve(chai);
      display.textContent = chai;
      updatebox.textContent = "chai is ready,sir";
    }, 2000);
    setTimeout(() => {
      display.textContent = "";
      updatebox.textContent = "";
    }, 5000);
  });
};

async function bringTea() {
  const milk = await getMilk();
  console.log("got the milk" + milk);
 const pati =  await putPati(milk);

 await makeTea(pati);
}
btn.addEventListener("click",()=>{
  bringTea();
})

// by means of promises

// btn.addEventListener("click",()=>{
//   getMilk()
//   .then((milk) => {
//     const pati = milk + "☕";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(pati);
//         console.log(pati);
//       }, 2000);
//     });
//   })
//   .then((pati) => {
//     const chai = pati + " " + "chai is ready";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(chai);
//         display.textContent = chai;
//       }, 2000);
//       setTimeout(()=>{
//         display.textContent = ""
//       },5000)
//     });
//   });

// })
  

// by mens of callbacks
// btn.addEventListener("click", () => {
//   getmilk((milk) => {
//     console.log("i got the milk", milk);
//     getpati(milk, (pati) => {
//       console.log("i have put pati in chai");
//       put_in_cup(pati);
//     });
//   });
// });

// function getmilk(cb) {
//   setTimeout(() => {
//     milk = "🥛";
//     cb(milk);
//   }, 2000);
// }
// function getpati(milk, cb) {
//   const pati = milk + "☕";
//   setTimeout(() => {
//     cb(pati);
//   }, 2000);
// }
// function put_in_cup(pati) {
//   const chai = pati + "☕";
//   setTimeout(() => {
//     display.textContent = chai;
//     console.log(chai);
//   }, 2000);
//   setTimeout(()=> display.textContent = "",5000)
// }
