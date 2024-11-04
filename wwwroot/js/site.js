$(document).ready(function () {
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
});
