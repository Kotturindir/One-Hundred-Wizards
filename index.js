const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function timeStart(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(timeUpdate, 10);
        isRunning = true;
    }
}

function timeStop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function timeReset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function timeUpdate(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
for (let i = 0; i < 100; i++){
    const cellContainer = document.querySelector("#cellContainer");
    var newCell = document.createElement('div');
    newCell.textContent = "";
    newCell.id = String(i);
    newCell.className = "cell";
    cellContainer.append(newCell);
}

function CreateField(){
    n = 1;
    var items = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100);

    RemoveField()
    for (let i = 0; i < 100; i++){
        let item = items[Math.floor(Math.random()*items.length)];
        let index = items.indexOf(item);
        const cellContainer = document.querySelector("#cellContainer");
        var newCell = document.createElement('div');
        newCell.textContent = String(item);
        newCell.id = String(i);
        newCell.className = "cell";
        cellContainer.append(newCell);
        if (index > -1){
            items.splice(index, 1);
        }
    }
    
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("click", CellClicked));

    timeStart();
}

function ClearGame(){
    RemoveField()
    for (let i = 0; i < 100; i++){
        const cellContainer = document.querySelector("#cellContainer");
        var newCell = document.createElement('div');
        newCell.textContent = "";
        newCell.id = String(i);
        newCell.className = "cell";
        cellContainer.append(newCell);
    }
    
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("click", CellClicked));
    
    timeReset();
}

function RemoveField(){
    for (let i = 0; i < 100; i++){
        let cell = document.getElementById(String(i));
        cell.remove();
    }
}

const Header = document.querySelector("header");
let Start = document.createElement("button");
let Clear = document.createElement("button");
Start.textContent = "Начать Игру";
Clear.textContent = "Очистить Поле";
Start.addEventListener("click", CreateField);
Clear.addEventListener("click", ClearGame);
Header.append(Start, Clear);

var n = 1;

function InitializeGame(){
    cells.forEach(cell => cell.addEventListener("click", CellClicked));
}

function CellClicked(){
    const CellText = this.textContent;

    console.log(n);

    if(CellText == String(n)){
        UpdateCell(this);
        n = n + 1;
        if (n == 101){
            console.log("Yes");
            timeStop();
        }
        return;
    }
    else{
        console.log("No");
    }
}

function UpdateCell(cell){
    cell.innerHTML = "<img style='width: 50px; height: 50px;' src='gandalf-square.gif'>";
}
