
// variables barra lateral
const cloud = document.getElementById("cloud")                     //icono nube abre y cierra la barra lateral
const  barraLateral = document.querySelector(".barra-lateral")
const  publicidad = document.querySelector(".publicidad")          //publicidad debajo de la barra lateral
const  spans = document.querySelectorAll("span")
const  palanca = document.querySelector(".swich")                 
const  circulo = document.querySelector(".circulo")

//perilla dark mode
palanca.addEventListener("click",()=>{
 let body = document.body
 body.classList.toggle('dark-mode')
 circulo.classList.toggle('prendido')
})
// minimiza la barra lateral al tocar la nube
cloud.addEventListener("click",()=>{
  barraLateral.classList.toggle("mini-barra-lateral")
   //espacio debajo de la barra para publicidad
  publicidad.classList.toggle("div-oculto")
})
  
// busca en los <li> y filtra el texto segun coincide a .listaResultados

const input = document.getElementById("campoBusqueda");

function procesarBusqueda() {
  const texto = input.value.toLowerCase();
  const resultados = document.querySelectorAll(".listaResultados li");
  let hayCoincidencias = false;
  //si hay coincidecia muestra los li, si no los esconde
  resultados.forEach(li => {
    const coincide = li.textContent.toLowerCase().includes(texto);
    li.style.display = coincide ? "list-item" : "none";
    li.classList.toggle("visible", coincide);

    if (coincide) {
      hayCoincidencias = true;

      // Comportamiento al hacer click
      li.onclick = () => {
        const nombreSeleccionado = li.textContent.trim().toLowerCase();
        input.value = li.textContent;

        resultados.forEach(item => item.style.display = "none");

        const servicioSeleccionado = servicios.find(
          s => s.rubro.toLowerCase() === nombreSeleccionado
        );

        if (servicioSeleccionado) {
          localStorage.setItem("servicioSeleccionado", JSON.stringify(servicioSeleccionado));
          window.location.href = "page/servicioActivo0.html";
        }
      };
    }
  });

  // Opcional: mensaje si no hay coincidencias
  const mensaje = document.getElementById("mensajeSinResultados");
  if (mensaje) {
    mensaje.style.display = hayCoincidencias ? "none" : "block";
  }
}


// Actualizar al escribir
input.addEventListener("input", procesarBusqueda);

// Redirección con Enter
function confirmarBusqueda() {
  const valor = input.value.trim().toLowerCase();
  const servicioSeleccionado = servicios.find(
    s => s.rubro.toLowerCase() === valor
  );

  if (servicioSeleccionado) {
    localStorage.setItem("servicioSeleccionado", JSON.stringify(servicioSeleccionado));
    window.location.href = "page/servicioActivo0.html";
  } else {
  input.value = "Servicio no encontrado";
  }
}


const servicios = [
  { rubro: "Albañilería general", nombre: "Tio Juan", telefono: "3434660703", ubicacion: "Francisco Beiro 1356", horarios: "lunes a viernes de 8 hs a 18 hs", activo: true ,foto: "../imagen/tio-juan.jpg"},
  { rubro: "Armado de muebles", nombre: "Chiquito", telefono: "3434637000", ubicacion: "", horarios: "", activo: true },
  { rubro: "Calefacción e instalación de estufas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Carpintería a medida", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Cadete", nombre: "Negro Ale", telefono: "3435084685", ubicacion: "", horarios: "de lunes a viernes de 8 a 20 hs", activo: true },
  { rubro: "Cerrajero", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Colocación de cerámicos y porcelanatos", nombre: "Tio Juan", telefono: "3434660703", ubicacion: "Francisco Beiro 1356", horarios: "lunes a viernes de 8 hs a 18 hs", activo: true ,foto: "../imagen/tio-juan.jpg"},
  { rubro: "Colocación de durlock", nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Colocación de pisos flotantes", nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Decoración de interiores", nombre: "Gusi Romero", telefono: "3434611001", ubicacion: "", horarios: "", activo: true ,foto: "../imagen/tio-juan.jpg" },
  { rubro: "Desinfección y control de plagas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Electricista domiciliario", nombre: "Luisi. z Luisi. z", telefono: "3434696445", ubicacion: "", horarios: "", activo: true },
  { rubro: "Fumigación domiciliaria", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Gasista", nombre: "Carlos Gas", telefono: "3434600138", ubicacion: "", horarios: "", activo: false },
  { rubro: "Herrero", nombre: "Pablo Puig", telefono: "3436338299", ubicacion: "", horarios: "", activo: true },
  { rubro: "Instalación de aires acondicionados", nombre: "Anibal Ruiz", telefono: "3435196962", ubicacion: "", horarios: "", activo: true,foto:"../imagen/anibal.jpg" },
  { rubro: "Instalación de cámaras de seguridad", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "", horarios: "lunes a viernes de 15 a 22 hs", activo: true },
  { rubro: "Instalación de porteros eléctricos", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "", horarios: "lunes a viernes de 15 a 22 hs", activo: true },
  { rubro: "Jardinero y mantenimiento de parques", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Limpieza de tanques de agua", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Limpieza", nombre: "Esteban Marichal Oficial", telefono: "3434168687", ubicacion: "", horarios: "", activo: true },
  { rubro: "Mantenimiento de piletas", nombre: "Lagoon Picinas", telefono: "3425116604", ubicacion: "Parque Ind. Crespo", horarios: "Lunes a viernes de 8 a 16 hs ", activo: true },
  { rubro: "Montaje de muebles de cocina", nombre: "Chiquito", telefono: "3434637000", ubicacion: "", horarios: "", activo: true },
  { rubro: "Pintura de interiores y exteriores", nombre: "Pintor Alejandro", telefono: "3434151271", ubicacion: "", horarios: "", activo: true },
  { rubro: "Plomería urgente y reparaciones", nombre: "Ramiro Boutet", telefono: "3434402905", ubicacion: "", horarios: "24hs", activo: true ,foto: "../imagen/plomero.jpg"},
  { rubro: "Pulido de autos", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Reparación de calefones y termotanques", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "", horarios: "lunes a viernes de 15 a 22 hs", activo: true },
  { rubro: "Reparación de electrodomésticos", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "", horarios: "lunes a viernes de 15 a 22 hs", activo: true },
  { rubro: "Reparación de persianas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Revestimiento en piedra",nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Refrigeracion y aires acondicionados",nombre: "Anibal Ruiz", telefono: "3435196962", ubicacion: "", horarios: "", activo: true,foto:"../imagen/anibal.jpg" },
  { rubro: "Servicio técnico para computadoras", nombre: "Negro Ale", telefono: "3435084685", ubicacion: "", horarios: "de lunes a viernes de 8 a 20 hs", activo: true },
  { rubro: "Soldadura y estructuras metálicas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Tapicería de sillas y sillones", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Techista y reparación de goteras", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Trabajos de altura con andamios", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Vidriería y colocación de cristales", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Yesería y revestimientos", nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Zapatero", nombre: "Taller de Calzados Vera", telefono: "3434577939", ubicacion: "Ramirez 1970", horarios: "Lunes  viernes de 9  A 17 hs", activo: true , foto:"../imagen/tarjeta.jpg" }
];











