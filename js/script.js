function confirm() {
    var button = document.getElementById("submit_button");
    button.addEventListener("click", function() {

        alert("We will notify you when your iPhone ships");
    });
}
window.addEventListener('load', confirm);