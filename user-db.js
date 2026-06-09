import DBLocal from "db-local";
import crypto from "node:crypto";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "./config.js";

const { Schema } = new DBLocal({ path: "./db" });

// Esquema de usuario
const User = Schema("User", {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Repositorio de usuarios
export class UserRepository {
  static async create({ username, password }) {
    Validation.username(username);
    Validation.password(password);

    const existingUser = User.findOne({ username });
    if (existingUser)
      throw new Error(`The username "${username}" is already taken`);

    const _id = crypto.randomUUID();
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

    User.create({ _id, username, password: hashedPassword }).save();

    return _id;
  }

  // Método para autenticar a un usuario
  static async login({ username, password }) {
    Validation.username(username);
    Validation.password(password);

    const user = User.findOne({ username });
    if (!user) throw new Error("User not found");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid password");

    const { password: _, ...publicUser } = user;
    return publicUser;
  }
}
// Clase para validación de datos
class Validation {
    // Métodos estáticos para validar username y password
  static username(username) {
    if (typeof username !== "string")
      throw new Error("Username must be a string");
    if (username.length < 3)
      throw new Error("Username must be at least 3 characters long");
  }
// Método para validar password
  static password(password) {
    if (typeof password !== "string")
      throw new Error("Password must be a string");
    if (password.length < 6)
      throw new Error("Password must be at least 6 characters long");
  }
}
