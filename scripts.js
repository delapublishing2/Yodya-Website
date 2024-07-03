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
    document.addEventListener('DOMContentLoaded', function() {
        const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');
        const donationOptions = document.querySelectorAll('input[name="donation"]');
        const customAmountInput = document.getElementById('custom-amount');
        const stripeDonateBtn = document.getElementById('stripe-donate-btn');
    
        donationOptions.forEach(option => {
            option.addEventListener('change', function() {
                customAmountInput.value = '';
            });
        });
    
        customAmountInput.addEventListener('input', function() {
            donationOptions.forEach(option => option.checked = false);
        });
    
        stripeDonateBtn.addEventListener('click', async function() {
            let selectedAmount = document.querySelector('input[name="donation"]:checked') ? document.querySelector('input[name="donation"]:checked').value : customAmountInput.value;
            if (!selectedAmount) {
                alert('Please select or enter a donation amount.');
                return;
            }
    
            // Call your backend to create a Checkout Session
            const response = await fetch('/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: selectedAmount })
            });
            const session = await response.json();
    
            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({ sessionId: session.id });
            if (result.error) {
                alert(result.error.message);
            }
        });
    
        // PayPal button rendering
        paypal.Buttons({
            createOrder: function(data, actions) {
                let selectedAmount = document.querySelector('input[name="donation"]:checked') ? document.querySelector('input[name="donation"]:checked').value : customAmountInput.value;
                if (!selectedAmount) {
                    alert('Please select or enter a donation amount.');
                    return;
                }
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: selectedAmount
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    // Optionally, send the transaction details to your server
                });
            }
        }).render('#paypal-button-container');
    });
    
