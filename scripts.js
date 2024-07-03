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

    document.addEventListener('DOMContentLoaded', function() {
        const donationOptions = document.querySelectorAll('input[name="donation"]');
        const customAmountInput = document.getElementById('custom-amount');

        donationOptions.forEach(option => {
            option.addEventListener('change', function() {
                customAmountInput.value = '';
            });
        });

        customAmountInput.addEventListener('input', function() {
            donationOptions.forEach(option => option.checked = false);
        });

        document.querySelector('.donate-btn').addEventListener('click', function() {
            let selectedAmount = document.querySelector('input[name="donation"]:checked') ? document.querySelector('input[name="donation"]:checked').value : customAmountInput.value;
            if (!selectedAmount) {
                alert('Please select or enter a donation amount.');
            } else {
                // Process the donation with the selectedAmount
                alert('Thank you for your donation of $' + selectedAmount);
            }
        });
    });

