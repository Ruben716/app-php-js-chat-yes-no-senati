const apiURL = "http://localhost/app-php-js-chat-yes-no-senati/api.php";


let botonGet = document.getElementById("getdata");
botonGet.addEventListener("click", function () {
  getdata();
});




async function getdata() {
  console.log("Ingreso a getdata");

  try {
    const respuesta = await fetch(
      `${apiURL}?id=123&nombre=Ruben&apellido=nunez`,
      {
        method: "GET",
      }
    );
        if (!respuesta.ok) {
             throw new Error(`HTTP error! Status: ${respuesta.status}`);
    }
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log("Error al momento de hacer la petición: " + error.message);
  }
}
////////////////////////////////////////////////////////////////
