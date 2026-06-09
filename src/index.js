import express from "express";
import { UserRepository } from "../user-db.js";
import jwt from "jsonwebtoken";
import {SECRET_JWT_KEY} from "../config.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3005;


app.set("view engine", "ejs");
app.set("views", "../views");
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserRepository.login({ username, password });
    const token = jwt.sign({id: user._id, username: user.username },SECRET_JWT_KEY,{expiresIn: "1h"});

    res.cookie("access_token", token,{httpOnly: true});
    res.send({user,token});
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});
app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  console.log(req.body);
  
  try{
    const id =  await UserRepository.create({username, password})
    res.send({id})
  }catch(error){
    res.status(401).send({error: error.message})
  }
  

  
});
app.post("/logout", (req, res) => {});

app.get("/protected", (req, res) => {
  const token = req.cookies.access_token;
  if (!token){
    return res.status(403).send({error: "No autorizado"})
  }
  try{
    const data = jwt.verify(token,SECRET_JWT_KEY);
    res.render("protected",data);
  }catch(error){
    res.status(403).send({error: "No autorizado"})

  }
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
