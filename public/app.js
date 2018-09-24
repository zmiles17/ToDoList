const deleteItem = function (event) {
    event.preventDefault();
    const index = event.target.id;
    $.ajax({ url: "/delete", method: "DELETE", data: { index: index } }).then(listItem => {
        const variable = listItem.map((e, index) => `<input type="checkbox" class="checkbox"></input>
        <li>${e}</li>
        <i class="fas fa-times" id='${index}'></i><br>`);
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
        console.log(variable);
    });
    console.log(event.target.id);
    console.log(index);
}

const submitItem = function (event) {
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { TodoItem: data } }).then(data => {
        const variable = data.map((element, index) => `<input type="checkbox" class="checkbox"></input>
        <li>${element}</li>
        <i class="fas fa-times" id='${index}'></i><br>`)
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
    });
    
}


$('form').on('submit', submitItem);


