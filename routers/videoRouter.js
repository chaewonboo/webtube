//쪼개서 사용하기 위한 라우터 정의한 부분.

import express from "express";
import routes from "../routes";

//밖에서 라우터들을 사용하게 하기위해 밖으로 보내는 export 를 앞에 붙임.
const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));

//export default 는 파일로 export 한다는것
export default videoRouter;
