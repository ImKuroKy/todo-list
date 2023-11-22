// Setting variables
const createNoteButton = document.querySelector(".input__button");
const inputHeadder = document.querySelector("#inputNoteHeader");
const inputParagraph = document.querySelector("#inputNoteAnnotation");
const notesPlaceholder = document.querySelector(".notes__placeholder");

/**
 * Errors in note creating method
 */
const checkError = () => {
    if (inputHeadder.value === "") {return false;}
    else {return true;}
};

/**
 * Note creating method
 */

const createNote = () => {
    
    if (checkError() === false) {
        /* Changing error visibility */
        document.querySelector(".notes__error").style.display = "inline-block";
        
        /* Clear text input*/
        inputParagraph.value = "";
    }
    else {
        // Changing error visibility
        document.querySelector(".notes__error").style.display = "none";
    
        /**
         * Defining the deleting method
         */
        const deleteNote = () => {
            while (noteDiv.firstChild) {
                noteDiv.removeChild(noteDiv.firstChild);
            }
            noteDiv.remove();
        }

        /**
         * Defining the editing method
         */ 
        const editNote = () => {
            noteHeadder.setAttribute("contenteditable", "true")
            if (typeof(noteParagraph !== undefined)) {
                noteParagraph.setAttribute("contenteditable", "true");
            }
            noteEditButton.textContent = "Подтвердить";            
            noteEditButton.removeEventListener('click', editNote);
            noteEditButton.addEventListener('click', confirmNote);
        }

        /** 
        * Defining the confirming method
        */
        const confirmNote = () => {
            noteHeadder.setAttribute("contenteditable", "false")
            if (typeof(noteParagraph !== undefined)) {
                noteParagraph.setAttribute("contenteditable", "false");
            }
            noteEditButton.textContent = "Изменить";            
            noteEditButton.removeEventListener('click', confirmNote);
            noteEditButton.addEventListener('click', editNote);
        }
        
        // Create new note
        const noteDiv = document.createElement('div');
        noteDiv.classList.add("userNote");
        noteDiv.draggable = true;

        const noteHeadder = document.createElement('h4');
        noteHeadder.classList.add("noteHeadder");
        noteHeadder.textContent = inputHeadder.value;
        noteDiv.appendChild(noteHeadder);

        // Create annotation if it's exists
        const noteParagraph = document.createElement('p');
        if (inputParagraph.value !== "") {
            noteParagraph.textContent = inputParagraph.value;
            noteParagraph.classList.add("noteParagraph");
            noteDiv.appendChild(noteParagraph);
        }
        
        const noteButtons = document.createElement('div');
        noteButtons.classList.add("noteButtons");
        noteDiv.appendChild(noteButtons);

        const noteEditButton = document.createElement("button");
        noteEditButton.classList.add("editButton");
        noteEditButton.setAttribute("type", "button");
        noteEditButton.textContent = "Изменить";
        noteEditButton.addEventListener("click", editNote);
        noteButtons.appendChild(noteEditButton);

        const noteDeleteButton = document.createElement("button");
        noteDeleteButton.classList.add("deleteButton");
        noteDeleteButton.setAttribute("type", "button");
        noteDeleteButton.textContent = "Удалить";
        noteDeleteButton.addEventListener("click", deleteNote);
        noteButtons.appendChild(noteDeleteButton);

        // Adding a note to a document
        notesPlaceholder.appendChild(noteDiv);
        
        // Clearing inputs
        inputHeadder.value = "";
        inputParagraph.value = "";
    };
};

// Adding events
notesPlaceholder.addEventListener("dragover", dndNote);
notesPlaceholder.addEventListener("dragenter", (e) => e.preventDefault());
createNoteButton.addEventListener("click", createNote);