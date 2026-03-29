let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
const lightbox = document.querySelector('.lightbox')
const imagesArray = [img1, img2, img3]


imagesArray.forEach((img) => {
  img.addEventListener("click", (event) => {
    lightbox.classList.add('active');
    const image = document.createElement('img')
    image.src = img.src;
    // this makes the lightbox only have one picture at a time
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(image)
  })
})

lightbox.addEventListener('click', (event) => {
  if(event.target !== event.currentTarget) return// this makes it that only clicking on lightbox removes the image
  lightbox.classList.remove('active')
})
