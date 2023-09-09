const regEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const button = document.querySelector('button')
const input = document.querySelector('input')
const emailValid = document.getElementById('email-valid')
let esValid = false

const valid = (email) => {
  esValid = regEmail.test(email)
  esValid
    ? ((button.style.backgroundImage =
        'linear-gradient(45deg, var(--tomato), var(--bColor))'),
      (emailValid.style.display = 'none'),
      button.classList.add('sombra'))
    : (console.log('!esValid'),
      (emailValid.style.display = 'block'),
      button.classList.remove('sombra'))
}

const debounce = (func, wait) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

button.addEventListener('click', () => {})

input.addEventListener(
  'input',
  debounce(({ target }) => {
    if (target.value !== '') {
      valid(target.value)
    } else {
      button.classList.remove('sombra')
      button.style.backgroundImage = 'none'
    }
  }, 500)
)
