async function hendleLogin(evt) {
    evt.preventDefault()
    const userData = {}

    for (let field of evt.target) {
        if (field.type !== 'submit') {
            userData[field.name] = field.value;
        }
    }

    const { data } = await axios.post('/auth/login', { userData })

    if (data.login) {
        window.location.href = "edit.html"
    }
}

async function hendleReg(evt) {
    evt.preventDefault()
    const userData = {}

    for (let field of evt.target) {
        if (field.type !== 'submit') {
            userData[field.name] = field.value;
        }
    }

    const { data } = await axios.post('/auth/reg', { userData })
}

