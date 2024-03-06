// 1: Base de Datos
const notes = [
  { title: "Una variable puede declararse usando let" },
  { title: "Una Variable declara dentro de la Funcion, Nace, Crece y Muere dentro de la funcion" },
];

// 2: Funciones
function printNotes() {
  for (let i = 0; i < notes.length; i++) {
      const note = `${i}. ${notes[i].title}`;
      console.log(note);
  }
}

function printInterface() {
  console.clear();
  const numberNotes = `tiene usted ${notes.length} notas`;
  console.log(numberNotes);
  printNotes();
  console.log("-----------------------");
  console.log("¿Qué desea hacer?");
  console.log("1. Crear nota");
  console.log("2. Editar nota");
  console.log("3. Eliminar nota");
}

function createNotes(noteTitle) {
  const newNote =  { title: noteTitle };
  notes.push(newNote);
}

function modific(modinote, newNoteModi) {
  notes.splice(modinote, 1, {title: newNoteModi});
  alert (`La nota numero: ${modinote}, a sido Modificada exitosamente`)
}

function deleteNote(noteIndex) {
  notes.splice(noteIndex, 1);
  alert (`La nota numero: ${noteIndex}, a sido Eliminada exitosamente`)
}



// 3: Programa
let input;
while (input !== null) {
  printInterface();
  input = prompt("Para visualizar las opciones, debe tener la consola abierta \nIngrese una acción (1, 2 o 3):");

  if (input === "1") {
      const title = prompt("Ingrese el titulo de la nota:");
      createNotes(title);
  } else if (input === "2") {
      let index = Number(prompt("Indique el indice de la Nota:"));
      while (index<0 || index>=notes.length){
      alert ("Numero de Indice Invalido")
      index = Number(prompt("Indique el indice de la Nota:"))
      }
      const nuevanote = prompt ("Edite la Nota")
      modific(index, nuevanote);
  } else if (input === "3") {
      let index = Number(prompt("Indique el indice de la Nota:")); 
      while (index<0 || index>=notes.length){
          alert ("Numero de Indice Invalido")
          index = Number(prompt("Indique el indice de la Nota: "))
          }        
      deleteNote(index);
  }  else if (input === null) {
      alert("Gracias por usar Notas!");
      console.clear();
  } else {
      alert("Accion Invalida!");
  }
}