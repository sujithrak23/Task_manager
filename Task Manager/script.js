"use strict";
function add()
{
    let temp=0;
  //creating div for displaying task
let input = document.getElementById("input-s");
let content = input.value;
let task = document.createElement("div");
task.classList.add("list");
task.textContent = content;

//creating div for displaying due date
let due = prompt("Enter the due date");
let duedate = document.createElement("div");
duedate.textContent = "Due date: " + due;
duedate.classList.add("due");
// getting done button
let donebutton=document.createElement("button");
donebutton.id="done-button";
let text=document.createTextNode("Done");
donebutton.appendChild(text);
donebutton.classList.add("done");
donebutton.addEventListener("click", function () {
    donebutton.style.backgroundColor = "green";
});
//delete button
let delbutton=document.createElement("button");
delbutton.id="del-button";
let text1=document.createTextNode("Delete");
delbutton.appendChild(text1);
delbutton.classList.add("delete");
delbutton.addEventListener("click", function () {
   
        let containermain = document.getElementById("list-ss");
        containermain.removeChild(container1);
      });

//appending two div elements inside a div
let container1 = document.createElement("div");
container1.appendChild(task);
container1.appendChild(duedate);
container1.appendChild(donebutton);
container1.appendChild(delbutton);

//appending container inside the main div
let containermain = document.getElementById("list-ss");
containermain.appendChild(container1);
input.value="";
//storing in local storage

let storage={
    contnet:task,
    due:duedate,};
let strarr=JSON.parse(localStorage.getItem('tasks'))||[];
strarr.push(storage);
localStorage.setItem('tasks', JSON.stringify(tasks));

input.value="";

  }
