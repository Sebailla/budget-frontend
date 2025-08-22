# Explicación detallada del componente Input con Label (Tailwind CSS 4.1)

Este componente es un campo de **input** estilizado con **Tailwind CSS
4.1**, que incluye un `label` animado al estilo *floating label*
(etiqueta flotante). El truco principal se basa en el uso de `peer` y
`placeholder-shown` para coordinar la animación entre el input y el
label.

------------------------------------------------------------------------

## 1. Estructura principal

``` tsx
<div className="relative h-11 w-full min-w-[200px]">
  <input ... />
  <label ...>Label</label>
</div>
```

-   `relative`: el `div` padre sirve como contenedor de referencia para
    posicionar absolutamente el label.
-   `h-11`: altura fija de 44px.
-   `w-full`: ancho completo.
-   `min-w-[200px]`: asegura un mínimo de 200px.

------------------------------------------------------------------------

## 2. Input

``` tsx
<input
  className="peer h-full w-full rounded-md border border-slate-400 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-slate-400 outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200 placeholder-shown:border-t-slate-200 focus:border-2 focus:border-pastel-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
  placeholder={placeholder || " "}
/>
```

### Clases principales

-   **peer**: permite que el label "escuche" los estados del input.
-   **rounded-md**: bordes redondeados.
-   **border border-slate-400 border-t-transparent**: el input tiene
    borde gris, excepto en la parte superior.
-   **bg-transparent**: fondo transparente.
-   **px-3 py-3**: padding interno uniforme.
-   **font-sans text-sm text-slate-400**: tipografía, tamaño pequeño,
    color gris claro.
-   **outline-0**: elimina el borde azul por defecto al hacer focus.
-   **transition-all**: suaviza los cambios visuales.

### Estados condicionales

-   **placeholder-shown:border-slate-200**: cuando el placeholder está
    visible, el borde se suaviza.
-   **focus:border-2 focus:border-pastel-yellow-400**: en foco, borde
    amarillo pastel más grueso.
-   **disabled:border-0 disabled:bg-gray-50**: desactivado, sin borde y
    fondo gris claro.

------------------------------------------------------------------------

## 3. Label

``` tsx
<label
  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-slate-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-slate-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pastel-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
>
  Label
</label>
```

### Posicionamiento y comportamiento

-   **absolute left-0 -top-1.5**: el label está encima del input,
    alineado a la izquierda.
-   **flex h-full w-full**: ocupa todo el espacio del input.
-   **pointer-events-none**: el label no bloquea clics en el input.

### Estilos básicos

-   **text-\[11px\] text-slate-400**: tamaño pequeño, color gris claro.
-   **transition-all**: suaviza animaciones.

### Pseudo-elementos `before` y `after`

Estos dibujan pequeños bordes arriba del label, simulando que el texto
encaja en el borde del input. - **before:border-t before:border-l**,
**after:border-t after:border-r**: forman esquinas superiores. -
**rounded-tl-md / rounded-tr-md**: redondeo en las esquinas
superiores. - **peer-placeholder-shown:before:border-transparent**: se
ocultan cuando no hay texto. - **peer-focus:before:border-t-2
peer-focus:before:border-l-2**: al enfocar, se marcan en amarillo.

### Estados

-   **peer-placeholder-shown:text-sm text-slate-400**: cuando el
    placeholder está visible, el label baja y crece.
-   **peer-focus:text-\[11px\] text-pastel-yellow-400**: al enfocar, el
    label se achica y cambia de color.
-   **peer-disabled:text-transparent**: label invisible si el input está
    deshabilitado.

------------------------------------------------------------------------

## Ejemplo visual de comportamiento

1.  **Sin escribir nada** → El label aparece dentro del input (estilo
    placeholder).
2.  **Al enfocar** → El label "flota" hacia arriba, cambia de color y se
    resaltan los bordes superiores.
3.  **Con texto** → El label se mantiene flotando arriba.
4.  **Si está deshabilitado** → Se oculta visualmente.

------------------------------------------------------------------------

## Conclusión

Este patrón combina `peer`, `placeholder-shown` y pseudo-elementos
(`before`, `after`) para lograr un efecto de **label flotante con
esquinas resaltadas**. Es un ejemplo avanzado de cómo **Tailwind 4.1**
permite personalizar formularios sin CSS adicional.
