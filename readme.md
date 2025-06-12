Proyecto: Validación Avanzada de Formulario
Este proyecto corresponde a la actividad de la clase 3 del curso. En él trabajé en un formulario que sirve para recolectar datos como nombre, apellido, correo y contraseña,etc... pero lo importante es que los valida en tiempo real para que todo esté correcto antes de enviarlo.

 Descripción
En este formulario se aplicaron varias validaciones avanzadas usando JavaScript. Además, todo el diseño lo hice con CSS externo y estructura HTML organizada. Me basé en lo que explicó el profesor en las clases y traté de usar todos los puntos que pidió. Por ejemplo:

Validación de los campos mientras el usuario escribe

Mensajes claros cuando hay error o cuando algo está bien

Una barra de progreso que sube a medida que llenas correctamente

Ver si la contraseña es segura (con símbolos, números y largo mínimo)

El teléfono se puede formatear solo (si se incluye)

La confirmación de la contraseña verifica que ambas coincidan

Un contador para ver cuántos caracteres llevas en ciertos campos

El botón de enviar solo se activa si todo está bien

Cuando se envía, sale un resumen con los datos escritos

 Qué aprendí
A usar etiquetas como label, input, textarea, button, select de forma correcta

Cómo hacer que los formularios sean más accesibles con placeholder, title, y alt

Hacer validaciones en JavaScript y dar mensajes personalizados

Que es importante organizar el código HTML, CSS y JS para no repetir cosas innecesarias

A usar FormData para mostrar los datos en pantalla como resumen

Usar addEventListener para que todo pase en tiempo real

A manejar eventos como bloquear copiar y pegar en campos de seguridad

 Lo que me gustó
Me gustó porque pude ver cómo un formulario puede ser más interactivo, no solo que lo llenas y ya. También porque uno mismo puede controlar lo que pasa si el usuario se equivoca o no llena algo bien. Me gustó que se puede ver en pantalla si vas haciendo todo bien.

 Lo que me costó un poco
Al principio me costó un poco acordarme de los nombres de los elementos en el DOM, como por ejemplo usar bien el getElementById o addEventListener. También me enredé un poco con la lógica de la validación del password, sobre todo que cumpla con números, símbolos y mínimo de caracteres. Tuve que repasar un poco lo de expresiones regulares.

Otro detalle que me costó fue que a veces el resumen no salía bien porque no estaba validando todos los campos antes de enviarlo, pero lo solucioné agregando el preventDefault() y organizando el orden del código.