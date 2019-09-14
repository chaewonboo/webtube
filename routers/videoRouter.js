//쪼개서 사용하기 위한 라우터 정의한 부분.

import express from "express";

//밖에서 라우터들을 사용하게 하기위해 밖으로 보내는 export 를 앞에 붙임.
const userRouter = express.Router();

//export default 는 파일로 export 한다는것
export default videoRouter;