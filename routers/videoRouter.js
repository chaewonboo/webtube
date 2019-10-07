//쪼개서 사용하기 위한 라우터 정의한 부분.

import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    getEditVideo,
    postEditVideo
  } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

//밖에서 라우터들을 사용하게 하기위해 밖으로 보내는 export 를 앞에 붙임.
const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

//export default 는 파일로 export 한다는것
export default videoRouter;
