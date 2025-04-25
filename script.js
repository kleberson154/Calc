const toggle = document.querySelector('.toggle')
const buttonToggle = document.querySelector('.buttonToggle')
let displayDown = document.querySelector('.displayDown')
let displayHistory = document.querySelector('.displayHistory')
let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
const btnEqual = document.querySelector('#btn-equal')
const btnDelete = document.querySelector('#btn-del')
const resetButton = document.querySelector('#btn-reset')
const btnDot = document.querySelector('#btn-dot')
let state = false

// theme
const body = document.querySelector('body')
const header = document.querySelector('.header')
const screen = document.querySelector('.result')
const footer = document.querySelector('footer')
const button = document.querySelectorAll('.box')
const keyboard = document.querySelector('.buttons')

function clearDisplay() {
  displayDown.innerHTML = ''
}

function clearHistory() {
  displayHistory.innerHTML = ''
}

function formattedNumber(number) {
  if (number == '') {
    return ''
  }
  if (number == 'NaN') {
    return '0.00'
  }

  let num = Number(number)
  let value = num.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return value
}

function calc() {
  let num1 = displayHistory.innerText.split(/[\+\-\x\/\,\.]/)
  let num2 = displayDown.innerText
  let operator = displayHistory.innerText.slice(-1)
  let result

  switch (operator) {
    case '+':
      result = Number(num1[0]) + Number(num2)
      break
    case '-':
      result = Number(num1[0]) - Number(num2)
      break
    case 'x':
      result = Number(num1[0]) * Number(num2)
      break
    case '/':
      if (Number(num2) === 0) {
        return 'Nan'
      } else {
        result = Number(num1[0]) / Number(num2)
      }
      break
  }

  return result
}

resetButton.addEventListener('click', () => {
  clearDisplay()
  clearHistory()
})

btnDelete.addEventListener('click', () => {
  let displayValue = displayDown.innerText
  if (displayValue.length > 0) {
    displayDown.innerText = displayValue.substring(0, displayValue.length - 1)
  }
})

btnDot.addEventListener('click', () => {
  let displayValue = displayDown.innerText
  if (displayValue.length > 0) {
    if (displayValue.includes('.')) {
      return
    } else {
      displayDown.innerText += '.'
    }
  } else {
    displayDown.innerText = '0.'
  }
})

number.forEach(item => {
  item.addEventListener('click', () => {
    if (displayDown.innerText == 'NaN') {
      clearDisplay()
    }
    if (state) {
      clearDisplay()
      state = false
    }
    let length = displayDown.innerText.length
    if (length > 12) {
      return
    } else {
      displayDown.innerText += item.innerHTML
    }
  })
})

operator.forEach(item => {
  item.addEventListener('click', () => {
    if (state) {
      displayHistory.innerText = displayDown.innerText + item.innerText
      clearDisplay()
      state = false
    }
    if (displayHistory.innerText == '') {
      displayHistory.innerText =
        formattedNumber(displayDown.innerText) + item.innerText
      clearDisplay()
    }
  })
})

btnEqual.addEventListener('click', () => {
  if (displayHistory.innerText == '') {
    return
  }
  state = true
  displayDown.innerText = formattedNumber(calc())
  clearHistory()
})

// theme
toggle.addEventListener('click', () => {
  if (buttonToggle.style.left == '0px') {
    buttonToggle.style.left = '18px'
    body.classList.remove('body-theme-1')
    body.classList.add('body-theme-2')
    toggle.classList.remove('toggle-theme-1')
    toggle.classList.add('toggle-theme-2')
    buttonToggle.classList.remove('buttonToggle-theme-1')
    buttonToggle.classList.add('buttonToggle-theme-2')
    header.classList.remove('header-theme-1')
    header.classList.add('header-theme-2')
    screen.classList.remove('screen-theme-1')
    screen.classList.add('screen-theme-2')
    displayDown.classList.remove('header-theme-1')
    displayDown.classList.add('header-theme-2')
    displayHistory.classList.remove('header-theme-1')
    displayHistory.classList.add('header-theme-2')
    footer.classList.remove('header-theme-1')
    footer.classList.add('header-theme-2')
    button.forEach(item => {
      item.classList.remove('box-theme-1')
      item.classList.add('box-theme-2')
    })
    keyboard.classList.remove('toggle-theme-1')
    keyboard.classList.add('toggle-theme-2')
    btnDelete.classList.remove('del-theme-1')
    btnDelete.classList.add('del-theme-2')
    resetButton.classList.remove('del-theme-1')
    resetButton.classList.add('del-theme-2')
    btnEqual.classList.remove('resultado-theme-1')
    btnEqual.classList.add('resultado-theme-2')
    buttonToggle.style.left = '18px'
  } else if (buttonToggle.style.left == '18px') {
    body.classList.remove('body-theme-2')
    body.classList.add('body-theme-3')
    toggle.classList.remove('toggle-theme-2')
    toggle.classList.add('toggle-theme-3')
    buttonToggle.classList.remove('buttonToggle-theme-2')
    buttonToggle.classList.add('buttonToggle-theme-3')
    header.classList.remove('header-theme-2')
    header.classList.add('header-theme-3')
    screen.classList.remove('screen-theme-2')
    screen.classList.add('screen-theme-3')
    displayDown.classList.remove('header-theme-2')
    displayDown.classList.add('header-theme-3')
    displayHistory.classList.remove('header-theme-2')
    displayHistory.classList.add('header-theme-3')
    footer.classList.remove('header-theme-2')
    footer.classList.add('header-theme-3')
    button.forEach(item => {
      item.classList.remove('box-theme-2')
      item.classList.add('box-theme-3')
    })
    keyboard.classList.remove('toggle-theme-2')
    keyboard.classList.add('toggle-theme-3')
    btnDelete.classList.remove('del-theme-2')
    btnDelete.classList.add('del-theme-3')
    resetButton.classList.remove('del-theme-2')
    resetButton.classList.add('del-theme-3')
    btnEqual.classList.remove('resultado-theme-2')
    btnEqual.classList.add('resultado-theme-3')
    buttonToggle.style.left = '38px'
  } else {
    body.classList.remove('body-theme-3')
    body.classList.add('body-theme-1')
    toggle.classList.remove('toggle-theme-3')
    toggle.classList.add('toggle-theme-1')
    buttonToggle.classList.remove('buttonToggle-theme-3')
    buttonToggle.classList.add('buttonToggle-theme-1')
    header.classList.remove('header-theme-3')
    header.classList.add('header-theme-1')
    screen.classList.remove('screen-theme-3')
    screen.classList.add('screen-theme-1')
    displayDown.classList.remove('header-theme-3')
    displayDown.classList.add('header-theme-1')
    displayHistory.classList.remove('header-theme-3')
    displayHistory.classList.add('header-theme-1')
    footer.classList.remove('header-theme-3')
    footer.classList.add('header-theme-1')
    button.forEach(item => {
      item.classList.remove('box-theme-3')
      item.classList.add('box-theme-1')
    })
    keyboard.classList.remove('toggle-theme-3')
    keyboard.classList.add('toggle-theme-1')
    btnDelete.classList.remove('del-theme-3')
    btnDelete.classList.add('del-theme-1')
    resetButton.classList.remove('del-theme-3')
    resetButton.classList.add('del-theme-1')
    btnEqual.classList.remove('resultado-theme-3')
    btnEqual.classList.add('resultado-theme-1')
    buttonToggle.style.left = '0'
  }
})
