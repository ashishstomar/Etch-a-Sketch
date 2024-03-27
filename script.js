const body = document.querySelector("body")
const container = document.querySelector(".container");
const btnrgb = document.createElement("button");
const btnBlack = document.createElement("button");
const userInput = document.createElement("input");
userInput.innerText = "Grid Size";
userInput.classList.add("userInput");

btnrgb.innerText = "RGB";
btnBlack.innerText = "black";
btnBlack.classList.add("btnBlack")
btnrgb.classList.add("btnrgb")
body.appendChild(btnrgb);
body.appendChild(btnBlack);
body.appendChild(userInput)


function squareGrid(row, column) {

    for(let i = 0; i < row; i++ )
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < column; j++)
        {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}


squareGrid(16, 16);













/*

const container = document.querySelector(".container");
const row = document.createElement("div");
row.classList.add("row");
const column = document.createElement("div");
column.classList.add("column");

container.appendChild(row);
container.appendChild(column);

for(let i = 0; i <= 16; i++) {
    const rowDivs = document.createElement("div");
    rowDivs.classList.add("rowDivs");
    row.appendChild(rowDivs);
    for(let j = 1; j <= 16; j++) {
        const columnDivs = document.createElement("div");
        columnDivs.classList.add("columnDivs");
        column.appendChild(columnDivs);
    }
}

//const column = document.querySelector(".columnDivs");
//const row = document.querySelector(".rowDivs");

row.addEventListener('mouseover', function() {
    row.style.backgroundColor = 'rgb(255, 0, 0)';
  });

  column.addEventListener('mouseover', function() {
    column.style.backgroundColor = 'rgb(255, 0, 0)';
  });

*/
