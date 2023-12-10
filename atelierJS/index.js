function passValidation() {
    var password1 = document.getElementById("pass").value;
    var password2 = document.getElementById("passw").value;
  
    if (password1 !== password2) {
      alert("Les mots de passe ne correspondent pas !");
    }
  }
  
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    
    passValidation(); // Appel de la fonction de validation des mots de passe
  
    var nom = document.getElementById("name").value;
    var prenom = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("num").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("passw").value;
  
    // Vérification des règles de saisie
    if (!/^[a-zA-Z]+$/.test(nom) || nom.length < 3) {
      document.getElementById("nomError").innerHTML = "Le nom doit contenir au moins 3 lettres.";
      document.getElementById("nomError").style.color = "red";
    } else {
      document.getElementById("nomError").innerHTML = "";
    }
  
    if (prenom.length < 4) {
      document.getElementById("prenomError").innerHTML = "Le prénom doit contenir au moins 4 caractères.";
      document.getElementById("prenomError").style.color = "red";
    } else {
      document.getElementById("prenomError").innerHTML = "";
    }
  
    if (/\D/.test(telephone)) {
      document.getElementById("telephoneError").innerHTML = "Le numéro de téléphone ne doit contenir que des chiffres.";
      document.getElementById("telephoneError").style.color = "red";
    } else {
      document.getElementById("telephoneError").innerHTML = "";
    }
  
    if (password.length < 10 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      document.getElementById("passwordError").innerHTML = "Le mot de passe est faible";
      document.getElementById("passwordError").style.color = "red";
    } else {
      document.getElementById("passwordError").innerHTML = "";
    }
  
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML = "Les mots de passe ne correspondent pas.";
      document.getElementById("confirmPasswordError").style.color = "red";
    } else {
      document.getElementById("confirmPasswordError").innerHTML = "";
    }
  
       
            if (nom == "" || email == "" || password == "" || confirmPassword == ""|| telephone=="") {
                document.getElementById("error-message").style.display = "block";
                
            }
            else
            {
              document.getElementById("error-message").innerHTML = "";
            }
        
   
  });