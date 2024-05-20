const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("List_container");

function addTask() {
  if (inputBox.value === "") {
    alert("You Must Wite Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveDate();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();
