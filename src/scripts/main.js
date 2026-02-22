'use strict';

const forms = document.querySelectorAll('form');

function capitalize(value) {
  if (!value) {
    return '';
  } else {
    const word = value[0].toUpperCase() + value.slice(1);

    return word;
  }
}

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    if (input.type === 'text' || input.type === 'password') {
      if (!input.id && input.name) {
        input.id = input.name;
      }

      const label = document.createElement('label');

      label.classList.add('field-label');

      label.htmlFor = input.id;
      label.textContent = capitalize(input.name);
      input.placeholder = capitalize(input.name);
      input.parentNode.insertBefore(label, input);
    }
  }
}
