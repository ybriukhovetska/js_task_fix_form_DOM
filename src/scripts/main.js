'use strict';

const forms = document.querySelectorAll('form');

function capitalize(value) {
  const word = value[0].toUpperCase() + value.slice(1);

  return word;
}

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    if (!input.id) {
      input.id = input.name;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');

    label.htmlFor = input.id;
    label.textContent = capitalize(input.name);
    input.placeholder = capitalize(input.name);
    input.parentNode.appendChild(label);
  }
}
