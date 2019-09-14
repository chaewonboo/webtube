const express = require('express');
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
    res.send("hello from home");
    //요렇게 해주면 리퀘스트도 하고 응답도 해줌!
}

function handleProfile(req, res){
    res.send("You are on my profile");
    //localhost:4000/profile
    //서버에서 잘 받는걸 확인할수 있음. 진짜 작동하는 서버처럼 만들려면 send() 안에 html 이나 css 를 보내주는 걸 적어야함 ex)database
}

app.get("/", handleHome);
//이것만 있으면 계속 로딩 get request 에 대한 응답이 있어야함.

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
// 4000개의 포트를 앱이 들어라 라고 하는거임 리슨하기 시작하면 handleListening 함수 실행하라.

// hello world!