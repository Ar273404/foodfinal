// Get elements
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const closeBtn = document.getElementById('closeBtn');

// Show login form
loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
});


// Close login form
closeBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
});

// Close login form when clicking outside the form
window.addEventListener('click', (e) => {
    if (e.target === loginForm) {
        loginForm.style.display = 'none';
    }
});

// Prevent form submission for demonstration purposes
const loginFormElement = document.getElementById('loginForm');
loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted (for demonstration purposes only).');
});
