class Api {
  static get(url, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 100);
    });
  }
}

async function getDataAndPrint() {
  console.log('iniciando prueba optimizada...\n');
  const start = Date.now();
  const promises = Array.from({ length: 100 }, () => Api.get("randomNumber"));

  const oneHundredRandoms = await Promise.all(promises);

  const end = Date.now();
  const totalTime = end - start;

  console.log('100 numeros obtenidos correctamente');
  console.log('ejemplo de datos:', oneHundredRandoms.slice(0, 10), '...');
  console.log(`tiempo total: ${totalTime} ms`);

  
  const barLength = Math.min(50, oneHundredRandoms.length / 2);
  const progressBar = '█'.repeat(barLength);
  console.log('\n rendimiento:');
  console.log(`[${progressBar}]`);
  console.log('cada bloque representa 2 requests completadas\n');

  return oneHundredRandoms;
}

getDataAndPrint();
