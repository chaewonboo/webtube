// routes.js 여기에 url 써서 어디서든지 불러옴

// Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    //object 를 만드는중
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
	    if (id) {
	      return `/users/${id}`;
	    } else {
	      return USER_DETAIL;
	    }
	},
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
	    if (id) {
	      return `/videos/${id}`;
	    } else {
	      return VIDEO_DETAIL;
	    }
	},
    editVideo: id => {
      if (id) {
        return `/videos/${id}/edit`;
      } else {
        return EDIT_VIDEO;
      }
    },
    deleteVideo: id => {
      if (id) {
        return `/videos/${id}/delete`;
      } else {
        return DELETE_VIDEO;
      }
    }
};

export default routes;
// 이제 routes 를 어디서든 사용가능.
