function initialize() {
        var btn_contact = document.getElementById('btn_contact');
        btn_contact.addEventListener('click', writeContact);

    }
    /** ***************************** fonction qui convertie les données d'un formulaire    ********** */
    /** ***************************** en Object JavaScript pour les insérer dans le tableau ********** */
    /** ***************************** contacts récupérer s'il existe dans localStorage     ********** */
function writeContact(evt) {
        // todo : il faut parser le formulaire pour en faire du json.
        var formData = new FormData(document.getElementById('contactform'));
        var form = document.getElementById('contactform');
        var contact = {};
        for (var i = 0; i < form.length; i++) {
            console.log('form[' + i + '].name : ' + form[i].name);
            console.log('value : ' + formData.get(form[i].name));
            contact[form[i].name] = formData.get(form[i].name);
        }
        delete contact.button; // le bouton submit est envoyé dans un POST?
        console.log('contact : ', contact);
        var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        evt.preventDefault();
        form.reset();
    }
    /** au chargement de la page contacts.html appel de la fonction initialize() **/
window.onload = initialize();
