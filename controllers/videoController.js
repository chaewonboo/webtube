import routes from "../routes";
import Video from "../models/Video";

 export const home = async (req, res) => {
   try {
     const videos = await Video.find({});
     res.render("home", { pageTitle: "Home", videos });
   } catch (error) {
     console.log(error);
     res.render("home", { pageTitle: "Home", videos: [] });
   }
 };

//검색할때 어떻게 나오게 할지에 대한 기능을 구현한 부분.
export const search = (req, res) => {
    const{
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload"});

export const postUpload = (req, res) => {
    const {
      body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "videoDetail"});

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});
// search 는 req, res를 함수의 인자로 입렵받고 res.send('search)로 리턴함
// 화살표의 의미가 함수의 return 을 요약해서 쓴거임. {retun res.send("Search")} 이걸 줄인겅미