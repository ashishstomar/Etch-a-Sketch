const body = document.querySelector("body")
const container = document.querySelector(".container");

const header = document.querySelector(".header")
header.addEventListener("mouseover", () => {
header.style.color = randomRGB();

})

const headerBtn = document.createElement("div")
const btnrgb = document.createElement("button");
const btnBlack = document.createElement("button");
const userInput = document.createElement("input");
userInput.placeholder ='input';
const clear = document.createElement("button");
const erase = document.createElement("button");

headerBtn.classList.add("headerBtn");
userInput.classList.add("userInput");
clear.classList.add("btn")
erase.classList.add("btn")
btnBlack.classList.add("btn")
btnrgb.classList.add("btn")

userInput.innerText = "Grid Size";
clear.textContent = "Clear";
erase.textContent = "Erase";
btnrgb.innerText = "RGB";
btnBlack.innerText = "Mono";
body.insertBefore(headerBtn, container);
headerBtn.appendChild(btnrgb);
headerBtn.appendChild(btnBlack);
headerBtn.appendChild(userInput)
headerBtn.appendChild(erase);
headerBtn.appendChild(clear);


function squareGrid(rowxColumn) {

    for(let i = 0; i < rowxColumn.toExponential(2); i++ )
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        console.log(row)
        for (let j = 0; j < rowxColumn.toExponential(2); j++)
        {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);

            btnBlack.addEventListener("click", () => {
                column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "black";
            })})

            btnrgb.addEventListener("click", () => {
                column.addEventListener("mouseover", () => {
                column.style.backgroundColor = randomRGB();
            })})

            erase.addEventListener("click", () => {
                column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "white";
            })})
            
        }
    }
    clearAll();
}

function clearAll() {
    clear.addEventListener("click", () => {
        window.location.reload();
        return false;
    })
}

function randomRGB() {
    let color = [];
    for(let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return  'rgb(' + color. join(', ') + ')';
    
}

squareGrid(16);






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
