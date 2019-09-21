//홈 같은 글로벌 라우터 사용 부분.
//독자적으로 url을 다루는 방법이 이런거다 router 를 사용.
import express from "express";
import routes from "../routes";
import { home, Search, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;