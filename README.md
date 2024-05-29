# Desafio-de-tripulaciones-grupo-2

El proyecto se basa en 2 máquinas, la parte de Frontend realizada con React (Vite) se encuentra en la carpeta "Client" y el Backend se encuentra en la carpera "Server" donde se ha utilizado NodeJs y Express.

### USO DEL PROYECTO
Se ha desplegado en render https://desafio-de-tripulaciones-grupo-2.onrender.com/ y para acceder de forma local hay que seguir los siguientes pasos:

Para levantar el servidor, tenemos que entrar en la carpeta antes mencionada de "server", crear el package .json e instalar los paquetes de dependencias 
```zsh
cd server
npm install
```
Rellenar el archivo de conexión a BBDD, en este caso PostgreSql. Se deja referencia en el archivo ".env.example"
```zsh
npm install
echo 'DB__HOST=\nDB__USER=\nDB__PASSWORD=\nDB__PORT=5432\nDB__DATABASE=\nULTRA_SECRET_KEY='>.env
```
Para la clave Ultra Secreta se puede usar un generador de contraseñas como éste [password generator](https://www.lastpass.com/es/features/password-generator#generatorTool)
La parte visual Frontend se situa por componentes en la carpeta "src". Para levantar la visualización
```zsh
npm run dev
```
----
## Express
### Routes

1. Routes
En server/routes podremos encontrar los endpoints creados:
* users: datos de usuarios de la aplicacion (employee y admin), incluye -> el registro, login, logout, mostrar usuarios, bloquear usuarios
* resources: donde se controla el Token de usuario y las rutas protegidas para cambiar las vistas
* info.routes: datos de alumnos

<br>

2. Conexión BBDD
* Configuración en server/config con los datos de conexión en .env
* Sentencias SQL en server/queries
* Modelos de datos en server/models lleva las funciones que se van a usar
* Controladores en server/controllers que lleva la parte lógica del sitio, se encarga de recibir y devolver datos procesados

<br>

3. Middlewares - Funciones intermedias entre procesos
* Se ha usado Morgan para proteger solicitudes de registro HTTP para node.js
* El manejador de las vistas de Administrador y 

<br>








3. Postman

Para probar las APIs se encuentra el archivo server/LassoClimber.postman.js

4. Utilidades

Restos de archivos que se han usado
- Datos de inicio para cargar la bbdd (array de objetos)
- Scrapper de 2 webs que no han funcionado correctamente.


## React 

Se ha usado Vite como herramienta de compilacion de React
```zsh
npm create vite@latest
```
* **Estructurado en componentes** => Organizado en carpetas src/components

* **Estilos** => Se ha usado Sass, estructurado en la carpeta src/styles