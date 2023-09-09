const regEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const button = document.querySelector('button')
const input = document.querySelector('input')
const emailValid = document.getElementById('email-valid')

const valid = (email) => {
  const esValid = regEmail.test(email)
  esValid
    ? ((button.style.backgroundImage =
        'linear-gradient(90deg, var(--tomato), var(--tomato))'),
      (emailValid.style.display = 'none'))
    : ((button.style.backgroundImage = 'none'),
      (emailValid.style.display = 'block'))
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
    } else button.style.backgroundImage = 'none'
  }, 500)
)
