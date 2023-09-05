var button = document.getElementById("listButton");
var buttonWithText = document.getElementById("button-with-text")
var listDiv = document.getElementById("listDiv");

// button.addEventListener("click", function(textAppearInDiv2) {
//     var content = document.getElementById("text").value;
//     const newDiv = document.createElement("div");
//     const newContent = document.createTextNode(content);
//     newDiv.appendChild(newContent);
//     const completedDiv = document.getElementById("completedDiv");
//     completedDiv.appendChild(newDiv);

//     // completedDiv.appendChild(document.createTextNode(content));
//     // content = document.getElementById("completedDiv").textContent;
// });

// button.addEventListener("click", function(resetButtonTextBox) {
//     var buttonReset = document.getElementById("listbutton");
//     var textReset = document.getElementById("text");
//     textReset.value = "";
// });

let appendButton = document.getElementById("appendButton");
appendButton.addEventListener("click", function(addingEntree) {
    const newDiv = document.createElement("div");  // wrapping everything with an extra div. you could skip this and just append the cloned node
    // const newContent = buttonWithText.cloneNode(true); 
    newDiv.appendChild(newContent);
    // creat html string with div that contains button and input
    // "<div id="button-with-text"> <Button id="listButton" class="listButton"></Button> <input type="text" id="text"></input></div>"
    // insert adjacent html to add the above html to the list
    let html = `
    <div id="button-with-text">
        <Button id="listButton" class="listButton"></Button>
        <input type="text" id="text"></input>
    </div>
`;
    listDiv.insertAdjacentHTML("afterbegin", html )
    var newListDivNode = listDiv.appendChild(newDiv);  // appendChild method returns handle to the new node - so capture that in new variable
    newListDivNode.firstElementChild.lastElementChild.value = "";  // lastChild was finding a spurious text node, so use lastElementChild instead
    // firstElementChild in the above line is necessary because you are wrapping everything in an extra div

    // new cloned buttons were not working because you hadn't added event listeners to the new buttons
    // in general cloning doesn't include event listeners
    // i copied and combined and tweaked your button.addEventListeners above

    newListDivNode.firstElementChild.firstElementChild.addEventListener("click", function() {
        // copy task to completed list
        var content = newListDivNode.firstElementChild.lastElementChild.value;
        const newCompletedListNode = document.createElement("div");
        const newCompletedListNodeContent = document.createTextNode(content);
        newCompletedListNode.appendChild(newCompletedListNodeContent);
        const completedDiv = document.getElementById("completedDiv");
        completedDiv.appendChild(newCompletedListNode);

        // reset button text box
        // var buttonReset = document.getElementById("listbutton");  //  this was not getting used
        // var textReset = document.getElementById("text");  // we don't need to look this up by Id - we already have it saved in newNewDiv    
        newListDivNode.firstElementChild.lastElementChild.value = "";        
    });


    // textBox.value = "";

});