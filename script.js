const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

// Adds the todo to the list
function addTask() {
  if (inputBox.value === "") {
    alert("Enter something.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10008";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}
