document.getElementById("submit_button").onclick = function() { confirm() };

function confirm() {
    document.getElementById("submit_button").innerHTML = "We will notify you when you iPhone ships";
}
window.addEventListener('load', init);