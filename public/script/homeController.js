function submitForm() {
    console.log('login Function called');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username,
        password
    }

    axios.post('/userLogin', data).then((res) => {
        console.log('res >>', res);

        if (res && res.data && res.data.status) {
            res.get('/');
        }
    }).catch((err) => {
        console.log('err >>', err);
    });
}

function registerFormSubmit() {
    console.log('registration function called');

    const username = document.getElementById('rUsername').value;
    const password = document.getElementById('rPassword').value;

    const data = {
        username,
        password,
    }

    axios.post('/userRegister', data).then((res) => {
        console.log('res >>', res);

        if (res && res.data && res.data.status) {
            res.get('/login');
        }
    }).catch((err) => {
        console.log('err >>', err);
    });
}