//쪼개서 사용하기 위한 라우터 정의한 부분.

import express from "express";
import routes from "../routes";
import {
	users,
	userDetail,
	editProfile,
	changePassword
} from "../controllers/userController";
//밖에서 라우터들을 사용하게 하기위해 밖으로 보내는 export 를 앞에 붙임.
//이렇게 쓰는건 오직 이 변수만 export 한다는 거임 default X!
//export const userRouter = express.Router();

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;