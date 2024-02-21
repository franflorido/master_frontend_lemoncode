# Module 1 - Layout Ejercicios

Esta carpeta contiene los ejercicios de laboratorio del primer modulo.

## Ejercicio 1

En este ejercicio se pide crear una paleta de colores dinámica con el lenguaje Sass.

La idea es partir de un color base, y a partir de ese color generar 4 colores más oscuros de manera gradual, y cuatro colores más claros de manera gradual.

## Ejercicio 2

En este ejercicio se pide crear dos temas distintos y mostrar los resultados en una página.

Los cambios en el tema afectan a las siguientes características:
• Color
• Fuente
• Border Radius
• Shadow Box

Para visualizar los cambios debería ser suficiente importar un tema u otro en el fichero de estilos principal.

## Ejercicio 3

En este ejercicio se pide crear la barra de navegación de la imagen del enunciado usando Flexbox. El html es abierto completamente, es decir, crear las estructuras necesarias que se crean convenientes. La barra de navegación responde a distintas resoluciones. Utilizar media queries para conseguir este resultado.

## Ejercicio 4

En este ejercicio se pide crear un elemento de tipo card con Grid CSS.
Las alineaciones deberán hacerse con esta característica, pero el html es totalmente abierto

## Prueba de los ejercicios

Para comprobar el funcionamiento de los ejercicios se deben seguir los siguientes pasos.

1 - Clonar el repositorio en local 

```
git clone https://github.com/franflorido/master_frontend_lemoncode.git
```
2 - En la carpeta principal ejecutar el comando install de npm 

```
npm install
```
3 - Ejecutar el comando run de npm seguido del ejercicio (ej1, ej2, ej3, ej3)

```
npm run ej1
```
4 - En el navegador ir abrir la siguiente direccion

```
http://localhost:1234
```

Nota: Para probar el funcionamiento del ejercicio 2 habra que modificar el @use del archivo "mystyles.scss" que se encuentra en la linea 1
```
@use "theme-1.scss" as theme;
@use "theme-2.scss" as theme;
```
