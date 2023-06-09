// *********** Selectors ***********
let userInput = document.getElementById("input-item");
let addButton = document.getElementById("add-button");
let showTask = document.querySelector(".container");

// *********** Events ***********
addButton.addEventListener("click", () => {
    let userText = userInput.value;
    showTask.appendChild(createDiv(userText));
    // console.log(userText);
    // let checkbox = document.createElement("input");
    userInput.value = ""
})
// showTask.addEventListener("click", (e) =>{
//     console.log(e.target.className);
//     let lineP = document.querySelector(".pp")
//     // let siblingP = e.target.siblings()
//     // console.log(object);
//     if (e.target.type === "checkbox"){
//         console.log(e.y);
//         console.log(lineP);
//         lineP.classList.toggle("text-decoration-line-through")
//     }
// })
showTask.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
      let parentDiv = e.target.parentElement.parentElement;
      let lineP = parentDiv.querySelector("p");
      lineP.classList.toggle("text-decoration-line-through");
      if (lineP.classList.contains("text-decoration-line-through")) {
        setTimeout(() => {
          parentDiv.remove();
        }, 2000);
    }
  }});


// *********** functions ***********


function createDiv(userTextParameter){
    let newDiv = document.createElement("div");
    let newDivChild = document.createElement("div");
    let newInput = document.createElement("input");
    let newP = document.createElement("p");
    newDiv.className = "input-group mb-3 bg-light";
    newDivChild.className = "input-group-text";
    newInput.className = "form-check-input mt-0";
    newInput.type = "checkbox";
    newP.innerText = userTextParameter;
    newP.className = "m-auto pp"
    newDivChild.appendChild(newInput);
    newDiv.appendChild(newDivChild);
    newDiv.appendChild(newP);
    return newDiv;
}
