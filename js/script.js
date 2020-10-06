function confirm() {
    if (document.getElementsByClassName("input") = null) {
        var button = document.getElementById("submit_button");
        button.addEventListener("click", function() {

            alert("We will notify you when your iPhone ships");
        })
    } else {
        alert("Please fill out the form");
    };
}
window.addEventListener('load', confirm);