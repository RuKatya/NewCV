function hendleSendData(evt) {
    evt.preventDefault();
    var formObj = {};
    var subImg = [];
    var usedTo = [];
    for (var _i = 0, _a = evt.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.type !== 'submit') {
            if (field.type === 'file') {
                if (field.name === "mainImg") {
                    formObj[field.name] = field.value;
                }
                else if (field.name.includes("subImg")) {
                    if (field.value.length > 0) {
                        subImg.push(field.value);
                    }
                }
            }
            else if (field.name.includes("usingBy")) {
                if (field.value.length > 0) {
                    usedTo.push(field.value);
                }
            }
            else {
                formObj[field.name] = field.value;
            }
        }
    }
    formObj['subImg'] = subImg;
    formObj['usedTo'] = usedTo;
    var data = axios.post('/sendNewProject', { formObj: formObj }).data;
    if (data.ok) {
        alert('done');
    }
}
