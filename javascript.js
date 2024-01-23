const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let item = input.value;
    input.value = '';
    
    const shoppingList = document.createElement('li');
    const span = document.createElement('span');
    const buttonDel = document.createElement('button');
    
    shoppingList.appendChild(span);
    shoppingList.appendChild(buttonDel);
    buttonDel.textContent = "Delete";
    span.textContent = item;
    list.appendChild(shoppingList);

    buttonDel.addEventListener('click', () => {
        list.removeChild(shoppingList);
    });
    input.focus();
});