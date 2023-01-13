const name = document.getElementById('name')
const password = document.getElementById('password')
// You have an extra s after getElement
//const form = document.getElementsById('form')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
// You have message here but all your pushes use messages and your final check to see if message contains data uses messages as well which doesnt exist
 let message = []
  if (name.value === '' || name.value == null) {
  // messages.push('Name is required')
    message.push('Name is required')
 }

  if (password.value.length <= 6) {
  // messages.push('Password must be longer than 6 characters')
    message.push('Password must be longer than 6 characters')
    console.log(2);
  }

  if (password.value.length >= 20) {
  // messages.push('Password must be less than 20 characters')
    message.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
 // messages.push('Password cannot be password')
    message.push('Password cannot be password')
  }

// if (messages.length > 0) {
  if (message.length > 0) {
    e.preventDefault()
    // errorElement.innerText = messages.join(',')
    errorElement.innerText = message.join(',')
  }

})
