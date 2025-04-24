const toggle = document.querySelector('.toggle')
const buttonToggle = document.querySelector('.buttonToggle')
let displayDown = document.querySelector('.displayDown')
const btnOne = document.querySelector('#btn-1')
const btnZero = document.querySelector('#btn-0')
const btnDivide = document.querySelector('#btn-divide')
const btnMultiply = document.querySelector('#btn-multiply')
const btnMinus = document.querySelector('#btn-minus')
const btnPlus = document.querySelector('#btn-plus')

buttonToggle.style.left == '0px'
toggle.addEventListener('click', () => {
  if (buttonToggle.style.left == '0px') {
    buttonToggle.style.left = '18px'
  } else if (buttonToggle.style.left == '18px') {
    buttonToggle.style.left = '38px'
  } else {
    buttonToggle.style.left = '0'
  }
})

btnOne.addEventListener('click', e => {
  if (e.key === '1') {
    newSpan = document.createElement('span')
    newSpan.innerText = '1'
    displayDown.appendChild(newSpan)
  }
})
