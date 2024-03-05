
// const usuarioCorrecto = "Jesus";
// const contrasenaCorrecta = "canseco";


// let intentos = 0;


// while (intentos < 3) {
//   const usuarioIngresado = prompt("Ingrese su nombre de usuario:");
//   const contrasenaIngresada = prompt("Ingrese su contraseña:");
//   if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
//     alert("Acceso concedido!");
//     break;
//   }

//   intentos++;

//   if (intentos < 3) {
//     alert("Usuario o contraseña incorrectos. Intente de nuevo.");
//   } else {
//     alert("Acceso denegado. Ha excedido el número máximo de intentos.");
//   }
// }


// Array de prendas disponibles
const prendas = [
    { id: 1, prenda: "Camisa Rosa", precio: 500 },
    { id: 2, prenda: "Playera Verde", precio: 200 },
    { id: 3, prenda: "Pantalon Gris", precio: 400 },
    { id: 4, prenda: "cinturon Negro", precio: 50 },
    { id: 5, prenda: "Falda Rosa", precio: 400 },
    { id: 6, prenda: "Vestido Azul", precio: 200 },
    { id: 7, prenda: "Sombrero Gris", precio: 100 },
  ];
  
  // Variable para almacenar el carrito de compras
  let carrito = [];
  
  // Función para buscar una prenda por nombre
  function buscarPrenda(nombre) {
    const prendaEncontrada = prendas.find(prenda => prenda.nombre === nombre);
    if (prendaEncontrada) {
      console.log(`Prenda encontrada: ${prendaEncontrada.nombre}`);
      console.log(`Precio: $${prendaEncontrada.precio}`);
      console.log(`Stock disponible: ${prendaEncontrada.stock}`);
    } else {
      console.log(`No se encontró ninguna prenda con el nombre "${nombre}".`);
    }
  }
  
  // Función para agregar una prenda al carrito
  function agregarPrendaAlCarrito(id) {
    const prendaEncontrada = prendas.find(prenda => prenda.id === id);
    if (prendaEncontrada) {
      if (prendaEncontrada.stock > 0) {
        carrito.push(prendaEncontrada);
        console.log(`Prenda "${prendaEncontrada.nombre}" agregada al carrito.`);
        prendaEncontrada.stock--;
      } else {
        console.log(`Lo siento, no hay stock disponible de la prenda "${prendaEncontrada.nombre}".`);
      }
    } else {
      console.log(`No se encontró ninguna prenda con el ID "${id}".`);
    }
  }
  
  // Función para calcular el costo total de la compra
  function calcularCostoTotal() {
    let costoTotal = 0;
    carrito.forEach(prenda => {
      costoTotal += prenda.precio;
    });
    return costoTotal;
  }
  
  // Función para mostrar el menú de opciones
  function mostrarMenu() {
    let opcion = "";
    while (opcion !== "4") {
      opcion = prompt(`
      **Menú de opciones:**
  
      1. Buscar prenda
      2. Ingresar prenda al carrito
      3. Mostrar costo total
      4. Salir
  
      Ingrese la opción deseada:`);
  
      switch (opcion) {
        case "1":
          const nombrePrenda = prompt("Ingrese el nombre de la prenda que desea buscar:");
          buscarPrenda(nombrePrenda);
          break;
        case "2":
          const idPrenda = parseInt(prompt("Ingrese el ID de la prenda que desea agregar al carrito:"));
          agregarPrendaAlCarrito(idPrenda);
          break;
        case "3":
          const costoTotal = calcularCostoTotal();
          console.log(`El costo total de la compra es: $${costoTotal}`);
          break;
        case "4":
          console.log("Gracias por su visita!");
          break;
        default:
          console.log("Opción no válida. Intente de nuevo.");
      }
    }
  }
  
  // Iniciar la aplicación
  mostrarMenu();
  