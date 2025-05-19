document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 

    let errorMessage = "";
    let successMessage = "";

    if (username === '' || email === '' || password === '') {
        errorMessage = "All Fields Are Required!";
    }
    else if (!emailRegex.test(email)) {
        errorMessage = "Please Enter Valid Email!";
    }
    else if (!passwordRegex.test(password)) {
        errorMessage = "Password At Least 6 Characters Required Numbers And Letters";
    }
    else {
        successMessage = "Signup Successful. Welcome " + username ;
    }

    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    }
     else {
        document.getElementById('success-message').textContent = successMessage;
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none'; 
    }

    setTimeout(function() {
        document.getElementById('error-message').textContent = "";
        document.getElementById('success-message').textContent = "";
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('success-message').style.display = 'none';
    }, 5000);
});
