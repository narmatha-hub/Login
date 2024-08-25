document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    
    if (username === 'narmatha' && password === '1234') {
        window.location.href = 'dashboard.html';
    } else {
        messageElement.textContent = 'Invalid username or password.';
    }
});

