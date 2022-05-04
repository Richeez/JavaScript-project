
const mainContainer = document.querySelector(".mainContainer");
const addNote = document.querySelector(".add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
    
}
addNote.addEventListener("click", () => { 
    addNewNote();
});


function addNewNote( note = "") { 
    const noteWrapper = document.createElement("div");

    noteWrapper.classList.add("note-wrapper");

    noteWrapper.innerHTML=`
    
        <div class="menu-bar">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="text-input-Area ${note ? "": "hidden"}"></div>
        <textarea class=" ${note ? "hidden": ""}"> </textarea>
      `
    const editBtn = noteWrapper.querySelector(".edit");
      
      const deleteBtn = noteWrapper.querySelector(".delete");
      
      
const textInputArea = noteWrapper.querySelector(".text-input-Area");

    const textArea = noteWrapper.querySelector("textarea");
    
    textArea.value = note;
    textInputArea.innerHTML = marked.parse(note);

editBtn.addEventListener("click", () => { 
    textArea.classList.toggle("hidden");
    textInputArea.classList.toggle("hidden")
});

textArea.addEventListener("input", (e) => { 
    console.log("working");
    const { value } = e.target;
    textInputArea.innerHTML = marked.parse(value);
        updateLS();

});
    
    
deleteBtn.addEventListener("click", () => { 
    noteWrapper.remove()
  updateLS();

});
    
    mainContainer.appendChild(noteWrapper); 

};

function updateLS() {

    
    const AllTextArea = document.querySelectorAll("textarea");
    
    const notes = [];

    AllTextArea.forEach((note) => { 
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes))
    
};