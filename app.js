const apiURL = "http://localhost/app-php-js-chat-yes-no-senati/api.php";
const api1 = "https://yesno.wtf/api";

let botonGet = document.getElementById("getdata");
botonGet.addEventListener("click", function () {
  getdata();
});
////////////////////////ruben daniel
let botonapi = document.getElementById("apisito");
botonapi.addEventListener("click", function () {
  getapi();
});

async function getapi() {
  console.log("Ingreso a getapi");

  try {
    const respuesta = await fetch(api1);
    if (!respuesta.ok) {
      throw new Error(`HTTP error! Status: ${respuesta.status}`);
    }
    const data = await respuesta.json();
    console.log(data.image);
    console.log(data);
  } catch (error) {
    console.log("Error al momento de hacer la petición a Yes/No API: " + error.message);
  }
}

async function getdata() {
  console.log("Ingreso a getdata");

  try {
    const respuesta = await fetch(`${apiURL}?id=123&nombre=Ruben&apellido=nunez`, {
      method: "GET",
    });
    if (!respuesta.ok) {
      throw new Error(`HTTP error! Status: ${respuesta.status}`);
    }
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log("Error al momento de hacer la petición: " + error.message);
  }
}

let botonpost = document.getElementById("post-data");

async function postData() {
  console.log("Ingreso a postData");

  try {
    const respuesta2 = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: "Ruben",
        apellido: "Nunez",
        lenguaje_favorito: "Javascript",
        colors: "Plomo",
      }),
    });
    if (!respuesta2.ok) {
      throw new Error(`HTTP error! Status: ${respuesta2.status}`);
    }
    const data_retorno = await respuesta2.json();
    console.log(data_retorno);
  } catch (error) {
    console.log("Error al momento de hacer la petición POST: " + error.message);
  }
}

botonpost.addEventListener("click", function () {
  postData();
});
