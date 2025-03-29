// Auto-generate password on page load
document.addEventListener("DOMContentLoaded", generatePassword);

function generatePassword() {
    const length = document.getElementById("length").value || 8;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
    checkStrength(password);
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard! 📋");
}

function checkStrength(password) {
    let strength = "Weak";
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6 && (/[A-Z]/.test(password) || /\d/.test(password))) {
        strength = "Medium";
    }
    
    document.getElementById("strength-text").innerText = strength;
    document.getElementById("strength-text").style.color = strength === "Strong" ? "green" : strength === "Medium" ? "orange" : "red";
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
}
