document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a loading message
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = 'Sending message...';

    try {
        // Simulate an API request (replace with your actual form handling logic)
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay

        formStatus.textContent = 'Thank you, your message has been sent!';
        formStatus.style.color = 'green';

        // Clear the form
        document.getElementById('contactForm').reset();
    } catch (error) {
        formStatus.textContent = 'An error occurred. Please try again later.';
        formStatus.style.color = 'red';
    }
});
