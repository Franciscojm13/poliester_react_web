# Poliéster

## Descripción

Poliéster es el proyecto artístico personal de Francisco Mora, el cual nace bajo la necesidad de plasmar la creatividad en canciones y trabajos manuales como el collage, el dibujo y la fotografía análoga.

Esta SPA tiene el propósito de mostrar dichas creaciones a modo de repositorio artístico, con la posibilidad de realizar compras de los trabajos que estén disponibles en el momento.

Para efectos del curso "React JS" de Coderhouse, este sitio está enfocado netamente en mostrar la funcionalidad del proceso de compra, contando con una base de datos alojada en el servicio Firebase.

---

## Dependencias usadas

Se instaló Node JS como entorno de ejecución del código, y mediante NPM se instaló la herramienta Vite JS para construir la App y contar con un servidor local para ejecutarla. Luego, se instaló React JS para Vite.

Mediante NPM se instalaron las siguientes dependencias:

* Firebase "9.9.1"
* React JS "18.0.0"
* React-Bootsrap "2.4.0"
* React-Dom "18.0.0"
* React-Router-Dom "6.3.0"
* React-Toastify "9.0.8"
* Sass "1.53.0"
* Vite "2.9.9"

---

## Creación de la base de datos

Para simular el backend de la App y poder hacer peticiones pertinentes, se creó una base de datos tipo NoSQL en el servicio gratuito Firebase. En esta base de datos está almacenada toda la información acerca de los Items a vender y las órdenes de compra realizadas por el usuario. Esta data está organizada en Colecciones, Documentos y Campos.

### Colección de Items

Se crea la colección "items" que contiene los productos a vender. Por cada item se genera un documento con Id único y sus campos correspondientes.

Ejemplo de un documento de la colección "items":

* ID: "2XYK6eRfjMkHA11ZTvY0"

  * **categoria**: "Collage Tipo 2"
  * **foto**: "/src/assets/photos/microbloqueo_13.jpg"
  * **nombre**: "Microbloqueo XIII"
  * **precio**: 15000
  * **stock**: 10

### Colección de Órdenes

La colección "ordenes" será creada automáticamente a la hora que el usuario genere una compra en el sitio. Esto se logra gracias a la acción por defecto de la función "addDoc()", la cual al insertar el nuevo documento en el Firestore, crea una nueva colección si no encuentra la indicada en el pusheo.

Cada orden es un documento con Id único que contiene un objeto con la infomación del comprador, y un array con la información de los items comprados; además del precio total de la compra.

Ejemplo de un documento de la colección "ordenes":

* ID: "04YgAnKcrGLhx74o7HTR"

  * comprador
    * direccionComprador: "sim gonz 8729"
    * emailComprador: "f@gmail.com"
    * confirmarEmailComprador: "f@gmail.com"
    * nombreComprador: "Francisco Mora"
    * telefonoComprador: "523454"

  * items
    * 0
      * cantidad: 4
      * id: "2XYK6eRfjMkHA11ZTvY0"
      * precio: 15000
      * producto: "Microbloqueo XIII"
    * 1
      * cantidad: 5
      * id: "uKxP9xe4Ilw09I0PeYxn"
      * precio: 15000
      * producto: "Microbloqueo III"
  * totalCompra: 135000

---

## Navegación

Al ejecutar la App, se muestra la página de inicio que corresponde a la ruta raíz "/". La vista cargará los componentes Navbar, ItemListContainer e ItemList.  

El componente Navbar no sufrirá alteraciones de ningún tipo a lo largo de la navegación.

El brand siempre redirigirá a la raíz "/".

El componente ItemListContainer se encarga de hacer la petición a la base de datos para imprimir todos los items almacenados. Al tratarse de una petición que llevará "un tiempo" indefinido en resolverse, se muestra en pantalla un mensaje de carga que permanece hasta recibir la respuesta de Firebase.

Estando en este punto inicial, el usuario puede optar por ir directamente al detalle de los productos o pedir filtrar los items por su categoría y facilitar su búsqueda. Existen dos categorías disponibles de productos:

* Collage Tipo 1
* Collage Tipo 2

El filtrado de categorías se hace mediante Links en el Navbar.

El usuario puede revisar el detalle de cada producto haciendo click en su botón o en su respectiva imagen. Esta acción redirigirá a la url "/itemDetalle/:idDetalleProducto" y se mostrará una nueva vista compuesta por los componentes ItemDetailContainer, ItemDetail e ItemCount.

Al clickear el botón "Agregar al Carro", se redirecciona a la url "/cart" en donde se muestra el carrito actual junto a las unidades de productos agregados y el precio total a pagar.

Luego de que se haya agregado todo lo que el usuario desea, se procede a clickear el botón "Ir al checkout", redireccionando a la url "/checkout".

En la vista de checkout, se muestra el formulario que debe ser llenado obligatoriamente por el usuario para generar una nueva orden de compra.

Al clickear "Ir a pagar", se muestra en pantalla el número de la orden, el nombre y dirección del comprador, informando así que la compra ha resultado exitosa. Adicionalmente, el carrito es vaciado.

El usuario puede acceder al carrito de compras en cualquier momento, incluso en la vista del mismo checkout. Si no hay productos agregados, se informa que el carro está vacío, y además el contador del CartWidget no es mostrado.

En el carrito en todo momento se muestra un Link que permite volver a la ruta raíz "/" y mostrar todos los productos para seguir agregando al carro.

---

## Proceso de compra

Se accede al detalle del producto deseado y se indica cuantas unidades se quiere agregar al carro mediante el componente ItemCount. Dicha cantidad está sujeta al stock de cada producto. Por simplicidad, todos los productos tienen un stock de 10 unidades.

Al agregar la cantidad deseada se hace click en "Agregar al Carro", lo que desmonta el contador y muestra un botón "Ver Carrito" que lleva al Cart.

Estando en el carrito de cómpras el usuario tiene la libertad de agregar o quitar unidades del producto agregado (sujeto a su stock), o simplemente eliminar el item junto a su cantidad de forma inmediata. Además, se ofrece la posibilidad de vaciar todo el carro para empezar la selección de productos nuevamente.

El precio total de la compra se va actualizando dinámicamente con cada modificación en el carro.

Una vez teniendo los productos deseados en el carro, se clickea el botón "Ir al checkout" para ingresar los datos del comprador y finalizar la compra.

En el formulario del checkout se pide una confirmación del email ingresado. En caso de que los email no coincidan, no permite generar la orden y se muestra una notificación de error creada con Toastify que informa al usuario de la discordancia. Tampoco se permite generar la orden si es que existen campos sin llenar.

Habiendo ingresado los datos correctamente, el usuario puede proceder a pagar. El evento que se ejecuta en ese momento genera una orden de compra que es pusheada a la colección "ordenes" en el Firestore. Dicha orden contiene todos los datos relevantes sobre el comprador y los productos comprados. Por otro lado, el carrito es vaciado para posibles nuevas compras.

Para información del usuario, se muestra en pantalla que la compra se ha realizado con éxito, mostrando el número de orden (Id único de la orden generada), junto al nombre y dirección del comprador.

Con esto se da por finalizado el proceso de compra, dejando libre al usuario para volver a navegar por la página y realizar una nueva compra.

---
