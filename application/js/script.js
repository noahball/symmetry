document.getElementById("select-a-game").style.display = "none";
document.getElementById("view-game").style.display = "none";

setTimeout(function () {
    document.getElementById("loading-text").classList.add("animate__animated");
    document.getElementById("loading-text").classList.add("animate__fadeOut");
    setTimeout(function () {
        document.getElementById("loading-text").style.display = "none";
        selectAGame();
    }, 1000);
}, 2000);

function selectAGame() {
    document.getElementById("select-a-game").style.display = "block";
    document.getElementById("select-a-game").classList.add("animate__animated");
    document.getElementById("select-a-game").classList.add("animate__fadeIn");
}

function view(name) {
    document.getElementById("select-a-game").classList.add("animate__animated");
    document.getElementById("select-a-game").classList.add("animate__fadeOut");
    setTimeout(function () {
        document.getElementById("select-a-game").style.display = "none";
        continueView(name);
    }, 1000);
}

function continueView() {
    document.getElementById("view-game").style.display = "block";
    document.getElementById("view-game").classList.add("animate__animated");
    document.getElementById("view-game").classList.add("animate__fadeIn");
}