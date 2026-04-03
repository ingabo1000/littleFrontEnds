let textArea = document.querySelector('#text-input')
let charOutput = document.querySelector('#char-count')

charOutput.style.color = 'red';

console.log('charoutput: ', charOutput.textContent)
textArea.addEventListener("input", (event) => {
  let str = '';
   str += event.target.value;

  if(textArea.value.length > 50){
    textArea.value = textArea.value.slice(0, 50);
    }
  
if(str.length > 50) str = str.slice(0, 50);
    if(str.length <= 50) charOutput.textContent = `Character Count: ${str.length}/50`
  })
