# Ficha del sitio web

**Nombre del sitio:** Ruta Motors  
**Tema:** Concesionario de motocicletas  
**Páginas:** Inicio, Cotizar Moto y Contacto  
**Línea de profundización:** Línea A — Formularios y peticiones

## Descripción

Ruta Motors es un sitio web para presentar motocicletas urbanas, todoterreno y deportivas. El visitante puede revisar modelos, imágenes y especificaciones, y acceder a los formularios de cotización y contacto.

## Público objetivo

Está dirigido a personas interesadas en conocer motocicletas, comparar sus características y precios, solicitar una cotización o comunicarse con el concesionario.

## Frontend y backend

El frontend es la parte que ve y utiliza el visitante: las páginas HTML, el diseño CSS, las imágenes, el catálogo y los formularios. JavaScript revisa los datos ingresados y muestra mensajes en pantalla. Para que el sitio funcionara como un servicio real, necesitaría un backend que recibiera las solicitudes, guardara los datos de forma segura en una base de datos y permitiera al personal del concesionario responderlas. Actualmente el formulario muestra una confirmación, pero no guarda ni envía la información a un servidor.

## Tipo de sitio

Ruta Motors es principalmente un sitio estático porque sus páginas y los datos del catálogo están escritos directamente en archivos HTML. JavaScript agrega interacción al validar los formularios, pero el sitio no consulta una base de datos ni actualiza el catálogo desde un servidor.

## Acciones de SEO

1. **Título de cada página:** usamos la etiqueta `<title>` dentro de `<head>` para identificar su contenido, por ejemplo, “Ruta Motors | Inicio”.
2. **Descripción de cada página:** agregamos `<meta name="description">` en `<head>` para resumir Inicio, Cotizar y Contacto.
3. **Texto alternativo de las imágenes:** usamos el atributo `alt` en las etiquetas `<img>` para describir las imágenes. En las fotos del catálogo debemos especificar el modelo de cada motocicleta, en lugar de repetir una descripción general.

## Texto complementario para la Línea A

El formulario de cotización solicita datos de contacto, modelo de interés y horario preferido.  
Usa campos `text`, `number`, `email`, `select`, `date` y `time`.  
Los atributos `required`, `min`, `max` y `maxlength` ayudan a limitar o exigir datos.  
JavaScript revisa los campos y valida formatos, teléfono, fecha y hora.  
Si hay un error, muestra un mensaje para que la persona corrija la información.  
En un sistema real se usaría **POST** para enviar los datos al backend; este proyecto aún no los guarda ni transmite.  
**PUT** sirve para actualizar un recurso existente y **DELETE** para eliminarlo.

## Desarollado por:
## Jhon Alexander Hurtado Lozada
## David Stiven Duque Acosta