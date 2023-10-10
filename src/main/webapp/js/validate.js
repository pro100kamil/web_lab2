function validate() {
    return validateY();
}

function validateY() {
    return getErrorY() === "";
}

function handlerY() {
    document.getElementById("error-message").textContent = getErrorY();
}

function getErrorY() {
    //возвращает строковую ошибку или пустую строку при отсутствии ошибок
    let input_y = document.getElementById("input_y");
    let y = input_y.value;

    if (y === "") {
        return "Y не должен быть пустым";
    }
    if (isNaN(y)) {
        return "Y должен быть числом";
    }
    if (String(y).length > 7) {
        return "Y должен быть числом, состоящим из менее 8 символов (<= 7)";
    }
    if (y <= -3 || y >= 3) {
        return "Y на промежутке (-3:3)";
    }
    return "";
}

let form = document.getElementById("form");
form.onsubmit = () => {
    handlerY();
    return validate();
};