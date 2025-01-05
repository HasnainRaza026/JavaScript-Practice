let todoArray = [];

function addTodo() {
    let inputTextElem = document.querySelector(".js-input-text");
    let inputDateElem = document.querySelector(".js-input-date");

    if ((!inputDateElem.value) || (!inputTextElem.value)) {
        alert("Todo text and Date are Required.");
        return;
    }

    todoArray.push([inputTextElem.value, inputDateElem.value]);
    inputTextElem.value = '';
    inputDateElem.value = '';

    renderTodoDiv()
}


function deleteTodo(id) {
    todoArray.splice(Number(id), 1)
    renderTodoDiv()
}


function renderTodoDiv() {
    let divElem = document.querySelector(".js-todos");
    divElem.innerHTML = "";

    for (let i=0; i<todoArray.length; i++) {
        divElem.innerHTML += `<div id="${i}">
                <div class="text">
                    <p>${todoArray[i][0]}</p>
                </div>
                <div class="date">
                    <p>${todoArray[i][1]}</p>
                </div>

                <div class="delt-button">
                    <button class="button" onclick="deleteTodo('${i}')">Delete</button>
                </div>
            </div>`;
    }
}