const formElem = document.querySelector('.login-form')
const formbtn = formElem.querySelector('button')
const formInput = formElem.querySelectorAll('input')
const formlabel = formElem.querySelectorAll('label')

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = evt.target.elements.email.value.trim();
  const password = evt.target.elements.password.value.trim();
    
  if (!email || !password) {
    return alert('All form fields must be filled in');
  }

  console.log(`Email: ${email}, Password: ${password}`);
   evt.target.reset();
}

formElem.addEventListener('submit', onFormSubmit)

formbtn.classList.add('js_btn')

for (const input of formInput) {
    input.classList.add('js_input_field')
}

for (const label of formlabel) {
    label.classList.add('js_label')
}

