function init() {
    var button = document.getElementById("submit_button");
    button.addEventListener("click", function buttonPress() {
        var email = document.getElementById("email_input").value;
        var phone_number = document.getElementById("phone_input").value;
        var address = document.getElementById("address_input").value;
        var age = document.getElementById("number_input").value;
        if (email && phone_number && address && age) {
            alert("We will notify you when your iPhone ships");
        } else {
            alert("Please fill out the form");
        }
    })
    window.addEventListener('load', init);
}