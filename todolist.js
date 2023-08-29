var button = document.getElementById("listButton");
var buttonWithText = document.getElementById("button-with-text")
var listDiv = document.getElementById("listDiv");

button.addEventListener("click", function(textAppearInDiv2) {
    var content = document.getElementById("text").value;
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(content);
    newDiv.appendChild(newContent);
    const completedDiv = document.getElementById("completedDiv");
    completedDiv.appendChild(newDiv);

    // completedDiv.appendChild(document.createTextNode(content));
    // content = document.getElementById("completedDiv").textContent;
});

button.addEventListener("click", function(resetButtonTextBox) {
    var buttonReset = document.getElementById("listbutton");
    var textReset = document.getElementById("text");
    textReset.value = "";
});

let appendButton = document.getElementById("appendButton");
appendButton.addEventListener("click", function(addingEntree) {
    const newDiv = document.createElement("div");
    const newContent = buttonWithText.cloneNode(true);
    newDiv.appendChild(newContent);
    listDiv.appendChild(newDiv);
    newContent.lastChild.innerHTML = "";

    // textBox.value = "";

});