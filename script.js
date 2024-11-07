const form = document.querySelector('.todo');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.querySelector('.input-element-js');
    const li = document.createElement('li');

    li.innerHTML = `
        <label>
            <input type="checkbox" />
            ${input.value}
        </label>
    `;

    const ul = document.querySelector('.todo-list');
    ul.appendChild(li);

    input.value = '';
});

const liRoot = document.querySelector('.todo-list');
liRoot.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
        e.target.closest('li').classList.toggle('done');
    }
});


