
// CONTACT FORM VALIDATION
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  // Input elements
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");

  // Error message containers
  const nameError = document.getElementById("test-contact-error-name");
  const emailError = document.getElementById("test-contact-error-email");
  const subjectError = document.getElementById("test-contact-error-subject");
  const messageError = document.getElementById("test-contact-error-message");

  // Success message
  const successMessage = document.getElementById("test-contact-success");

  // Helper function: validate email format
  function isValidEmail(email) {
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return pattern.test(email.trim());
  }
  // Helper: show error
  function showError(input, message, errorContainer) {
    errorContainer.textContent = message;
    input.classList.add("error");
  }
  // Helper: clear error
  function clearError(input, errorContainer) {
    errorContainer.textContent = "";
    input.classList.remove("error");
  }
  // Validate each field
  function validateField(input) {
    const id = input.id;
    
    switch (id) {
      case "contact-name":
        if (input.value.trim() === "") {
          showError(input, "Full name is required.", nameError);
          return false;
        } else {
          clearError(input, nameError);
          return true;
        }

      case "contact-email":
        if (input.value.trim() === "") {
          showError(input, "Email is required.", emailError);
          return false;
        } else if (!isValidEmail(input.value)) {
          showError(input, "Please enter a valid email (e.g., name@example.com).", emailError);
          return false;
        } else {
          clearError(input, emailError);
          return true;
        }

      case "contact-subject":
        if (input.value.trim() === "") {
          showError(input, "Subject is required.", subjectError);
          return false;
        } else {
          clearError(input, subjectError);
          return true;
        }

      case "contact-message":
        if (input.value.trim() === "") {
          showError(input, "Message is required.", messageError);
          return false;
        } else if (input.value.trim().length < 10) {
          showError(input, "Message must be at least 10 characters.", messageError);
          return false;
        } else {
          clearError(input, messageError);
          return true;
        }

      default:
        return true;
    }
  }

  // Listen for input changes live validation
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => validateField(input));
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop actual submission

    let isValid = true;

    // Validate all fields at once
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      const valid = validateField(input);
      if (!valid) isValid = false;
    });

    // Show success or keep errors visible
    if (isValid) {
      successMessage.hidden = false;
      successMessage.textContent = "✅ Your message has been sent successfully!";
      form.reset();

      // Remove all previous error styles
      [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
        input.classList.remove("error");
      });

      // Hide success after few seconds
      setTimeout(() => {
        successMessage.hidden = true;
      }, 4000);
    } else {
      successMessage.hidden = true;
    }
  });
});
