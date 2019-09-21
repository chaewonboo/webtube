//홈 같은 글로벌 라우터 사용 부분.
//독자적으로 url을 다루는 방법이 이런거다 router 를 사용.
import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("Home"));
globalRouter.get(routes.join, (req, res) => res.send("Join"));
globalRouter.get(routes.login, (req, res) => res.send("Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Logout"));
globalRouter.get(routes.search, (req, res) => res.send("Search"));

export default globalRouter;