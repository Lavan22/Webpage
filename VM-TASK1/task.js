const body = document.querySelector("body"),
sidebar=body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle");

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
});

function toggleTable() {
    var table = document.getElementById("top");
    if (table.style.display === "none") {
       table.style.display = "table"; // Show the nav bar-side tab
    } else {
       table.style.display = "none"; // Hide the nav bar-side tab
     }
}

function toggleTable1() {
    var table = document.getElementById("myTable");
    if (table.style.display === "none") {
        table.style.display = "table"; // Show the table
    } else {
        table.style.display = "none"; // Hide the table
     }
 }