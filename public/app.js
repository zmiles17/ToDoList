

const submitItem = function (event) {
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { TodoItem: data } }).then(data => {
        const variable = data.map((element, index) => `<input type="checkbox" id="checkbox"></input><li id=${index}>${element}</li><i class="fas fa-times" id="x"></i><br>`)
        $('#todo-list').html(variable);
        $('#x').on('click', deleteItem);
    });
}

const deleteItem = function (event) {
    event.preventDefault();
    console.log(event.target);
    const index = $(`li`).attr("id");
    console.log(index);
    $.ajax({ url: "/delete", method: "DELETE", data: { index: index } }).then(listItem => {
        const variable = listItem.map((e, index) => e.listItem === `<input type="checkbox" id="checkbox"></input><li id=${index}>${e}</li><i class="fas fa-times" id="x"></i><br>`);
        $('#todo-list').html(variable);
    });
}


$('form').on('submit', submitItem);

