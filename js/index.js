// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

const stateButton = {
  pepperoni: 'btn-pepperoni',
  mushrooms: 'btn-mushrooms',
  greenPeppers: 'btn-green-peppers',
  whiteSauce: 'btn-sauce',
  glutenFreeCrust: 'btn-crust'
}
const statePrice = {
  pepperoni: '$1 pepperoni',
  mushrooms: '$1 mushrooms',
  greenPeppers: '$1 green peppers',
  whiteSauce: '$3 white sauce',
  glutenFreeCrust: '$5 gluten-free crust'
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible'
    } else {
      oneMushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible'
    } else {
      oneGreenPepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  document.querySelector('.panel.price ul').innerHTML = ''
  for (ingredient in state) {
    activeButtonClass = '.' + stateButton[ingredient]
    if (state[ingredient]) {
      document.querySelector(activeButtonClass).classList.add('active')

      const li = document.createElement('li')
      li.textContent = statePrice[ingredient]

      document.querySelector('.panel.price ul').appendChild(li)
    } else {
      document.querySelector(activeButtonClass).classList.remove('active')
    }
  }
}

function renderPrice() {
  let totalPrice = 10
  for (ingredient in state) {
    if (state[ingredient]) {
      totalPrice += parseInt(statePrice[ingredient].substring(1))
    }
  }

  document.querySelector('.panel.price strong').textContent = '$' + totalPrice
}

renderEverything()

document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni
    renderEverything()
  })

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms
    renderEverything()
  })

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers
    renderEverything()
  })

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
