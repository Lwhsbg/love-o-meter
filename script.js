
function calculatelove() {

    var sign1 = document.getElementById("sign1").value;
    var sign2 = document.getElementById("sign2").value;

    if (sign1 == "" || sign2 == "") {
        alert("Uhh maybe you need to choose the signs first?💔");
        return;
    }
    if ((sign1.includes("Gemini") && sign2.includes("Scorpio")) || (sign1.includes("Scorpio") && sign2.includes("Gemini"))){
        percentage = 100;
    }
    else {
        var percentage = Math.floor(Math.random() * 101);
    }
    document.getElementById("bar").style.width = percentage + "%";
    document.getElementById("result").innerHTML = percentage + "% 💗";

    var message = "";

    if ((sign1.includes("Gemini") && sign2.includes("Scorpio")) ||
        (sign1.includes("Scorpio") && sign2.includes("Gemini"))) {
        message = "Have 139 kids already yall what are you waiting for??";
    }
    else if (percentage <= 20) {
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
        message = "Marry each other right now";
    }

    var verdict = "";

    if ((sign1.includes("Gemini") && sign2.includes("Scorpio")) || (sign1.includes("Scorpio") && sign2.includes("Gemini"))) {
        verdict = "Get married today and live together forever."
    }

    else if (percentage <= 20) {
        verdict = "Dont let it get to you, million of fishes in the sea.";
    }
    else if (percentage <= 40) {
        verdict = "Yeeeah youre basically friendzoned.";
    }
    else if (percentage <= 60) {
        verdict = "You can unlock a situationship lil bro.";
    }
    else if (percentage <= 80) {
        verdict = "You got a really high chance of bagging this person wow.";
    }
    else {
        verdict = "Skip the situationship and just go for it.";
    }

    document.getElementById("message").innerHTML = message;
    document.getElementById("verdict").innerHTML = verdict;
    document.getElementById("hearts").innerHTML = "💗";
}

function resetlove() {

    document.getElementById("sign1").value = "";
    document.getElementById("sign2").value = "";

    document.getElementById("result").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("verdict").innerHTML = "";

    document.getElementById("bar").style.width = "0%";
    document.getElementById("hearts").innerHTML = "";
}
