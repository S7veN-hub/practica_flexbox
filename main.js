var button1 = document.getElementById("button1");

function showPanel() {
    var panel = document.getElementById("panel");
    if (panel.className == "hidden") {
        panel.className = "alert";
    } else if (panel.className == "alert") {
        panel.className = "hidden";
    }
}

button1.addEventListener("click", showPanel);