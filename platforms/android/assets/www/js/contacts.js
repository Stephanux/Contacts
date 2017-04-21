function initialize() {
    var btn_contact = document.getElementById('btn_contact');
    document.addEventListener('focusout', getValueFromInput(this));
    btn_contact.addEventListener('click', writeContact);

}

function writeContact() {
    // todo : il faut parser le formulaire pour en faire du json.

}

function getValueFromInput(elem) {
    alert('eleme blur :' + elem);
}

window.onload = initialize();
