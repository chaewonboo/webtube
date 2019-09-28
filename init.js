//Application(app.js) 에서 app파일을 가져와서 이렇게 쓸수 있는거다
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
 console.log(`♥️ Listening on: http://localhost:${PORT}`);
//mac 에서 이모티콘 ctrl + commands + space

app.listen(PORT, handleListening);
