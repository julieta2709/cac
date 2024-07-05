document.addEventListener("DOMContentLoaded", async () => {
  formNuevaReceta = document.getElementById("formNuevaReceta");
  formNuevaReceta.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formNuevaReceta);

    const titulo = formData.get("titulo");
    const detalle = formData.get("detalle");
    const dificultad = formData.get("dificultad");
    const imagen = formData.get("imagen");

    if (titulo === "" || detalle === "" || dificultad === "" || imagen === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    const imageName = imagen.name;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        detalle: detalle,
        dificultad: dificultad,
        imagen: imageName,
      }),
    };

/*     const response = await fetch(
      "http://localhost:8080/apisimple/peliculas",
      options
    );
    const data = await response.json();

    if (response.status === 201) {
      alert("Receta agregada correctamente");
      formNuevaReceta.reset();
      location.reload();
    } else {
      alert("Error al agregar la receta");
    } */
  });
});
