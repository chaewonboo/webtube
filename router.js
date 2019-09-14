//쪼개서 사용하기 위한 라우터 정의한 부분.

import express from "express";

//밖에서 라우터들을 사용하게 하기위해 밖으로 보내는 export 를 앞에 붙임.
export const userRouter = express.Router();

//두번째 인자 자리에 익명의 함수를 라우터 안에 넣음.

//localhost:4000/user 에 입장했을때 나옴
userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
//localhost:4000/user/password 에 입장했을때 나옴 
//나중에 패스워드 처리부분 이런식으로 만들수 있음. 쪼개서 해체한다 -> express 의 장점.
userRouter.get("/password", (req, res) => res.send('user password'));