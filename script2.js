// const inputBox = document.getElementById("input-box");
// const listcontainer = document.getElementById("listcontainer");

// function addtask() {
//     if (inputBox.value === '') {
//         alert("You must write a task");
//     } else {
//         let li = document.createElement("li");

//         // Create and append checkbox
//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.addEventListener("change", function () {
//             li.classList.toggle("checked");
//             saveData();
//         });
//         li.appendChild(checkbox);

//         // Add the task text
//         let taskText = document.createTextNode(inputBox.value);
//         li.appendChild(taskText);

//         // Add the close (×) span
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         span.addEventListener("click", function () {
//             li.remove();
//             saveData();
//         });
//         li.appendChild(span);

//         listcontainer.appendChild(li);
//     }
//     inputBox.value = "";
//     saveData();
// }

// function saveData() {
//     localStorage.setItem("data", listcontainer.innerHTML);
// }

// function showtask() {
//     listcontainer.innerHTML = localStorage.getItem("data");

//     // Re-bind checkbox and close button behavior after restoring from localStorage
//     const lis = listcontainer.querySelectorAll("li");
//     lis.forEach(li => {
//         const checkbox = li.querySelector("input[type='checkbox']");
//         if (checkbox) {
//             checkbox.addEventListener("change", function () {
//                 li.classList.toggle("checked");
//                 saveData();
//             });
//         }

//         const span = li.querySelector("span");
//         if (span) {
//             span.addEventListener("click", function () {
//                 li.remove();
//                 saveData();
//             });
//         }
//     });
// }

// showtask();



const inputBox= document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");
function addtask(){
    if(inputBox.value ===''){
        alert("You must write a task");
    }
    else{



    //    // Create and append checkbox
    let checkbox = document.createElement("input");
     checkbox.type = "checkbox";
    //     checkbox.addEventListener("change", function () {
    //         li.classList.toggle("checked");
    //         saveData();
    //     });
        li.appendChild(checkbox);



        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
      }
    inputBox.value="";
    saveData();

}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);

}

function showtask(){
    listcontainer.innerHTML= localStorage.getItem("data");


}
showtask()
