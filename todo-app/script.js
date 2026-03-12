let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === "") return;

tasks.push({text:taskText, completed:false});
input.value="";

saveTasks();
displayTasks();
}

function deleteTask(index){
tasks.splice(index,1);
saveTasks();
displayTasks();
}

function toggleTask(index){
tasks[index].completed = !tasks[index].completed;
saveTasks();
displayTasks();
}

function displayTasks(filter="all"){
let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

if(filter==="active" && task.completed) return;
if(filter==="completed" && !task.completed) return;

let li=document.createElement("li");

li.innerHTML=`
<span onclick="toggleTask(${index})" style="text-decoration:${task.completed?'line-through':'none'}">
${task.text}
</span>

<button onclick="deleteTask(${index})">Delete</button>
`;

list.appendChild(li);

});
}

function filterTasks(type){
displayTasks(type);
}

displayTasks();