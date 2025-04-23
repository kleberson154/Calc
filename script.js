const toggle = document.querySelector('.toggle')
const buttonToggle = document.querySelector('.buttonToggle')
let displayDown = document.querySelector('.')

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
