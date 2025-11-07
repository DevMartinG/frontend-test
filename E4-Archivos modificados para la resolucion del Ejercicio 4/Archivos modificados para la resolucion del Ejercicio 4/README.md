# Ejercicio 4 - Optimización de Llamadas Asíncronas

## 🎯 Objetivo del Ejercicio

Optimizar un código que realiza 100 llamadas a un servicio externo simulado que retorna números aleatorios, reduciendo el tiempo total de ejecución sin cambiar la funcionalidad básica.

## 💡 Solución Implementada

### Código Original (No Optimizado)

```javascript
async function getDataAndPrint() {
  const oneHundredRandoms = [];
  for (let i = 0; i < 100; i++) {
    const data = await Api.get("randomNumber");
    oneHundredRandoms.push(data);
  }
  console.log(oneHundredRandoms);
}
```

### Código Optimizado

```javascript
async function getDataAndPrint() {
  const promises = Array.from({ length: 100 }, () => Api.get("randomNumber"));
  const oneHundredRandoms = await Promise.all(promises);
  console.log(oneHundredRandoms);
}
```

## 🔍 ¿Por qué esta solución es efectiva?

1. **Paralelización de Llamadas**:

   - Original: Llamadas secuenciales (100 × 100ms = 10,000ms)
   - Optimizado: Llamadas paralelas (~100ms total)
   - Mejora de rendimiento: ~100x más rápido

2. **Uso Eficiente de Promesas**:

   - `Promise.all()` para manejar múltiples promesas
   - Ejecución concurrente de todas las llamadas
   - Espera única por todos los resultados

3. **Código más Limpio**:

   - Menos líneas de código
   - Mayor legibilidad
   - Mantenimiento más sencillo

4. **Manejo de Memoria Optimizado**:
   - No hay necesidad de push() repetitivo
   - Array creado de una sola vez
   - Mejor gestión de recursos

## 📚 Conceptos Clave para Juniors

1. **Asincronía en JavaScript**:

   - Promesas vs Callbacks
   - async/await
   - Ejecución paralela vs secuencial

2. **Promise.all()**:

   ```javascript
   // Ejemplo básico
   const promises = [promise1, promise2, promise3];
   const results = await Promise.all(promises);
   ```

   - Maneja múltiples promesas en paralelo
   - Retorna array con todos los resultados
   - Falla si alguna promesa falla

3. **Array.from()**:

   ```javascript
   Array.from({ length: n }, callback);
   ```

   - Crea array de longitud específica
   - Permite mapear valores en la creación
   - Más eficiente que push() repetitivo

4. **Medición de Rendimiento**:
   ```javascript
   const start = Date.now();
   // código a medir
   const end = Date.now();
   const totalTime = end - start;
   ```
   - Técnicas de medición de tiempo
   - Comparación de rendimiento
   - Optimización basada en métricas

## 💡 Explicación Detallada del Problema Original

### El Problema de las Llamadas Secuenciales

En el código original:

```javascript
for (let i = 0; i < 100; i++) {
  const data = await Api.get("randomNumber");
  oneHundredRandoms.push(data);
}
```

1. Cada llamada espera 100ms
2. La siguiente llamada no inicia hasta que termina la anterior
3. Tiempo total ≈ 100 llamadas × 100ms = 10 segundos

### La Solución con Paralelización

En el código optimizado:

```javascript
const promises = Array.from({ length: 100 }, () => Api.get("randomNumber"));
const oneHundredRandoms = await Promise.all(promises);
```

1. Todas las llamadas inician inmediatamente
2. Se ejecutan en paralelo
3. Tiempo total ≈ 100ms (el tiempo de una sola llamada)

## 🚀 Posibles Mejoras

1. **Control de Errores**:

   ```javascript
   try {
     const results = await Promise.all(promises);
   } catch (error) {
     console.error("Error en las llamadas:", error);
     // Manejo de error apropiado
   }
   ```

2. **Limitación de Concurrencia**:

   ```javascript
   async function getDataWithLimit(limit = 10) {
     const results = [];
     for (let i = 0; i < 100; i += limit) {
       const batch = Array.from({ length: Math.min(limit, 100 - i) }, () =>
         Api.get("randomNumber")
       );
       results.push(...(await Promise.all(batch)));
     }
     return results;
   }
   ```

3. **Cancelación de Llamadas**:

   ```javascript
   const controller = new AbortController();
   const signal = controller.signal;

   // Cancelar después de timeout
   setTimeout(() => controller.abort(), 5000);
   ```

4. **Monitoreo de Progreso**:

   ```javascript
   let completed = 0;
   const promises = Array.from({ length: 100 }, () =>
     Api.get("randomNumber").then((result) => {
       completed++;
       console.log(`Progreso: ${completed}%`);
       return result;
     })
   );
   ```

5. **Cache de Resultados**:

   ```javascript
   const cache = new Map();

   function getCachedApi(url) {
     if (cache.has(url)) return cache.get(url);
     const promise = Api.get(url);
     cache.set(url, promise);
     return promise;
   }
   ```

## 📊 Comparación de Rendimiento

| Versión    | Tiempo Aproximado | Uso de Memoria | Complejidad |
| ---------- | ----------------- | -------------- | ----------- |
| Original   | ~10,000 ms        | Bajo           | O(n)        |
| Optimizada | ~100 ms           | Moderado       | O(1)        |

## 🎓 Lecciones Aprendidas

1. La importancia de entender la ejecución asíncrona
2. El impacto del paralelismo en el rendimiento
3. Cómo usar promesas efectivamente
4. La diferencia entre concurrencia y paralelismo
5. La importancia de medir el rendimiento
