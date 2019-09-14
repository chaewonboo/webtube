import express from "express";
import morgan from "morgan";
import helmet from "helmet"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//babel 사용해서 최신 문법으로 바꿔줌 package.json 도 건들임.

//const express = require('express');
//이건 babel 쓰기 전 상태..

// require 는 node module 어딘가에서 가져오는거야
// express 라는 파일에서 찾으려고함 못찾으면 node_modules 폴더에서 찾는다  
const app = express();
// const 로 선언한 변수에 express 를 담는거다(실행)
// express import 한거임

//handleListening 더 이쁘게 만드는법
const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
    // ` 랑 ' 이거 차이 ` 이게 더 높은거임
    //서버 끄면 안에 있는 문장 나오게 하는거
}
function handleHome(req, res){
    //두개 req , res 를 호출함
    //정보를 얻고싶으면 누가 페이지에 접근했나 -> req object 사용
    //res 는 서버로부터 의 응답
    res.send("Hello from home");
    //요렇게 해주면 리퀘스트도 하고 응답도 해줌!
}

const handleProfile = (req, res) => res.send("You are on my profile");
    //funtion 을 섹시하게 쓰는법.
//localhost:4000/profile
//서버에서 잘 받는걸 확인할수 있음. 진짜 작동하는 서버처럼 만들려면 send() 안에 html 이나 css 를 보내주는 걸 적어야함 ex)database

/*const betweenHome = (req, res, next) => {
    //권한을 준거임 req, res , next
    console.log("Between");
    next();
} 
//middle ware 확인하는과정.

app.use(betweenHome);*/
//이렇게 쓰면 웹사이트 어딜가던 middle ware 를 확인할수 있음

//서버가 유저에 대해 이해하기 위한 middle ware 를 설치했다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(helmet());
//보안용 morgan의 대체제로 많이 사용함
app.use(morgan("dev"));
//logging 기능을 가지게 해줌 morgan 이.

/*const middleware = (req, res ,next) => {
    res.send("not happening");
    //next 함수 대신 res.send 함수를 사용하면 middleware 가 연결을 끊을수 있다.

}*/

app.get("/", handleHome);
// "/" -> 홈.
//이것만 있으면 계속 로딩 get request 에 대한 응답이 있어야함.

app.get("/profile", handleProfile);


app.listen(PORT, handleListening);
// 4000개의 포트를 앱이 들어라 라고 하는거임 리슨하기 시작하면 handleListening 함수 실행하라.

// hello world!!