$(function() {

    //  ACCORDION
    $(".accordion-header").click(function() {
        $(".accordion-content").slideUp();
        $(this).next(".accordion-content").slideDown();
    });

    //  AJAX - TO-DO ITEMS
    $(".todos button").click(function() {
        $.ajax({
            url: "https://dummyjson.com/todos",
            method: "GET",
            success: function(data) {
                const ul = $(".todos ul");
                ul.empty();
                data.todos.forEach(todo => {
                    ul.append('<li>${todo.todo}</li>');
                });
            },
            error: function() {
                alert("Hubo un error al cargar los To-Do items.");
            }
        });
    });

});

