//everything related to add button 

var addButton = document.getElementById("add-button");

addButton.addEventListener("click", addToDoItem);


var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

  function newToDoItem(itemText, completed) 
    {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) 
    {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
    }

  function addToDoItem() 
    {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
    }

  function toggleToDoItemState() 
    {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
    }

// everything related to clear completed button

var clearCompletedButton = document.getElementById("clear-completed-button");

clearCompletedButton.addEventListener("click",clearCompletedItems);

  function clearCompletedItems()
    {
      var CompletedItems = toDoList.getElementByClassName("completed");
     
     while (completedItems.length>0)
     {
       
       completedItems.item(0).remove();
       
     }
      
    }















