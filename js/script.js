function confirm() {
    var button = document.getElementById("submit_button");
    button.addEventListener("click", function() {
        if (document.getElementsByClassName("input") != null) {

            alert("We will notify you when your iPhone ships");
        } else {
            alert("Please fill out the form");
        }

    });
}
window.addEventListener('load', confirm);