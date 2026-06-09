# Auth API with JWT

Sistema de autenticación con JWT, cookies httpOnly y base de datos local.

## Características

- ✅ Registro de usuarios con contraseña hasheada (bcrypt)
- ✅ Login con token JWT
- ✅ Cookies httpOnly para mayor seguridad
- ✅ Rutas protegidas
- ✅ Vistas con EJS
- ✅ Base de datos local (db-local)

## Tecnologías

- Express.js
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- EJS
- db-local

## Instalación

```bash
npm install
```

## Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

El servidor corre en `http://localhost:3005`

## Rutas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Página principal |
| POST | `/register` | Registrar usuario |
| POST | `/login` | Iniciar sesión (devuelve JWT) |
| POST | `/logout` | Cerrar sesión |
| GET | `/protected` | Ruta protegida (requiere token) |

## Ejemplo de uso

### Registrar usuario
```bash
POST http://localhost:3005/register
Content-Type: application/json

{
  "username": "miusuario",
  "password": "123456"
}
```

### Login
```bash
POST http://localhost:3005/login
Content-Type: application/json

{
  "username": "miusuario",
  "password": "123456"
}
```

## Validaciones

- `username`: mínimo 3 caracteres
- `password`: mínimo 6 caracteres

## Autor

Claudio Cataldo
