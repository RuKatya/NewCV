function hendleSendData(evt) {
    evt.preventDefault()

    const formObj = {}
    const subImg = []
    const usedTo = []

    for (let field of evt.target) {
        if (field.type !== 'submit') {
            if (field.type === 'file') {
                if (field.name === "mainImg") {
                    formObj[field.name] = field.value;
                } else if (field.name.includes("subImg")) {
                    if (field.value.length > 0) {
                        subImg.push(field.value)
                    }
                }
            } else if (field.name.includes("usingBy")) {
                if (field.value.length > 0) {
                    usedTo.push(field.value)
                }
            } else {
                formObj[field.name] = field.value;
            }
        }
    }

    formObj['subImg'] = subImg
    formObj['usedTo'] = usedTo

    const { data } = axios.post('/sendNewProject', { formObj })
    if (data.ok) {
        alert('done')
    }
}