$(document).ready(function () {
    // Show the registration popup with the message if TempData contains a message
    if ($('#popupMessageText').html().trim() !== "") {
        showPopup('registerPopup');

        // Hide the message after 5 seconds
        setTimeout(function () {
            $('#popupMessageText').fadeOut();  // Fade out the message
        }, 5000);
    }

    // Handler for dropdown button clicks
    $('.dropdown-button').click(function () {
        var semId = $(this).data('sem'); // Get semester ID from button data attribute
        var dropdownId = '#dropdown' + semId; // Determine the corresponding dropdown ID

        // Show the clicked dropdown and hide others
        var dropdowns = $('.dropdown-content');
        dropdowns.not(dropdownId).hide(); // Hide other dropdowns
        $(dropdownId).toggle(); // Toggle visibility of clicked dropdown
    });

    // Close dropdowns when clicking outside
    $(window).click(function (event) {
        if (!$(event.target).closest('.dropdown-container').length) {
            $('.dropdown-content').hide(); // Hide all dropdowns if clicking outside
        }
    });

    // Handle form submission via AJAX
    $('#registerForm').submit(function (e) {
        e.preventDefault(); // Prevent default form submission

        $.ajax({
            type: 'POST',
            url: '/Home/Register',  // Your register action URL
            data: $(this).serialize(),
            success: function (response) {
                // Show the appropriate message in the popup
                if (response.success) {
                    showPopup('registerPopup', `<div class="alert alert-success">${response.message}</div>`);
                } else {
                    showPopup('registerPopup', `<div class="alert alert-danger">${response.message}</div>`); 
                }
            },
            error: function () {
                showPopup('registerPopup', "An error occurred. Please try again.");
            }
        });
    });
});

// JavaScript to handle showing and hiding popups
document.getElementById("loginButton").addEventListener("click", function () {
    showPopup("loginPopup");
});

document.getElementById("registerButton").addEventListener("click", function () {
    showPopup("registerPopup");
});

function showPopup(popupId, message = "") {
    document.getElementById(popupId).style.display = "block";
    // Update message content dynamically (if needed)
    if (message) {
        document.getElementById("popupMessageText").innerHTML = message;
    }
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}
