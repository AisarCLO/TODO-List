let btn = document.getElementById('btn');
let textArea = document.getElementById('input');
let list = document.getElementById('list');
let storedValues = JSON.parse(localStorage.getItem('values')) || [];

// Load the values from local storage when the page loads
storedValues.forEach(storedValue => {
  let listItem = document.createElement('li');
  listItem.textContent = storedValue;
  list.appendChild(listItem);
});

btn.addEventListener('click',()=>{
  let listItem = document.createElement('li');
  let inputValue = textArea.value;
  listItem.textContent = inputValue;
  list.appendChild(listItem);
  storedValues.push(inputValue);
  localStorage.setItem('values', JSON.stringify(storedValues));

  //For Delete Button
  let delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  delBtn.addEventListener('click',()=>{
    listItem.remove();
    delBtn.remove();
    editBtn.remove();
    // Remove the item from local storage when deleted
    storedValues = storedValues.filter(value => value !== inputValue);
    localStorage.setItem('values', JSON.stringify(storedValues));
  })

  //For Edit Button
  let editBtn = document.createElement('button');
  editBtn.textContent = "Edit";

  editBtn.addEventListener('click',()=>{
    let newValue = prompt("Enter New Value");
    if(newValue !== null){
      listItem.textContent = newValue;
      storedValues = storedValues.map(value => value === inputValue ? newValue : value);
      localStorage.setItem('values', JSON.stringify(storedValues));
    }
  });
console.log(storedValues);
  list.appendChild(editBtn);
  list.appendChild(delBtn);
});