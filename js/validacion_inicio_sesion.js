const enviar = document.getElementById("btn-sesion")


function validarInputs(){ 
    
   
        const email = document.getElementById("email").value

        const pass = document.getElementById("pass").value

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === "" || !emailRegex.test(email)) {
            document.getElementById("invalidEmail").innerHTML = "Por favor, ingresa un email valido.";
            return;
        } else {
            document.getElementById("invalidEmail").innerHTML = "";
        }
        

        if (pass.trim() === "") {
            document.getElementById("invalidPass").innerHTML = "Por favor, completa el campo.";
            return;
        } else {
            document.getElementById("invalidPass").innerHTML = "";
        }
    
}

function borrarMensajeInvalido () {

    const email = document.getElementById("email").value

    const pass = document.getElementById("pass").value

    if (email.trim() !== "") {
        document.getElementById("invalidEmail").innerHTML = "";
        
    } 
    

    if (pass.trim() !== "") {
        document.getElementById("invalidPass").innerHTML = "";
        
    } 

}

