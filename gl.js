let items = 0;
let li_index = 0;
let checked = 0;

function displayCount() {
  document.getElementById("item_count").innerHTML = "Number of Items: "+items;
  document.getElementById("checked_count").innerHTML = "Checked Items: "+checked;
}

function addTODO() {

  let todo = window.prompt("Enter TODO Task");
  console.log(todo);
  if (todo == null || todo.length == 0){
    alert("Forgot to Name Item");
  } else {
    // let ul = document.getElementById("grocery_list");
    // Above and Below Work; getElementByTagName("ul") does not work
    let ul = document.querySelector("ul")
    let li = document.createElement("li");
    let label = document.createElement("label");
    label.appendChild(document.createTextNode(String(todo)));
    li.appendChild(label);

    // Creating Checkbox for a list item
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("id", "c"+li_index);
    checkbox.setAttribute("onClick", "checkClick(this.id)");

    // Creating Delete button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteButton");
    li.setAttribute("id", li_index);
    deleteButton.setAttribute("onClick", "deleteCheck(this.parentNode.id)");
    deleteButton.appendChild(document.createTextNode("Delete"));

    // Appending elements to list item and list
    label.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    li_index++;
    items++;

    displayCount();
  }

}

function checkClick(index) {
  console.log(index);
  let checkbox = document.getElementById(index);
  console.log(checkbox);

  if (checkbox.checked){
    checked++;
  }

  if (!checkbox.checked){
    checked--;
  }
  console.log(checked);

  displayCount();
}

function deleteCheck(index) {
  console.log(index);
  let li = document.getElementById(index);
  let checked_index = "c"+index;
  console.log(li);
  if(document.getElementById(checked_index).checked){
    checked--;
  }

  li.remove();
  items--;



  displayCount();
}
