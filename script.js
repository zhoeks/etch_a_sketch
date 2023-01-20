//create container div
const mainBody = document.body;
const div = document.createElement('div');
const button = document.createElement('button');
button.classList.add('restart');
button.textContent = 'Start Over'
div.classList.add('container');
mainBody.appendChild(button);
mainBody.appendChild(div);


const createRow = (num) => {
    for (let i = 0; i < num; i++) {
        const container = document.querySelector('.container');
        const create = document.createElement('div');
        create.classList.add('row'+[i]);
        create.classList.add('gridBox');
        create.textContent = 0;
        container.appendChild(create);
    }
}

const fillPage = (num) => {
    for (let i = 0; i < num; i++) {
        createRow(num);        
    }
}

fillPage(25);

const gridHover = document.querySelectorAll('.gridBox');
gridHover.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', (e) => {
        gridBox.classList.add('highlight');
});
});

