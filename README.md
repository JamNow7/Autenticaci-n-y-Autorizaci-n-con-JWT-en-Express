# Auth API with JWT

Sistema de autenticación con JWT, cookies httpOnly y base de datos local.

## 📸 Capturas de pantalla

### Página principal
Página principal

### Registro de usuario
Registro

### Inicio de sesión
Login

### Usuario autenticado
Usuario autenticado

### Ruta protegida
Ruta protegida

## Características

- ✅ Registro de usuarios con contraseña hasheada (bcrypt)
- ✅ Login con token JWT
- ✅ Cookies httpOnly para mayor seguridad
- ✅ Middleware de autenticación basado en JWT
- ✅ Rutas protegidas
- ✅ Vistas con EJS
- ✅ Base de datos local (db-local)
- ✅ Persistencia de usuarios

## Tecnologías

- Express.js
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- EJS
- db-local

## Instalación

bash npm install 

## Uso

### Desarrollo

bash npm run dev 

### Producción

bash npm start 

El servidor corre en:

text http://localhost:3005 

## Flujo de autenticación

1. El usuario se registra.
2. La contraseña se almacena hasheada con bcrypt.
3. El usuario inicia sesión.
4. Se genera un JWT firmado.
5. El token se almacena en una cookie httpOnly.
6. Un middleware verifica el token en cada petición.
7. Si el token es válido, el usuario puede acceder a rutas protegidas.

## Nota sobre la carpeta db/

La carpeta db/ está incluida en .gitignore y no se sube a GitHub. Esto es una buena práctica por las siguientes razones:

- 🛡️ Seguridad: Puede contener datos sensibles de desarrollo o pruebas.
- 🔄 Aislamiento: Cada desarrollador mantiene su propia base de datos local.
- 🧹 Limpieza: Evita conflictos entre distintos estados de la base de datos.

Al clonar el proyecto, la carpeta db/ se creará automáticamente cuando se registren usuarios por primera vez.

## Rutas

| Método | Ruta | Descripción |
|----------|----------|----------|
| GET | / | Página principal |
| POST | /register | Registrar usuario |
| POST | /login | Iniciar sesión |
| POST | /logout | Cerrar sesión |
| GET | /protected | Ruta protegida (requiere autenticación) |

## Ejemplo de uso

### Registrar usuario

http POST http://localhost:3005/register Content-Type: application/json  {   "username": "miusuario",   "password": "123456" } 

### Iniciar sesión

http POST http://localhost:3005/login Content-Type: application/json  {   "username": "miusuario",   "password": "123456" } 

### Respuesta exitosa

json {   "user": {     "_id": "uuid",     "username": "miusuario"   },   "token": "jwt-token" } 

## Validaciones

- username: debe ser string y tener un mínimo de 3 caracteres.
- password: debe ser string y tener un mínimo de 6 caracteres.

## Seguridad

- 🔒 Contraseñas almacenadas utilizando bcrypt.
- 🔑 Tokens JWT firmados con clave secreta.
- 🍪 Cookies httpOnly para evitar acceso desde JavaScript del navegador.
- 🚫 Las contraseñas nunca son enviadas al cliente.
- 🛡️ Protección de rutas mediante middleware de autenticación.

## Autor

*Claudio Cataldo