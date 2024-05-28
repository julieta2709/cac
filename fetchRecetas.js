const apiServer = "https://api.edamam.com";
const apiId = "cff78ee0";
const apiKey = "57ef1a787699d3e740fd90891c0f3135";

function handleKeyDown(event) {
  if (event.key === "Enter") {
    buscarRecetas();
  }
}

async function buscarRecetas() {
  const query = document.getElementById("input").value;
  const url = `${apiServer}/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`;
  console.log("Realizando solicitud a la URL:", url);

  try {
    const response = await fetch(url);
    console.log("Respuesta recibida:", response);
    const data = await response.json();
    console.log(data);
    mostrarResultados(data.hits);
    document
      .getElementById("resultados")
      .scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error("Error al conectar con la API de Edamam:", error);
  }
}
buscarRecetas();

function mostrarResultados(recetas) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  if (recetas.length === 0) {
    resultadosDiv.innerHTML = "<p>No se encontraron recetas.</p>";
    return;
  }

  recetas.forEach((receta) => {
    const recetaDiv = document.createElement("div");
    recetaDiv.innerHTML = `
            <h2>${receta.recipe.label}</h2>
            <img src="${receta.recipe.image}" alt="${receta.recipe.label}" style="width: 100px; height: 100px;">
            <p><a href="${receta.recipe.url}" target="_blank">Ver receta completa</a></p>
        `;
    resultadosDiv.appendChild(recetaDiv);
  });
}
