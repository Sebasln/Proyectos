var contacts = [];
// {name:'acito',email:'a@a.com'}
// {name:'b',email:'b@b.com'}
// {name:'c',email:'c@c.com'}

function createNewContact() {
    var contactMaker = document.querySelector('.addContact');
    contactMaker.style.display = contactMaker.style.display === 'block' ? 'none' : 'block';
}



function onSubmitNewContact(event) {
    event.preventDefault();
    event.stopPropagation();

    addContact(contacts);

    paint(contacts);
}

function addContact(_contacts) {
    var formName = document.getElementById("name").value;
    var formEmail = document.getElementById("email").value;

    var _contact = {
        name: formName,
        email: formEmail
    }

    _contacts.push(_contact)
}



function editContact(position, _contacts, event) {

    var formName = event.srcElement.children['name'].value;
    var formEmail = event.srcElement.children['email'].value;

    var _contact = {
        name: formName, email: formEmail
    }

    contacts[position] = _contact;


}


function paint(_contacts) {
    var htmlContacts = '';

    _contacts.forEach(function (_contact, index) {
        htmlContacts = htmlContacts + `
        <div class="contact">
            <p>${_contact.name}</p>
            <p>${_contact.email}</p>
            <button onclick="showForm(event, ${index})">edit</button>
            <button onclick="onclickDeleteContact(event, ${index})">delete</button>

            <form  class="form" onsubmit="onclickEditContact(event, ${index})">
        <input placeholder="name" name="name" >
        <input placeholder="email" name="email">
        <button>Save</button>
    </form>
        </div>
        `;

    });



    document.getElementById('contactsContainer').innerHTML = htmlContacts;
}


function showForm(event, position) {
    var form = event.srcElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling

    form.style.display = form.style.display = 'block';
}




function onclickDeleteContact(event, position) {
    event.preventDefault();
    event.stopPropagation();

    deleteContact(position, contacts);

    paint(contacts);
}


function deleteContact(position, _contacts) {
    _contacts.splice(position, 1);
}

function onclickEditContact(event, position) {
    event.preventDefault();
    event.stopPropagation();



    editContact(position, contacts, event);

    paint(contacts);
}





