function calculatelove() {

    var sign1 = document.getElementById("sign1").value;
    var sign2 = document.getElementById("sign2").value;

    if (sign1 == "" || sign2 == "") {
        alert("Uhh maybe you need to choose the signs first?💔");
        return;
    }

    var percentage = Math.floor(Math.random() * 101);
    document.getElementById("bar").style.width = percentage + "%";

    document.getElementById("result").innerHTML = percentage + "% 💗";

    var message = "";

    if (percentage <= 20) {
        message = "Uhh just stay friends...";
    }
    else if (percentage <= 40) {
        message = "Ooooh you are in the stingzone...";
    }
    else if (percentage <= 60) {
        message = "This might be a little complicated, shoot your shot buddy who knows..";
    }
    else if (percentage <= 80) {
        message = "Oooh they definitely want you, go for it..";
    }
    else if (percentage <= 99) {
        message = "Go for it gng you got it in the bag.👿";
    }
    else {
        message = "Have 139 kids already what are yall waiting for?";
    }

    document.getElementById("message").innerHTML = message;
    document.getElementById("hearts").innerHTML = "💗💗💗";
}