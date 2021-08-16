document.getElementById("submit-btn").addEventListener("click", function () {
    const mailField = document.getElementById("user-email");
    const userEmail = mailField.value;

    console.log(userEmail);
    const passField = document.getElementById("user-passcode");
    const userPass = passField.value;
    console.log(userPass);
    if (userEmail == "arif@gmail.com" && userPass == "secret") {
        window.location.href = 'bankPage.html'
        
    } 
    else {
        window.location.href = 'notfound.html'
        
        
    }
    
})