const deleteItem = function (event) {
    event.preventDefault();
    const index = event.target.id;
    $.ajax({ url: "/delete", method: "DELETE", data: { index: index } }).then(listItem => {
        const variable = listItem.map((e, index) => `<li><input type="checkbox" class="checkbox"></input>${e}<i class="fas fa-times" id='${index}'></i></li><br>`);
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
    });
}

const submitItem = function (event) {
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { TodoItem: data } }).then(data => {
        const variable = data.map((element, index) => `<li><input type="checkbox" class="checkbox"></input>${element}<i class="fas fa-times" id='${index}'></i></li><br>`)
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
    });
}

$('form').on('submit', submitItem);


