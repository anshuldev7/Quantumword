<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuantumWord - The Ultimate Secure Password Generator 🔐⚛️</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            transition: background 0.3s, color 0.3s;
        }
        .container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            transition: box-shadow 0.3s;
        }
        input, button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: none;
            font-size: 16px;
        }
        input {
            background: #333;
            color: #fff;
        }
        button {
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        button:active {
            transform: scale(0.95);
            box-shadow: 0px 0px 15px rgba(0, 255, 153, 0.7);
        }
        .dark-theme {
            background-color: #121212;
            color: #00ff99;
        }
        .dark-theme .container {
            background: #1e1e1e;
            box-shadow: 0px 0px 10px rgba(0, 255, 153, 0.5);
        }
        .dark-theme button {
            background: #00ff99;
            color: #000;
        }
        .dark-theme button:hover {
            background: #00cc77;
        }
        .light-theme {
            background-color: #ffffff;
            color: #000000;
        }
        .light-theme .container {
            background: #f0f0f0;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
        .light-theme button {
            background: #000000;
            color: #ffffff;
        }
        .light-theme button:hover {
            background: #333333;
        }
        .strength {
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body class="dark-theme">
    <div class="container">
        <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 10px;">🔐 QuantumWord - Generate Unbreakable Passwords Instantly ⚡</h1>
        
        <input type="number" id="length" placeholder="Enter password length" min="4" max="20">
        
        <div>
            <label><input type="checkbox" id="includeUppercase"> Include Uppercase</label>
            <label><input type="checkbox" id="includeNumbers"> Include Numbers</label>
            <label><input type="checkbox" id="includeSymbols"> Include Symbols</label>
        </div>
        
        <button onclick="generatePassword()">Generate Password</button>
        <input type="text" id="password" readonly>
        <button onclick="copyToClipboard()">Copy to Clipboard</button>
        <p class="strength" id="strength"></p>
        
        <button onclick="toggleTheme()">Toggle Theme</button>
    </div>

    <p style="margin-top: 20px; font-size: 16px; color: #aaa;">Secure your accounts effortlessly! Bookmark this page and come back anytime for a strong, random password. 🔒✨</p>

    <script>
        function generatePassword() {
            const length = document.getElementById("length").value || 8;
            const includeUppercase = document.getElementById("includeUppercase").checked;
            const includeNumbers = document.getElementById("includeNumbers").checked;
            const includeSymbols = document.getElementById("includeSymbols").checked;
            
            let chars = "abcdefghijklmnopqrstuvwxyz";
            if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (includeNumbers) chars += "0123456789";
            if (includeSymbols) chars += "!@#$%^&*()";
            
            let password = "";
            for (let i = 0; i < length; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            document.getElementById("password").value = password;
            checkStrength(password);
        }
        
        function copyToClipboard() {
            const passwordField = document.getElementById("password");
            passwordField.select();
            document.execCommand("copy");
            alert("Password copied to clipboard! 📋");
        }

        function checkStrength(password) {
            let strengthText = "";
            if (password.length < 6) {
                strengthText = "Weak 🔴";
            } else if (password.length < 12) {
                strengthText = "Medium 🟡";
            } else {
                strengthText = "Strong 🟢";
            }
            document.getElementById("strength").innerText = `Password Strength: ${strengthText}`;
        }

        function toggleTheme() {
            document.body.classList.toggle("dark-theme");
            document.body.classList.toggle("light-theme");
        }

        window.onload = generatePassword; // Auto-generate password on page load
    </script>
</body>
</html>
