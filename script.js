//create container div
const mainBody = document.body;
const div = document.createElement('div');
div.classList.add('container');
mainBody.appendChild(div);

const createRow = (num) => {
    for (let i = 0; i <= num; i++) {
        const container = document.querySelector('.container');
        const create = document.createElement('div');
        create.classList.add('row'+[i]);
        create.textContent = `Column ${i}`;
        container.appendChild(create);
    }
}

const fillPage = (num) => {
    for (let i = 0; i <= num; i++) {
        createRow(num);
        
    }
}

fillPage(16);