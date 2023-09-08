# EugeniaQR
Prototipo en React para poner a prueba el nuevo feature.
El proposito de este proyecto es tener una app donde se tenga un login, con usuarios los cuales mediante algunos datos pueden ingresar al sistema los cuales son:
●Nombre
● Apellidos
● Correo electrónico
● Contraseña (encriptada)
● Número de departamento

Estos usuarios pueden realizr codigos QR con los cuales puede dar acceso a la viviendo con un pase de inivitado con los datos correspondientes los cuales son:
● Nombre del invitado que ingresará
● Fecha y hora de entrada
● Fecha de caducidad de la invitación-

Requisitos para utilizar la app
●Tener NodeJS
●Tener MongoDB
●Se recomienda usar Chrome

Pasos para iniciar la app
●Descarga el archivo desde git
●En la linea de comandos, dirigete hacia la carpeta del proyecto
●cd backend 
●node .\src\index.js
●cd ../frontend
●npm start


Metas logradas:
●Creacion de ambiente backend con Express y rutas
●Creacion del squema para trabajar con MongoDb por medio de Mongoose
●Peticiones REST API
●Creacion de usuarios y qr
●Frontend realizado con React y bootstrap
●Implementación de Router de react
●Utilización de elementos de react
●Interfaz capaz de las tareas 
●Utilizacion de await/async


Roadblocks:
●La implementación de Redux se vio comprometida debido a que no se pudo manejar los datos globales que la herramienta ofrece con los componentes de react
●El login se logro, pero no es necesario para interactuar con la pagina
●El codigo QR no se genera debido a un problema de sincronización
●Encriptacion de password

Extras
●Utilización de variables de entorno
●Utilizacion de MongoDB
●Utilizacion de Insomia
