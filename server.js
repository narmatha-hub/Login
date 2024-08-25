 document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageElement = document.getElementById('message');
            
            if (username === 'narmatha' && password === '1234') {
                messageElement.innerHTML = '<a href="home.html">Go to Dashboard</a>';
                messageElement.style.color = 'green';
            } else {
                messageElement.textContent = 'Invalid username or password.';
                messageElement.style.color = 'red';
            }
        });
