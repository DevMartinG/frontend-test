# Ejercicio 2 - Burbujas Superpuestas con CSS

## 🎯 Objetivo del Ejercicio

Crear un efecto visual de "burbujas" superpuestas donde:

1. Se muestren tres burbujas parcialmente superpuestas
2. Al pasar el mouse sobre cualquier burbuja, esta debe aparecer por encima de las demás
3. Todo debe implementarse usando solo HTML y CSS (sin JavaScript)
4. Las burbujas deben tener colores específicos (#ffedb6 y #e6e7fd)

## 💡 Solución Implementada

La solución utiliza HTML y CSS puro, aprovechando conceptos de posicionamiento y z-index para lograr el efecto deseado.

### 1. Estructura HTML

```html
<div class="contenedor">
  <div class="burbuja amarilla">hola</div>
  <div class="burbuja azul">hola</div>
  <div class="burbuja amarilla">hola</div>
</div>
```

- Estructura simple y semántica
- Contenedor principal para mantener las burbujas organizadas
- Clases descriptivas para los estilos

### 2. Estilos CSS Clave

#### Contenedor Principal

```css
.contenedor {
  position: relative;
  width: 260px;
  height: 65px;
}
```

- `position: relative` crea un contexto de posicionamiento
- Dimensiones específicas para contener las burbujas

#### Estilo Base de Burbujas

```css
.burbuja {
  position: absolute;
  width: 50px;
  height: 25px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, z-index 0s;
}
```

- `position: absolute` para control preciso del posicionamiento
- Flexbox para centrar el contenido
- Transiciones suaves para mejorar la UX
- Cursor pointer para indicar interactividad

#### Posicionamiento y Superposición

```css
.burbuja:nth-child(1) {
  left: 0;
  z-index: 1;
}
.burbuja:nth-child(2) {
  left: 40px;
  z-index: 2;
}
.burbuja:nth-child(3) {
  left: 80px;
  z-index: 3;
}

.burbuja:hover {
  z-index: 99;
}
```

- Posicionamiento escalonado con `left`
- z-index inicial para orden de apilamiento por defecto
- z-index elevado en hover para superponer

#### Colores Específicos

```css
.amarilla {
  background-color: #ffedb6;
}

.azul {
  background-color: #e6e7fd;
}
```

- Colores exactos según especificación
- Clases separadas para mejor mantenimiento

## 🔍 ¿Por qué esta solución es efectiva?

1. **Simplicidad**:

   - Sin JavaScript, cumpliendo el requisito principal
   - Código limpio y fácil de mantener
   - Estructura HTML semántica

2. **Rendimiento**:

   - Solo CSS puro, sin dependencias
   - Transiciones optimizadas
   - Mínimo impacto en rendimiento

3. **Mantenibilidad**:

   - Clases reutilizables
   - Estilos modulares
   - Fácil de modificar y extender

4. **Accesibilidad**:
   - Estructura semántica
   - Indicadores visuales de interactividad
   - Alto contraste en colores

## 📚 Conceptos Clave para Juniors

1. **Posicionamiento CSS**:

   - `position: relative` vs `position: absolute`
   - Uso de coordenadas (`left`, `top`, etc.)
   - Contexto de posicionamiento

2. **Z-index y Capas**:

   - Cómo funciona el apilamiento en CSS
   - Contextos de apilamiento
   - Manejo de superposición

3. **Pseudo-clases**:

   - `:hover` para interactividad
   - `:nth-child()` para selección específica
   - Orden de especificidad

4. **Flexbox**:

   - Centrado vertical y horizontal
   - `align-items` y `justify-content`
   - Contenedor flex vs elementos flex

5. **Transiciones CSS**:
   - Propiedades transicionables
   - Timing functions
   - Duración y retrasos

## 🚀 Posibles Mejoras

1. Añadir animaciones más elaboradas
2. Implementar diferentes formas de burbujas
3. Añadir efectos de sombra para más profundidad
4. Crear variaciones de tamaño responsivas
5. Implementar más estados de interacción
