export const home = (req, res) => res.render("home", { pageTitle: "Home"});
export const search = (req, res) => res.render("search", { pageTitle: "Search"});
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});
// search 는 req, res를 함수의 인자로 입렵받고 res.send('search)로 리턴함
// 화살표의 의미가 함수의 return 을 요약해서 쓴거임. {retun res.send("Search")} 이걸 줄인겅미