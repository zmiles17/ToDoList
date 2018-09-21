
const addListItem = function(event){
    event.preventDefault();
    console.log('Anthing');
    $.getJSON('/api/list').then(data => {
        console.log(data);
    const variable = data.map(element => `<li>${element}</li>`)
    $('#todo-list').html(variable);
    console.log(variable);
    
});
}

const submitItem = function(event){
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({url: "/add", method: "POST", data: data});
}

$('form').on('submit', submitItem);
$('button').on('click', addListItem);


