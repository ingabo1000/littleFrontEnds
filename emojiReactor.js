// const happyBtn = document.querySelector("#happy-btn");
// let counter = 0;
// happyBtn.addEventListener("click", () => {
//   const countEl = happyBtn.querySelector(".count");
//   let currCount = +countEl.textContent.split("/")[0];
//    if(currCount< 10) {
//     currCount++
//   }
// console.log('currCount: ', currCount, ' ', typeof currCount)
//   countEl.textContent.split('')[0] = currCount;
//   console.log(countEl.textContent.split('')[0] = currCount )
//
// })


// const happyBtn = document.querySelector("#happy-btn");
// const confusedBtn = document.querySelector("#confused-btn");
// const sadBtn = document.querySelector("#sad-btn");
// const lovingBtn = document.querySelector("#loving-btn");
//
// console.log("buttons: ", happyBtn,'\n', confusedBtn,'\n', sadBtn, '\n', lovingBtn)
//
// [happyBtn, confusedBtn, sadBtn, lovingBtn].forEach((button) => {
//   button.addEventListener("click", () => {
//     updateCount(button)
//   })
// })


const btns = document.querySelectorAll('.emoji-btn');
btns.forEach((button) => {
  button.addEventListener("click", () => {
    updateCount(button)
  })
})
// [happyBtn, confusedBtn, sadBtn, lovingBtn].forEach((button) => {
//   button.addEventListener("click", () => {
//     updateCount(button)
//   })
// })


function updateCount(btn){

  const countEl = btn.querySelector('.count');
  const [current, total] = countEl.textContent.split("/");
   const newCount = Number(current) + 1;
  if(newCount <= 10) countEl.textContent = `${newCount}/${total}`;
}



