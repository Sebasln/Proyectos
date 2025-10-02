document.addEventListener("DOMContentLoaded", function () {

    const contactFormContainer = document.querySelector(".contactFormContainer");
    const addContactButton = document.querySelector(".addContactButton");
    const saveButton = document.querySelector(".saveButton");
    const contactForm = document.querySelector(".contactForm");
    const contactsListContainer = document.querySelector(".contactsListContainer");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const toggleContactForm = () => {
        contactFormContainer.classList.toggle('visible');
        if (contactFormContainer.classList.contains('visible')) {
            addContactButton.textContent = "Close";
        } else {
            addContactButton.textContent = "Add Contact";
        }
    };

    addContactButton.addEventListener("click", toggleContactForm);

    saveButton.addEventListener("click", function () {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Eliminar mensaje de error anterior si existe
        const existingError = contactForm.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        if (name !== "" && email !== "") {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'contact';
            contactDiv.innerHTML = `
                <h2>New contact</h2>
                <label><b>Name:</b> <span>${name}</span></label>
                <input placeholder="Name" type="text" name="editName" class="hidden" value="${name}">
    
                <label><b>Email:</b> <span>${email}</span></label>
                <input placeholder="123@gmail.com" type="email" name="editEmail" class="hidden" value="${email}">
                <div style="display: flex; justify-content: center; padding: 10px; gap: 10px;">
                    <button class="deleteButton">Delete</button>
                    <button class="editButton">Edit</button>
                </div>
            `;
            contactsListContainer.append(contactDiv);

            nameInput.value = "";
            emailInput.value = "";
            toggleContactForm();

        } else {
            const errorP = document.createElement('p');
            errorP.textContent = "Please, complete all fields";
            errorP.style.color = "red";
            errorP.className = 'error-message';
            contactForm.append(errorP);
        }
    });

    contactsListContainer.addEventListener("click", function (event) {
        const target = event.target;
        const contact = target.closest(".contact");

        if (target.classList.contains("deleteButton")) {
            contact.remove();
        }else if (target.classList.contains("editButton")) {

            target.textContent = "Save";
            target.classList.add("saveButton");
            target.classList.remove("editButton");

            const nameLabel = contact.querySelector('label:nth-of-type(1)');
            const emailLabel = contact.querySelector('label:nth-of-type(2)');
            const editNameInput = contact.querySelector('input[name="editName"]');
            const editEmailInput = contact.querySelector('input[name="editEmail"]');

            nameLabel.classList.toggle('hidden');
            emailLabel.classList.toggle('hidden');
            editNameInput.classList.toggle('hidden');
            editEmailInput.classList.toggle('hidden');

        }else if (target.classList.contains("saveButton")) {
            const nameLabel = contact.querySelector('label:nth-of-type(1)');
            const emailLabel = contact.querySelector('label:nth-of-type(2)');
            const editNameInput = contact.querySelector('input[name="editName"]');
            const editEmailInput = contact.querySelector('input[name="editEmail"]');


            nameLabel.querySelector('span').textContent = editNameInput.value;
            emailLabel.querySelector('span').textContent = editEmailInput.value;

            nameLabel.classList.toggle('hidden');
            emailLabel.classList.toggle('hidden');
            editNameInput.classList.toggle('hidden');
            editEmailInput.classList.toggle('hidden');

            target.textContent = "Edit";
            target.classList.remove("saveButton");
            target.classList.add("editButton");
        }
    });
});