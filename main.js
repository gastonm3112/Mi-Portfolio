const form = document.querySelector("#contact_form");
const name = document.querySelector("#name");
const nameHelp = document.querySelector("#nameHelp");
const email = document.querySelector("#email");
const emailHelp = document.querySelector("#emailHelp");
const sendMessage = document.querySelector("#sendMessage");

form.addEventListener("submit", e => {
    e.preventDefault();

    if(name.value === "" || email === ""){
        if(name.value === ""){
            name.style.border = "1px solid #ec0101";
            nameHelp.innerHTML = "¡Por favor, completa este campo!";
        } if(email.value === ""){
            email.style.border = "1px solid #ec0101";
            emailHelp.innerHTML = "¡Por favor, completa este campo!";
        }
    } else {
        sendMessage.innerHTML = "Tu mensaje ha sido envíado";
        form.submit();
    }
})