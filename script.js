const container = document.querySelector("#container");
const btn = document.querySelector('#reset');

function createGrid(){
    for(let rows = 0; rows < 16; rows++) {
        for(let col = 0; col < 16; col++) {
            const cell = document.createElement('a');
            cell.setAttribute('id', 'cell');
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('addBlack');
            });
            container.appendChild(cell);
        };
    };
};

createGrid();

const cells = document.querySelectorAll('a');

btn.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('addBlack');
    });
});