function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show");
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

// Cerrar el dropdown si se hace clic fuera de él
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  // Cerrar la barra lateral si se hace clic fuera de ella
  const sidebar = document.querySelector(".sidebar");
  if (
    sidebar.classList.contains("show") &&
    !event.target.matches(".toggle-sidebar")
  ) {
    sidebar.classList.remove("show");
  }
};

/* CODIGO PARA EL ASIDE RESPONSIVE EN MOBILE */
/* EL CODIGO COMENTADO ES UNA FUNCIONALIDAD EN DESAROLLO PERO AHORA MISMO IMPOSIBLE DE TESTEAR, 
SE PUEDE VOLVER A ACTIVAR CUANDO SE PONGAN LOS LINKS EN LOS BOTONES */

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show"); // Añade o quita la clase 'show'
}

// Cerrar el dropdown si se hace clic fuera de él

/*---------------------------------------------
---CODIGO JS PARA EL POP-UP DE PRODUCTO----
-----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const addSupplierBtn = document.getElementById("addSupplierBtn");
  const supplierPopup = document.getElementById("supplierPopup");
  const supplierForm = document.getElementById("supplierForm");
  const supplierList = document.getElementById("supplierList");

  // Abrir el popup
  addSupplierBtn.addEventListener("click", () => {
    supplierPopup.style.display = "block"; // Muestra el popup
    supplierForm.reset(); // Resetea el formulario
    console.log("boton apretado");
  });

  // Cerrar el popup
  window.closePopup = () => {
    supplierPopup.style.display = "none"; // Oculta el popup
  };

  // Manejar el envío del formulario
  supplierForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto

    const id = supplierList.rows.length; // Genera un ID basado en el número de filas
    const name = document.getElementById("supplierName").value;
    const contact = document.getElementById("supplierContact").value;
    const mail = document.getElementById("supplierMail").value;
    const descr = document.getElementById("supplierDescription").value;

    const newRow = supplierList.insertRow();
    newRow.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${contact}</td>
                    <td>${mail}</td>
                    <td class="actions">
                        <button onclick="editSupplier(this)">Editar</button>
                        <button onclick="deleteSupplier(this)">Eliminar</button>
                        <button onclick="deleteSupplier(this)">Descripción</button>
                    </td>
                    <td>${descr}</td>
                `;
    // Cerrar el popup
    closePopup();
  });
});
/*---------------------------------------------
---RESPONSIVE PARA CELULARES DE PROVEEDORES----
-----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const supplierList = document.getElementById("supplierList");
  const supplierDetailPopup = document.getElementById("supplierDetailPopup");

  // Manejar el click en las filas para abrir el popup con más detalles
  supplierList.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "TD") {
      const row = event.target.parentNode;
      const id = row.cells[0].innerText;
      const name = row.cells[1].innerText;
      const contact = row.cells[2] ? row.cells[2].innerText : "N/A";
      const mail = row.cells[3] ? row.cells[3].innerText : "N/A";
      const descr = row.cells[5] ? row.cells[5].innerText : "N/A";

      // Mostrar los detalles en el popup
      showSupplierDetails(id, name, contact, mail, descr);
    }
  });

  // Función para cerrar el popup
  window.closeDetailPopup = () => {
    supplierDetailPopup.style.display = "none";
  };

  // Función para abrir el popup de detalles con la información correcta
  function showSupplierDetails(id, name, contact, mail, descr) {
    const popup = document.getElementById("supplierDetailPopup");

    // Asignar valores al popup
    document.getElementById("popupId").textContent = `ID: ${id}`;
    document.getElementById("popupName").textContent = `Nombre: ${name}`;
    document.getElementById(
      "popupContact"
    ).textContent = `Teléfono: ${contact}`;
    document.getElementById("popupMail").textContent = `Correo: ${mail}`;
    document.getElementById("popupDescr").textContent = `Descripción: ${descr}`; // Mostrar solo la descripción

    // Mostrar el popup
    popup.style.display = "block";
  }
});
