document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('https://formspree.io/f/mdkngdne', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        }).then(data => {
            // Display a success message on the page
            formMessage.innerHTML = '<p class="success-message">Thank you for your message! We will get back to you soon.</p>';
            form.reset(); // Reset the form fields
        }).catch(error => {
            // Display an error message on the page
            formMessage.innerHTML = '<p class="error-message">Oops! Something went wrong. Please try again later.</p>';
            console.error('Error:', error);
        });
    });
});
