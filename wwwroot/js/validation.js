document.addEventListener('DOMContentLoaded', function () {
    const regSubmit = document.getElementById('registerSubmit');

    if (regSubmit) {
        regSubmit.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission until validation is complete
            let isValid = true;

            // Validate Full Name (no numbers allowed)
            const name = document.getElementById('registerName').value;
            const nameError = document.getElementById('nameError');
            const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
            if (!name || !namePattern.test(name)) {
                nameError.textContent = "Full name is required and should contain only letters.";
                isValid = false;
            } else {
                nameError.textContent = "";
            }

            // Validate Enrollment Number (only numbers allowed)
            const enrollment = document.getElementById('registerEnrollment').value;
            const enrollmentError = document.getElementById('enrollmentError');
            const enrollmentPattern = /^[0-9]+$/; // Only numbers
            if (!enrollment || !enrollmentPattern.test(enrollment)) {
                enrollmentError.textContent = "Enrollment number is required and should contain only numbers.";
                isValid = false;
            } else {
                enrollmentError.textContent = "";
            }

            // Validate Email
            const email = document.getElementById('registerEmail').value;
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                emailError.textContent = "Valid email is required.";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Validate Mobile Number (only numbers, exactly 10 digits)
            const mobile = document.getElementById('registerMobile').value;
            const mobileError = document.getElementById('mobileError');
            const mobilePattern = /^[0-9]{10}$/;
            if (!mobile || !mobilePattern.test(mobile)) {
                mobileError.textContent = "Mobile number is required and must be exactly 10 digits.";
                isValid = false;
            } else {
                mobileError.textContent = "";
            }

            // Validate Guardian/Parent Mobile Number (only numbers, exactly 10 digits)
            const guardianMobile = document.getElementById('registerGuardianMobile').value;
            const guardianMobileError = document.getElementById('parentMobileError');
            if (!guardianMobile || !mobilePattern.test(guardianMobile)) {
                guardianMobileError.textContent = "Guardian/Parent mobile number is required and must be exactly 10 digits.";
                isValid = false;
            } else {
                guardianMobileError.textContent = "";
            }

            // Validate Password (minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
            const password = document.getElementById('registerPassword').value;
            const passwordError = document.getElementById('passError');
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
            if (!password || !passwordPattern.test(password)) {
                passwordError.textContent = "Password must be at least 8 characters long, with uppercase, lowercase, number, and special character.";
                isValid = false;
            } else {
                passwordError.textContent = "";
            }

            // Validate Address (required field)
            const address = document.getElementById('registerAddress').value;
            const addressError = document.getElementById('addError');
            if (!address) {
                addressError.textContent = "Address is required.";
                isValid = false;
            } else {
                addressError.textContent = "";
            }

            // Submit the form if all fields are valid
            if (isValid) {
                document.getElementById('registerForm').submit();
            }
        });
    }

    const loginSubmit = document.getElementById('loginSubmit');

    if (loginSubmit) {
        loginSubmit.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission until validation is complete
            let isValid = true;

            // Validate Email
            const email = document.getElementById('loginEmail').value;
            const emailError = document.getElementById('loginemailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                emailError.textContent = "Valid email is required.";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Validate Password (minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
            const password = document.getElementById('loginPassword').value;
            const passwordError = document.getElementById('passwordError');
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
            if (!password || !passwordPattern.test(password)) {
                passwordError.textContent = "Password must be at least 8 characters long, with uppercase, lowercase, number, and special character.";
                isValid = false;
            } else {
                passwordError.textContent = "";
            }

            // Submit the form if all fields are valid
            if (isValid) {
                document.getElementById('loginForm').submit();
            }
        });
    }
});
