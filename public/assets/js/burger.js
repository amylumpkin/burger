// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        const id = $(event.target).data("id");
        const newSleep = $(event.target).data("newDevoured");
        const newSleepState = { sleepy: newSleep };

        // Send the PUT request.
        $.ajax("/burger/api/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        
        event.preventDefault();

        const newburger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/burger/api", {
            type: "POST",
            data: newburger
        }).then(function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
  
    $(".delete-burger").on("click", function(event) {
        const id = $(event.target).data("id");

        // Send the DELETE request.
        $.ajax("/burger/api/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
