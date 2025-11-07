# Ejercicio 3 - Transformador de Solicitudes (Request Transformer)

## 🎯 Objetivo del Ejercicio

Crear una función que transforme una lista de solicitudes en un formato específico, combinando información de diferentes fuentes de datos (requests, stages y mapeo de colores).

## 💡 Solución Implementada

La solución implementa una función de transformación que procesa solicitudes y las combina con información de etapas y colores.

### 1. Estructura de Datos de Entrada

#### Solicitudes (Requests)

```javascript
{
  client: { nombre: string, ... },  // Objeto cliente
  stageId: string,                  // ID de la etapa
  version: number                   // Versión
}
```

#### Etapas (Stages)

```javascript
[
  {
    Val: string, // ID de la etapa
    Desc: string, // Nombre descriptivo
  },
];
```

#### Mapa de Colores (ColorMapStage)

```javascript
{
  'stageId': 'colorHex'  // Ej: 'stage1': '#CC0000'
}
```

### 2. Función de Transformación

```javascript
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
      color: color,
    };
  });
}
```

#### Desglose de la Implementación:

1. **Creación del Mapa de Etapas**:

   ```javascript
   const stageMap = new Map();
   stages.forEach((s) => stageMap.set(s.Val, s.Desc));
   ```

   - Convierte el array de stages en un Map para búsqueda eficiente
   - Clave: ID de etapa (Val)
   - Valor: Descripción de etapa (Desc)

2. **Transformación de Datos**:

   ```javascript
   return requestList.map((req) => {
     // ... transformación de cada solicitud
   });
   ```

   - Utiliza Array.map para transformar cada solicitud
   - Retorna un nuevo array con el formato requerido

3. **Manejo de Datos Individual**:
   ```javascript
   const nombreCliente = req.client?.nombre || "";
   const stageName = stageMap.get(req.stageId) || "Stage no encontrado";
   const color = colorMapStage[req.stageId] || "#000000";
   ```
   - Extrae el nombre del cliente con optional chaining
   - Busca el nombre de la etapa en el mapa
   - Obtiene el color correspondiente
   - Proporciona valores por defecto para casos de error

## 🔍 ¿Por qué esta solución es efectiva?

1. **Eficiencia**:

   - Uso de Map para búsqueda O(1)
   - Procesamiento en una sola pasada
   - Mínimo uso de memoria

2. **Robustez**:

   - Manejo de casos nulos/undefined
   - Valores por defecto para casos de error
   - Optional chaining para acceso seguro

3. **Mantenibilidad**:

   - Código limpio y bien estructurado
   - Nombres descriptivos
   - Lógica modular y clara

4. **Escalabilidad**:
   - Fácil de extender para más campos
   - Adaptable a cambios en estructura
   - Puede manejar grandes volúmenes de datos

## 📚 Conceptos Clave para Juniors

1. **Estructuras de Datos**:

   - Map vs Object
   - Arrays y transformaciones
   - Objetos anidados

2. **Métodos de Array**:

   - `map()` para transformación
   - `forEach()` para iteración
   - Diferencias y usos

3. **Operadores Modernos**:

   - Optional chaining (`?.`)
   - Nullish coalescing (`||`)
   - Desestructuración de objetos

4. **Programación Funcional**:

   - Inmutabilidad
   - Transformación de datos
   - Funciones puras

5. **Manejo de Errores**:
   - Valores por defecto
   - Validación de datos
   - Casos extremos

## 🚀 Posibles Mejoras

1. **Validación de Datos**:

   ```javascript
   function validateRequest(request) {
     if (!request.client || !request.stageId) {
       throw new Error("Invalid request format");
     }
   }
   ```

2. **Cache de Resultados**:

   ```javascript
   const resultCache = new Map();
   // Cachear resultados frecuentes
   ```

3. **Logging y Monitoreo**:

   ```javascript
   const logTransformation = (input, output) => {
     console.log(`Transformed: ${input} -> ${output}`);
   };
   ```

4. **Tipado con JSDoc**:

   ```javascript
   /**
    * @typedef {Object} TransformedRequest
    * @property {string} client
    * @property {string} stage
    * @property {string} color
    */
   ```

5. **Manejo de Errores Mejorado**:
   ```javascript
   try {
     // transformación
   } catch (error) {
     console.error("Error en transformación:", error);
     return defaultValue;
   }
   ```
