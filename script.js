function skopiujMail() {
    var znacznik = document.getElementById("kontakt");
    var elementDoSkopiowania = document.createElement("textarea");
    elementDoSkopiowania.value = "frytatolord@gmail.com";
    document.body.appendChild(elementDoSkopiowania);
    elementDoSkopiowania.select();
    document.execCommand("copy");
    document.body.removeChild(elementDoSkopiowania);
    alert("Mail został skopiowany do schowka: frytatolord@gmail.com");
}

function skopiujDc() {
    var znacznik = document.getElementById("discord");
    var elementDoSkopiowania = document.createElement("textarea");
    elementDoSkopiowania.value = "lord_frytek";
    document.body.appendChild(elementDoSkopiowania);
    elementDoSkopiowania.select();
    document.execCommand("copy");
    document.body.removeChild(elementDoSkopiowania);
    alert("Discord tag został skopiowany: lord_frytek");
}