// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateButton").click(function () {
        var hours = parseFloat($("#hours").val());
        var price = parseFloat($("#price").val().replace("$", ""));

        // Validation
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a positive number of hours.");
            return;
        }

        // Calculate total
        var total = hours * price;

        // Display total
        $("#total").val("$" + total.toFixed(2));
    });
});


