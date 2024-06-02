const user = localStorage.getItem('user')
console.log(user)
document.getElementById('userName').innerHTML = 'hello ' + user