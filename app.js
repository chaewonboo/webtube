import express from "express";
import morgan from "morgan";
import helmet from "helmet"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
//이런식으로 라우터를 이용해 단지 url 을 분리하는 방법을 사용한다. 효율적인듯.
//controller 아니고 그냥 url 임 . 단지 url
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

//export 를 default 로 안했을때는 이렇게 사용해야함.
//import { userRouter } from "./router"

//babel 사용해서 최신 문법으로 바꿔줌 package.json 도 건들임.

//const express = require('express');
//이건 babel 쓰기 전 상태..

// require 는 node module 어딘가에서 가져오는거야
// express 라는 파일에서 찾으려고함 못찾으면 node_modules 폴더에서 찾는다  
const app = express();
// const 로 선언한 변수에 express 를 담는거다(실행)
// express import 한거임

//<!-- app object 들 -->
app.use(helmet());
app.set("view engine", "pug");

//서버가 유저에 대해 이해하기 위한 middle ware 를 설치했다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//보안용 morgan의 대체제로 많이 사용함
app.use(morgan("dev"));
//logging 기능을 가지게 해줌 morgan 이.

//변수를 전역적으로 사용할수 있게 해주는 js 파일 (middle ware)
app.use(localsMiddleware);

//#2.9 내용 그냥 url 가짐.
//글로벌 라우터를 하나 가진다 /join || /home || /search 이런걸 다루는거.
// 두개의 라우터를 가짐 user/me || user/mypage 이런식으로 사용해도 됨
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

