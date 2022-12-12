const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

contrasena01 = document.getElementById("ct1");
contrasena02 = document.getElementById("ct2");

document.getElementById("btnGenerar").addEventListener('click', function() {
    contrasena01.textContent = creaPass()
    contrasena02.textContent = creaPass()
}





)





function creaPass() {
    let pass ="";
        for (let i = 1; i < 16; i++) {
            nro = Math.floor(Math.random() * characters.length)
            pass += characters[nro];
        }
    return pass;  
}