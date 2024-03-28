const body = document.querySelector("body")
const container = document.querySelector(".container");

const header = document.querySelector(".header")
header.addEventListener("mouseover", () => {
header.style.color = randomRGB();
})

const headerBtn = document.createElement("div")
const btnrgb = document.createElement("button");
const btnBlack = document.createElement("button");
const clear = document.createElement("button");
const erase = document.createElement("button");

const userInput = document.createElement("input");
userInput.placeholder ='input';
userInput.setAttribute("type", "number");
userInput.setAttribute("id", "userInput");
const userInputBtn = document.createElement("button");
userInputBtn.classList.add("UserInputbtn");
userInputBtn.textContent = "Go";


userInputBtn.addEventListener("click", () => {
    let gridSizeValue = document.getElementById("userInput").value;
    if ( gridSizeValue < 1 || gridSizeValue > 99) {
        alert("Please enter a value between 1 to 99");
    }
    else {
        //remove Existing divs in the container is Any
        const row = document.querySelectorAll('.row');
        row.forEach(row => row.remove());

        //then create new grid upon user input
        squareGrid(gridSizeValue);
    }    
})


headerBtn.classList.add("headerBtn");
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
headerBtn.appendChild(erase);
headerBtn.appendChild(clear);
headerBtn.appendChild(userInput)
headerBtn.appendChild(userInputBtn);


function squareGrid(rowxColumn) {
    //loop to append one column div easch iteration
    for(let i = 0; i < rowxColumn; i++ )
    {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        //loop to append row divs inside the column div 
        for (let j = 0; j < rowxColumn; j++)
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

//reset the canvas
function clearAll() {
    clear.addEventListener("click", () => {
        const column = document.querySelectorAll('.column');
        column.forEach( (column) => column.style.backgroundColor = "white");
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