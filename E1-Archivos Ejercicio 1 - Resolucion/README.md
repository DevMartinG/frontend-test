# Ejercicio 1 - Sumador de Números Enteros en React

## 🎯 Objetivo del Ejercicio

Crear una aplicación web simple que permita:

1. Ingresar dos números enteros en inputs separados
2. Sumar estos números al hacer clic en un botón
3. Mostrar el resultado o un mensaje de error según corresponda

## 💡 Solución Implementada

La solución se implementó utilizando React y consta de los siguientes componentes y características principales:

### 1. Estado del Componente

```javascript
const [numA, setNumA] = useState("");
const [numB, setNumB] = useState("");
const [message, setMessage] = useState("");
```

- Se utilizan tres estados para manejar:
  - `numA`: valor del primer input
  - `numB`: valor del segundo input
  - `message`: mensaje de resultado o error

### 2. Validación y Sanitización de Inputs

```javascript
const sanitize = (value) => {
  if (value === "") return "";
  const isNeg = value[0] === "-";
  const digits = value.replace(/[^0-9]/g, "");

  if (isNeg && digits === "") return "-";
  return isNeg ? "-" + digits : digits;
};
```

Esta función:

- Permite números negativos (mantiene el signo `-`)
- Elimina cualquier carácter que no sea número
- Maneja casos especiales como cuando solo se ha ingresado el signo negativo

### 3. Manejo de la Suma

```javascript
const handleSum = () => {
  if (
    numA === "" ||
    numB === "" ||
    !isValidInteger(numA) ||
    !isValidInteger(numB)
  ) {
    setMessage("Ingrese ambos números");
    return;
  }

  const a = parseInt(numA, 10);
  const b = parseInt(numB, 10);
  const sum = a + b;
  setMessage(`Resultado es: ${sum}`);
};
```

Este manejador:

- Verifica que ambos campos tengan valores válidos
- Convierte los strings a números enteros
- Realiza la suma
- Muestra el resultado o mensaje de error según corresponda

### 4. Accesibilidad y UX

La solución incluye buenas prácticas de accesibilidad:

- Uso de labels para los inputs
- Atributos aria-label y role
- Mensajes de estado con aria-live
- Inputs con placeholder informativos

## 🔍 ¿Por qué esta solución es efectiva?

1. **Validación Robusta**:

   - Previene entrada de datos inválidos
   - Maneja números negativos correctamente
   - Proporciona feedback inmediato al usuario

2. **Manejo de Estado Eficiente**:

   - Utiliza React hooks para manejar el estado
   - Actualización inmediata de la interfaz

3. **UX Mejorada**:

   - Interfaz clara y simple
   - Mensajes de error descriptivos
   - Campos de entrada con etiquetas descriptivas

4. **Código Mantenible**:
   - Funciones separadas para cada responsabilidad
   - Nombres descriptivos de variables y funciones
   - Comentarios implícitos en la estructura del código

## 📚 Conceptos Clave para Juniors

1. **React Hooks**:

   - `useState` para manejar estado local
   - Actualización de estado de forma asíncrona

2. **Eventos en React**:

   - `onChange` para inputs
   - `onClick` para botones
   - Manejo de eventos con funciones flecha

3. **Expresiones Regulares**:

   - `/^-?\d+$/` para validar números enteros
   - `/[^0-9]/g` para eliminar caracteres no numéricos

4. **Conversión de Tipos**:

   - `parseInt()` para convertir string a número
   - Manejo de strings y números en JavaScript

5. **Renderizado Condicional**:
   - Uso de operadores ternarios y corto circuito
   - Mostrar/ocultar elementos basado en estado

## 🚀 Posibles Mejoras

1. Añadir validación de desbordamiento numérico
2. Implementar formato de números grandes
3. Añadir soporte para operaciones adicionales
4. Implementar historial de operaciones
5. Añadir animaciones para mejor feedback visual
