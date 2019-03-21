import axios from "axios";

export default {
  //Search for users based on username
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
<<<<<<< HEAD
  getUserBuys: function (curruserasBuyerID) {
    console.log("Current user in API getUserBuys is" + curruserasBuyerID);
    return axios.get("/api/post",{
      params: curruserasBuyerID
    });
=======

  getUserBuys: function (curruser) {
    console.log("Current user in API getUserBuys is" + curruser);
    return axios.get("/api/buy/" + curruser)
>>>>>>> 58296302da97a44c5ff5013a32bb470369b76496
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

