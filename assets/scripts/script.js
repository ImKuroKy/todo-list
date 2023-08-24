// Скрипт создания ToDo-листов 
let countOfNotes = 1;


const create = (e) => {
    let dNewDivision = document.createElement('div');
    let hNewHeader = document.createElement('h4');
    let pNewParagraph = document.createElement('p');
    dNewDivision.appendChild(hNewHeader);
    dNewDivision.appendChild(pNewParagraph);
    hNewHeader.textContent = `${countOfNotes}. ${inputNoteHeader.value}`;
    pNewParagraph.textContent = `${inputNoteText.value}`;
    inputNoteHeader.value = "";
    inputNoteText.value = "";
    
    let inputAdress = document.getElementById("notesPlaceholder");
    inputAdress.appendChild(dNewDivision);

    countOfNotes++;
}

let inputNoteHeader = document.getElementById("inputNoteHeader");
let inputNoteText = document.getElementById("inputNoteText");
let bNewNote = document.getElementById("confirmButton");
bNewNote.addEventListener("click", create);