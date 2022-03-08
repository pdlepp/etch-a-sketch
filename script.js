const container = document.querySelector("#container");

function createGrid(){
    for(let rows = 0; rows < 16; rows++) {
        for(let col = 0; col < 16; col++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', 'cell');
            cell.setAttribute('style', 'display: inline-block; outline: 1px solid #000; margin: 0; padding: 0; height: 20px; width: 20px; border:none;');
            container.appendChild(cell);
        };
    };
};

createGrid();