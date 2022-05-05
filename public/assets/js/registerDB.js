const form = document.getElementById('reg-form')
form.addEventListener('submit', registerUser)

async function registerUser(event) {
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const result = await fetch('auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            email
        })
    }).then((res) => res.json())

    if (result.status === 'ok') {
        window.location.href = "/success"
    } else {
        document.querySelector('.notification').innerHTML = result.error;
    }
}