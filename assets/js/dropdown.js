// Get the dropdown button and content
const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

// Add a click event listener to the button
dropdownBtn.addEventListener("click", function() {
    // Toggle the "show" class to display or hide the dropdown content
    dropdownContent.classList.toggle("show");
});

// Close the dropdown when the user clicks outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        for (let dropdown of dropdowns) {
            if (dropdown.classList.contains("show")) {
                dropdown.classList.remove("show");
            }
        }
    }
});
