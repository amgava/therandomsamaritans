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
<<<<<<< HEAD
  //  Deletes the pos with the given id
  updatePost: function(id) {
    return axios.put("/api/post/" + id);
  },
=======

  getUserPosts: function (curruser) {
    console.log("Current user in API getUserPosts is" + curruser);
    return axios.get("/api/post/" + curruser)
  },
  /*// Deletes the pos with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },*/
>>>>>>> 47b7f91239edee1731ebbd77029df2af2e18264f
  // Saves a post to the database
  savePost: function (postData) {
    return axios.post("/api/post", postData);
  },
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  }
};

