let todoArray = JSON.parse(localStorage.getItem("todos")) || [];

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
    localStorage.setItem("todos", JSON.stringify(todoArray))

    let divElem = document.querySelector(".js-todos");
    divElem.innerHTML = "";

    // A short technique for looping through the array (Prefered)
    todoArray.forEach(function(element, index) {
        divElem.innerHTML += `<div id="${index}">
                <div class="text">
                    <p>${element[0]}</p>
                </div>
                <div class="date">
                    <p>${element[1]}</p>
                </div>

                <div class="delt-button">
                    <button class="button" onclick="deleteTodo('${index}')">Delete</button>
                </div>
            </div>`;
    });

    // for (let i=0; i<todoArray.length; i++) {
    //     divElem.innerHTML += `<div id="${i}">
    //             <div class="text">
    //                 <p>${todoArray[i][0]}</p>
    //             </div>
    //             <div class="date">
    //                 <p>${todoArray[i][1]}</p>
    //             </div>

    //             <div class="delt-button">
    //                 <button class="button" onclick="deleteTodo('${i}')">Delete</button>
    //             </div>
    //         </div>`;
    // }
}

renderTodoDiv()