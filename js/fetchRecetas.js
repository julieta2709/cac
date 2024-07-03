const apiServer = "https://api.edamam.com";
const apiId = "cff78ee0";
const apiKey = "57ef1a787699d3e740fd90891c0f3135";

let busquedaRealizada = false;

function handleKeyDown(event) {
  if (event.key === "Enter") {
    buscarRecetas();
  }
}

async function buscarRecetas() {
  busquedaRealizada = true;
  const query = document.getElementById("input").value;
  const url = `${apiServer}/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    mostrarResultados(data.hits);

    if (busquedaRealizada) {
      document
        .getElementById("resultados")
        .scrollIntoView({ behavior: "smooth" });
    }
  } catch (error) {
    console.error("Error al conectar con la API de Edamam:", error);
  }
}

function mostrarResultados(recetas) {
  const showReultados = document.getElementById('resultados').style.display = 'block';
  console.log(showReultados)
  const resultadosDiv = document.getElementById("resultadosCard");
  resultadosDiv.innerHTML = "";

  if (recetas.length === 0 && busquedaRealizada) {
    resultadosDiv.innerHTML = "<p>No se encontraron recetas.</p>";
    return;
  }

  recetas.forEach((receta) => {
    const recetaDiv = document.createElement("div");
    recetaDiv.classList.add("col-lg-4", "menu-item");
    recetaDiv.innerHTML = `
    <div class="card">
    <img src="${receta.recipe.image}" class="card-img-top" alt="${receta.recipe.label}">
    <div class="card-body">
        <h5 class="card-title">${receta.recipe.label}</h5>
        <p class="card-text">Descripción de la receta aquí.</p>
        <a href="${receta.recipe.url}" class="btn" target="_blank">Receta</a>
    </div>
    </div>
        `;
    resultadosDiv.appendChild(recetaDiv);
  });
}
