let card = document.getElementById('card')

let buttonGreen = document.getElementById('green')
let buttonBlue = document.getElementById('blue')

let buttonAll = document.querySelectorAll('button')

let body = document.querySelector('body')

buttonGreen.addEventListener('click', () => {
  transitionCard()
  removeClicked()

  card.style.backgroundImage = "URl(./assets/bg-ignite.svg)"
  buttonGreen.classList.add('clicked')


})

buttonBlue.addEventListener('click', () => {
  transitionCard()
  removeClicked()

  card.style.backgroundImage = "URl(./assets/bg-explorer.svg)"
  buttonBlue.classList.add('clicked')
  body.classList.add('blue')

})

function removeClicked() {
  buttonGreen.classList.remove('clicked')
  buttonBlue.classList.remove('clicked')
  body.classList.remove('blue')
}


function transitionCard() {
  card.style.opacity = "0"

  setTimeout(() => {
    card.style.opacity = '1'

  }, 500)
}



