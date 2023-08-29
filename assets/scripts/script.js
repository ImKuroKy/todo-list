/* ToDo-list create script */
/* Note create method */
const createNote = (e) => {  
    if (inputNoteHeader.value !== "") {
        /* Changing error visibility */
        document.querySelector(".notes__error").style.display = "none";
        
        /* Delete method defining */
        const deleteNote = () => {
            while (divNoteButtons.firstChild) {
                divNoteButtons.removeChild(divNoteButtons.firstChild);
            }
            while (divNoteMain.firstChild) {
                divNoteMain.removeChild(divNoteMain.firstChild);
            }
            divNoteMain.remove();
        }

        /* Change method defining */
        const editNote = () => {
            hNewHeader.setAttribute('contenteditable', 'true');
            if (typeof(pNewParagraph) !== undefined) {
                pNewParagraph.setAttribute('contenteditable', 'true');
            }
            editButton.setAttribute('Value', 'Подтвердить');
            editButton.removeEventListener('click', editNote);
            editButton.addEventListener('click', confirmChanges);
        }

        /* Confirm method defining */
        const confirmChanges = () => {
            hNewHeader.setAttribute('contenteditable', 'false');
            if (typeof(pNewParagraph) !== undefined) {
                pNewParagraph.setAttribute('contenteditable', 'false');
            }
            editButton.setAttribute('Value', 'Изменить');
            editButton.removeEventListener('click', confirmChanges);
            editButton.addEventListener('click', editNote);
        }

        /* Create new note */
        let divNoteMain = document.createElement('div');
        divNoteMain.classList.add('notes__user__input')
        
        let hNewHeader = document.createElement('h4');
        divNoteMain.appendChild(hNewHeader);
        
        /* Create annotation if it is exists */
        let pNewParagraph = document.createElement('p');
        if (inputNoteAnnotation.value !== "") {
            divNoteMain.appendChild(pNewParagraph);
            pNewParagraph.textContent = inputNoteAnnotation.value;
        }   
        
        /* Setting values */
        hNewHeader.textContent = inputNoteHeader.value;
        
        /* Adding a note to a document */
        let inputAdress = document.getElementById(`notesPlaceholder`);
        inputAdress.appendChild(divNoteMain);
        
        /* Creating buttons */
        let divNoteButtons = document.createElement('div');
        divNoteButtons.classList.add('notes__buttons');
        divNoteMain.appendChild(divNoteButtons);
        
        /* Change button */
        let editButton = document.createElement('input');
        editButton.classList.add('notes__button__change');
        editButton.setAttribute('id', 'changeButton');
        editButton.setAttribute('type', 'button');
        editButton.setAttribute('value', 'Изменить');
        editButton.setAttribute('title', 'notes__placeholder__input');
        divNoteButtons.appendChild(editButton);
        editButton.addEventListener("click", editNote);

        /* Delete button */
        let deleteButton = document.createElement('input');
        deleteButton.classList.add('notes__button__change');
        deleteButton.setAttribute('id', 'deleteButton');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('value', 'Удалить');
        deleteButton.setAttribute('title', 'notes__placeholder__input');
        divNoteButtons.appendChild(deleteButton);
        deleteButton.addEventListener("click", deleteNote);

        /* Clear inputs */
        inputNoteAnnotation.value = "";
        inputNoteHeader.value = "";
    } else {
        /* Changing error visibility */
        document.querySelector(".notes__error").style.display = "inline-block";
        
        /* Clear text input*/
        inputNoteAnnotation.value = "";
    }

}

/* Drag'n'drop */


/* Connect addresses */
let inputNoteHeader = document.getElementById("inputNoteHeader");
let inputNoteAnnotation = document.getElementById("inputNoteAnnotation");
let bNewNote = document.getElementById("confirmButton");
bNewNote.addEventListener("click", createNote);