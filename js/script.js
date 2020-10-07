$(document).ready(function() {
    $("#send").click(function(e) {
        e.preventDefault();
        var email = $("#email").val();
        var phone_number = $("#phone_number").val();
        var address = $("#address").val();
        var age = $("#age").val();

        if (!(email == '' || phone_number == '' || address == '' || age == '')) {
            $("#submitdata").empty();
            $("#submitdata").append("Email: " + email + "<br/>Phone number: " + phone_number + "<br/>Age: " + age);
            alert("We will notify you when your iPhone ships");
        } else {
            alert("Please Fill All Fields.");
        }
    });
});
Copy


// function confirm() {

// var button = document.getElementById("submit_button");
// button.addEventListener("click", function() {
// if (document.getElementsByClassName("input") != null) {
// alert("We will notify you when your iPhone ships");
// } else {
// alert("Please fill out the form");
// }

// });
// }
// window.addEventListener('load', confirm);