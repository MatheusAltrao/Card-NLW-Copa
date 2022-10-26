let card = document.getElementById('card')

let buttonGreen = document.getElementById('green')
let buttonBlue = document.getElementById('blue')

let buttonAll = document.querySelectorAll('button')

buttonGreen.addEventListener('click', () => {
  removeClicked()

  card.style.backgroundImage = "URl(./assets/bg-ignite.svg)"
  buttonGreen.classList.add('clicked')


})

buttonBlue.addEventListener('click', () => {
  removeClicked()

  card.style.backgroundImage = "URl(./assets/bg-explorer.svg)"
  buttonBlue.classList.add('clicked')


})


function removeClicked() {
  buttonGreen.classList.remove('clicked')
  buttonBlue.classList.remove('clicked')
}