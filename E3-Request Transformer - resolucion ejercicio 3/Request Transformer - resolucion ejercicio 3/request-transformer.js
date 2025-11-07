// Ejercicio 3 - Transformar lista de requests
// Dennis Martin

// datos de ejemplo
const stages = [
  { Val: "stage1", Desc: "Desarrollo" },
  { Val: "stage2", Desc: "Testing" },
  { Val: "stage3", Desc: "Produccion" },
  { Val: "stage4", Desc: "Mantenimiento" }
];

const colorMapStage = {
  stage1: "#CC0000",
  stage2: "#6DBC64",
  stage3: "#51B3BD",
  stage4: "#FFA500"
};

const requestList = [
  {
    client: { nombre: "Ernesto", apellidos: "Pilco Mamani" },
    stageId: "stage1",
    version: 1
  },
  {
    client: { nombre: "Sandra", apellidos: "Vallejo Arismendi" },
    stageId: "stage2",
    version: 2
  },
  {
    client: { nombre: "Hermogenes", apellidos: "Cujia Salazar" },
    stageId: "stage3",
    version: 1
  },
  {
    client: { nombre: "Anastasia", apellidos: "Rodrichk Velanccio" },
    stageId: "stage4",
    version: 3
  }
];


function transform(requestList, stages, colorMapStage) {
  const stageMap = new Map();
  stages.forEach((s) => stageMap.set(s.Val, s.Desc));

  return requestList.map((req) => {
    const nombreCliente = req.client?.nombre || "";
    const stageName = stageMap.get(req.stageId) || "Stage no encontrado";
    const color = colorMapStage[req.stageId] || "#000000";

    return {
      client: nombreCliente,
      stage: stageName,
      color: color
    };
  });
}



function mostrarResultados(resultados) {
  console.log("=== mostrando resultados ===");
  console.log(JSON.stringify(resultados, null, 2));
  console.log("Total procesados:", resultados.length);
}


console.log("iniciando pruebas...");
const resultados = transform(requestList, stages, colorMapStage);


mostrarResultados(resultados);
console.log("Pruebas finalizadas");


console.log("--------------------------------");
console.log("Dennis Martin");
