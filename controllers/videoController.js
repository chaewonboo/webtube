import routes from "../routes";
import Video from "../models/Video";

 export const home = async (req, res) => {
   try {
     const videos = await Video.find({}).sort({ _id: -1 });
     res.render("home", { pageTitle: "Home", videos });
   } catch (error) {
     console.log(error);
     res.render("home", { pageTitle: "Home", videos: [] });
   }
 };
 
//검색할때 어떻게 나오게 할지에 대한 기능을 구현한 부분.
export const search = async (req, res) => {
  const{
      query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload"});

export const postUpload = async (req, res) => {
    const {
      body: { title, description },
      file: { path }
    } = req;
    // To Do: Upload and save video
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description
    });
    //console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch ( error ){
    res.redirect(routes.home);
  }
}

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
// search 는 req, res를 함수의 인자로 입렵받고 res.send('search)로 리턴함
// 화살표의 의미가 함수의 return 을 요약해서 쓴거임. {retun res.send("Search")} 이걸 줄인겅미