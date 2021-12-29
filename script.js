const table = document.querySelector('tbody');
table.addEventListener('mousedown', (ev)=> {
  let active = true;
    if (ev.target.tagName === 'TD' && active) ev.target.className = selColor;
  table.addEventListener('mouseover', (ev)=> {
    if (ev.target.tagName === 'TD' && active) ev.target.className = selColor;
  })
  table.addEventListener('mouseup', (ev)=> {
    active = false;
  })
})

const makeRow = () => {
  const newRow = document.createElement('tr');
  const pixel = document.createElement('td');
  
  newRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
  `
  table.appendChild(newRow);
}

const button = document.querySelector('button');
button.addEventListener('click', ()=> {
  makeRow();
})

const colorSelector = document.querySelector('select');
let selColor = '';

colorSelector.addEventListener('change', (ev)=> {
  selColor = ev.target.value;
})
