const regEmail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const button = document.querySelector('button')
const input = document.querySelector('input')
const emailValid = document.getElementById('email-valid')

const valid = (email) => {
  const esValid = regEmail.test(email)
  esValid
    ? (emailValid.style.display = 'none')
    : (emailValid.style.display = 'block')
}

const debounce = (func, delay) => {
  return () => {
    setTimeout((email) => {
      func.apply(email)
    }, delay)
  }
}

button.addEventListener('click', () => {})

input.addEventListener('input', ({ target }) => {
  debounce(target.value, 2000)
})
