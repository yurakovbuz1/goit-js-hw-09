const KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
// const button = form.querySelector("button");
// button.addEventListener("click", onButtonClick)
textarea.addEventListener("input", handleTextareaPress);
input.addEventListener("input", handleInputPress)
form.addEventListener("click", onFormSubmit)

let info = {
    // email: "",
    // message: ""
};
getStoredData();


function getStoredData() {
    const savedMessage = JSON.parse(localStorage.getItem(KEY));
    if (savedMessage) {
        info.email = savedMessage.email;
        input.value = savedMessage.email;
        info.message = savedMessage.message;
        textarea.textContent = savedMessage.message;
    }
}

function handleInputPress(e) {
    if (e.target.nodeName !== "INPUT") return; 
    const email = e.target.value;
    info.email = email;
    localStorage.setItem(KEY, JSON.stringify(info));
};

function handleTextareaPress(e) {
    if (e.target.nodeName !== "TEXTAREA") return; 
    const message = e.target.value;
    info.message = message;
    localStorage.setItem(KEY, JSON.stringify(info));
};

function onFormSubmit(e) {
    e.preventDefault()
    if (e.target.nodeName !== "BUTTON") return; 
    if (input.value === "") {
        alert("Please, fill in your name.")
    }
    else if (textarea.value === "") {
        alert("Don't forget to leave your message!")
    } else {
        console.log(JSON.parse(localStorage.getItem(KEY)))
        textarea.value = "";
        input.value = "";
        localStorage.clear();
        info.email = "";
        info.message = "";
    }
}
