
//everything related to add button 

var addButton = document.getElementById("add-button");
var clearCompleted = document.getElementById("clear-completed-button");
var emptyList = document.getElementById("empty-button");
var saveList = document.getElementById("save-button");

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");


  addButton.addEventListener("click", addToDoItem);
  clearCompleted.addEventListener("click",clearCompletedToDoItems);
  emptyList.addEventListener("click",emptyToDoList);
  saveList.addEventListener("click",saveToDoList);
  
  
  
  
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

// everything related to removing items

  function clearCompletedToDoItems()
    {
      var completedItems = toDoList.getElementsByClassName("completed");
     
      while (completedItems.length>0){
       
       completedItems.item(0).remove();
       
       }
      
    }

  function emptyToDoList(){
    
    var toDoItems = toDoList.children;
    
    while (toDoItems.length>0){
      
     toDoItems.item(0).remove();
      
    }
    
  }













