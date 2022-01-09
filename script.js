function openForm() {
    document.getElementById("popup").style.display="block";
}

function closeForm() {
    document.getElementById("popup").style.display="none";
}

/* ---------------------------------------------------------------------------80 */
function flogin(){

    var vemail = document.getElementById('email').value;
    var vpw = document.getElementById('pw').value;

    if (vemail=='evanchowvlogs@gmail.com' & vpw=='evanchowvlogs') {
        alert("Login Successful!\nYou will now be directed to the Member's Page...");
    }
    else if (vemail=='the2010channel@gmail.com' & vpw=='the2010channel') {
        alert("Login Successful!\nYou will now be directed to the Member's Page...");
    }
    else if (vemail=='developer' & vpw=='developer') {
        alert("Login Successful!\nYou will now be directed to the Member's Page...");
    }
    else if (vemail=='free' & vpw=='free') {
        alert("Login Successful!\nYou will now be directed to the Member's Page...");
    }
    // else if (vpw.length < 6) {
    //     alert("Password minimum length is 6");
    // }
    else {
        alert("⚠Alert⚠ \nYour Email or Password is incorrect.\nPlease try again.\nIf you have forgotten your login credentials, click on 'Forgot password?'.");
    }

}

