// script.js
document.getElementById('signin-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Simulate an AJAX request to the server
        console.log('Sign In Button Clicked');
        console.log('Username:', username);
        console.log('Password:', password);
        
        
        // Here you would typically send a request to your server to authenticate the user
        // For example, using fetch:
        /*
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success - redirect user, show message, etc.
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error - show message, etc.
        });
        */
    } else {
        alert('Please enter both username and password.');
    }
});
backButton.addEventListener('click', () => {
    alert(redirecting to the http://127.0.0.1:5500/index.html); // Change 'index.html' to your home page URL
});

    
