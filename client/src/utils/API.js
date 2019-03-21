import axios from "axios";

export default {
  //Search for books based on title
  loginUser: function (usercheck) {
    console.log(usercheck);

    return axios.get("/api/user", {
      params: usercheck
  });
},
  // Gets the posts with the given Category and Location
  getPosts: function (getPost) {
    return axios.get("/api/post",{
      params: getPost
    });
  },

  getUserPosts: function (curruser) {
    console.log("Current user in API getUserPosts is" + curruser);
    return axios.get("/api/post/" + curruser)
  },
  getUserBuys: function (curruserasBuyerID) {
    console.log("Current user in API getUserBuys is" + curruserasBuyerID);
    return axios.get("/api/post",{
      params: curruserasBuyerID
    });
  },
  /*// Deletes the pos with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },*/
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/post", postData);
  },
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  }
};

