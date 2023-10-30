# Proyecto MDPPROGRAMA - Etapa 1

Para realizar el proyecto, identificamos las siguientes tareas a realizar. Vamos a trabajar usando git + github, realizando cada tarea en una rama que salga directamente desde dev, donde luego integraremos los cambios.

**La rama main queda reservada para deployar**

*cuando se hable del diseño, se refiere a [este link](https://www.figma.com/file/YXfcRfCtQw13mOb5CDpFU5/Proyecto-mdp-programa?type=design&node-id=0-1&mode=design).

[Referencia diseños relativos a la marca](https://dribbble.com/tags/beauty-treatment)

## Antes de empezar

- Definir paleta de colores
    - incluirla en la rama *dev* usando customProperties sobre el pseudelemento :root.
    **Intentaremos no usar colores que no llamemos a tráves de estas variables, para mantener un estilo consistente**.
        Esto lo hacemos antes que nada, para ya salir con las ramas para las distintas tareas con eso hecho.
- Igualmente, definir la altura a usar para breakpoint de las mediaqueries y recordar desarrollar usando el método **mobile-first**.

## Primera etapa
 Apuntamos a desarrollar el sitio de manera correcta, aprendiendo a colaborar en un repositorio de git. Cuando tengamos una primera versión completa, haremos el primer deploy de prueba y pasaremos a hacer las mejoras necesarias en la **segunda etapa**

### Navbar
En dispositivos móviles la navbar debería mostrar solo el logo y un botón que permita abrir la navegación como un panel colapsabe. 
La navbar debería ser siempre visible, y muchas veces se estila transicionar a una versión reducida al scrollear hacia abajo.
Una buena navbar es accesible y se puede navegar con el teclado.

### Hero
La sección Hero es lo primero que vemos al entrar a un sitio institucional. Puede ser una imagen fija con el texto posicionado por encima, o un banner que pase solo. Se pueden buscar imagenes de stock de tratamientos estéticos.

### Sección tratamientos
Sobre el diseño, recomiendo reducir el banner de esta sección a que ocuper la mitad o un tercio de toda la pantalla. 
    En tamaño mobile, deberíamos ver una sola columna con los tratamientos.

### Productos

La sección productos es, igual que la de tratamientos, una galería, pero vamos a intentar aplicar otro layout y no el mismo. Podría ser un carrusel que se active con un click o deslizando el dedo en mobile, como las galerías de producto en el inicio de Mercado Pago.

### Contacto

Necesitamos un formulario que pueda enviar un email a una dirección que vamos a dejar hardcodeada en el front. Consultar librerías de javascript que permitan enviar correos desde el navegador, sin enviar código al servidor así no necesitamos escribir un backend. El usuario tiene que poder completar unos campos que correspondan al mail a donde responderle, al asunto y al cuerpo del mail. Agregar un campo para su teléfono, que sea opcional. O sea, los otros tres deben completarse para enviar el mail.

Otra parte del área de contacto, es el botón de whatsapp. El botón de whatsapp debe estar posicionado fijo en la esquina inferior derecha. Debe ser visble en todo momento y pasar por encima de cualquier elemento.Al tocarlo, te debe abrir el whatsapp web o la app (dependiendo en qué dispositivo estés) con el chat del cliente.

[Documentación API WhatsApp](https://faq.whatsapp.com/5913398998672934)


### Footer

El footer debe estar posicinado absolutamente al fondo de la página y solo ser visible una vez que se scrolleo todo su contenido. Incluir el logo y los íconos para las redes sociales.
Para incluir los íconos no usamos elementos img, podemos usar elementos SVG o consumirlos de algún proveedor.
[Sitio para buscar SVGs](https://www.svgrepo.com/vectors/facebook/)
[Proveedor de íconos](https://fontawesome.com/)



## ¿Qué sigue?

- encontrar problemas y realizar mejoras
- investigar y aplicar SEO
- testear en distintos dispositivos/ambientes