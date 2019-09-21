//쪼개서 사용하기 위한 라우터 정의한 부분.

import express from "express";
import routes from "../routes";

//밖에서 라우터들을 사용하게 하기위해 밖으로 보내는 export 를 앞에 붙임.
//이렇게 쓰는건 오직 이 변수만 export 한다는 거임 default X!
//export const userRouter = express.Router();

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) =>
	res.send("Change Password")
);

export default userRouter;