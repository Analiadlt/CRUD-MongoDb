# CRUD desarrollado con MongoDb - NodeJS - ReactJS - Redux - CSS

Esta app consiste en un formulario CRUD (Altas, Bajas, Modificaciones) para los datos de vacas.

Tecnologías utilizadas:</br>
● React.js</br>
● MongoDB</br>
● Express/node.js

# 

# Instrucciones para poder correr la app.

Deben tener instalado: MongoDB y NPM.

1- Descargar el repositorio. 
      El proyecto consta de dos carpetas principales: </br>
      ● **api** para el servidor (backend) </br>
      ● **client** para el cliente (frontend)</br>

2- Crear una carpeta con el nombre **data** en el directorio raíz. 

3-En MongoDB crear una base de datos con el nombre **basto** y la colección **animals**.

3- En las carpetas  **api** y **client**, ejecutar el comando **npm install** para instalar dependencias. 

4- En consola ejecutar comando **mongod** para levantar el servidor MongoDB. 

5- Luego levantar ambos servidores, ejecutando en las carpetas **api** y **client**, el comando **npm start** en c/u.

El proyecto corre en los siguientes puertos:</br>
   - Backend: **http://localhost:3001/**</br>
   - Frontend: **http://localhost:3000/**</br>

# 

# Ingreso y modificación de datos

Los datos de los animales a guardar son:</br>
● ID SENASA (Alfanumerico 16 chars)</br>
● Tipo Animal (Novillo, Toro, Vaquillona)</br>
● Peso animal (kg)</br>
● Nombre de potrero.(Texto hasta 200 chars)</br>
● Tipo de Dispositivo (COLLAR, CARAVANA)</br>
● Número de dispositivo. (Alfanumerico 8 caracteres)</br>

En el formularios de alta y modificación se validan los campos ID SENASA y Número de dispositivo.
