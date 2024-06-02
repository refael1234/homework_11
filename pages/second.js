
const check = ()=>{
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('user',username)
    console.log(username)
    if (username.length < 4 || username.length > 8) {
        alert('Username must be between 4 and 8 characters.');
        return false;
    }

    if (password.length < 5 || password.length > 10 || !password.includes('$')) {
        alert('Password must be between 5 and 10 characters and contain $');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password must match.');
        return false;
    }

    if (!email.includes('@')) {
        alert('Email address must contain @.');
        return false;
    }

    alert('Registration successful!');


}

    