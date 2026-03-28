const buttons = document.querySelectorAll(".favorite-icon");


buttons.forEach((button) => {

  button.addEventListener('click', (event) => {
   let btn = document.getElementById(event.target.id);
    btn.innerHTML = '&#9825;';

    if(btn.classList.contains('filled')){
      btn.innerHTML = '&#9825;';
      btn.classList.remove('filled')
    }
    else {
      btn.classList.add('filled')
      btn.innerHTML = '&#10084;';
    }
  })
})



//    button.addEventListener("click", () => {
//     if(button.classList.contains("filled")){
//       button.classList.remove("filled")
//       button.innerHTML = '&#9825;';
//     }else {
//       button.classList.add("filled")
//       button.innerHTML = '&#10084;';
//     }
//   })
// })
//


















// buttons.forEach((button) => { 
//   button.addEventListener('click', () => {
// if(button.classList.remove('filled')){
//       button.classList.remove('filled')
//       button.innerHTML = "&#9825;";
//     }else{
//       button.classList.add('filled')
//       button.innerHTML = "&#10084;";
//     }
//
//  })
// })

//
// buttons.forEach((button) => {
//   const isFilled = button.classList.contains("filled");
//
//   if(isFilled){
//     button.classList.remove('filled');
//     button.innerHTML = '&#9825;';
//   }else{
//     button.classList.add('filled');
//     button.innerHTML = '&#10084;';
//   }
// })
