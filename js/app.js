
const inputForm = document.getElementById("inputForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");

const userNameVerif = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const userEmailVerif = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const printMesage = e => {
    alertSuccess.classList.remove("d-none");
    // userName.value = "";
    // userEmail.value = "";
}

const hideMessage = e => {
    alertSuccess.classList.add("d-none");
    userName.classList.remove("is-valid");
    userEmail.classList.remove("is-valid");
    userEmail.value = "";
    userName.value = "";
}

const printErroMesage = errores => {
    errores.forEach(item => {
        item.type.classList.remove("d-none");
        item.type.classList.add("is-invalid");
        item.type.textContent = item.msg;
    });
}

inputForm.addEventListener("submit", e => {
    e.preventDefault();

    // Informa si hay espacios en blanco en los input
    // console.log(!userName.value.trim());
    // console.log(!userEmail.value.trim());

    const errores = [];

    if (!userNameVerif.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        console.log("formato no valido 1");
        errores.push({
            type: alertName,
            msg: "No valid format in username area, just letters"
        })
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    if (!userEmailVerif.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        console.log("formato no valido 2");
        errores.push({
            type: alertEmail,
            msg: "No valid format in email area"
        })
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        printErroMesage(errores); 
        return;
    }

    console.log(`
    The form has been proceseed
    Username: ${userName.value}
    Email: ${userEmail.value}
    `)

    printMesage();
    setTimeout(() => {
        hideMessage();
    }, 1500);
});