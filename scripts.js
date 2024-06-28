document.addEventListener("DOMContentLoaded", function() {
    // Show the pop-up window
    var popup = document.getElementById("language-popup");
    popup.style.display = "flex"; // Use flex to center the content
});
document.addEventListener("DOMContentLoaded", function() {
    // Check if the language preference is already set
    var languagePreference = localStorage.getItem("languagePreference");

    // If no preference is set, show the pop-up window
    if (!languagePreference) {
        var popup = document.getElementById("language-popup");
        popup.style.display = "flex"; // Use flex to center the content
    }

    // Add event listeners to the buttons
    var englishButton = document.querySelector(".btn-english");
    var frenchButton = document.querySelector(".btn-french");

    englishButton.addEventListener("click", function() {
        localStorage.setItem("languagePreference", "english");
    });

    frenchButton.addEventListener("click", function() {
        localStorage.setItem("languagePreference", "french");
    });
});
