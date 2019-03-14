import axios from "axios";

export default {
    //Search for books based on title
   loginUser: function(loginUser) {
          return axios.get("/api/user",loginUser);
        },   
   
  // Gets the posts with the given Category and Location

  getPosts: function(category,location) {
    return axios.get("/api/post"+ category + location );
  },
  /*// Deletes the pos with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },*/
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/post", postData);
  },
  saveUser: function(UserData) {
    return axios.post("/api/user", UserData);
  }
};

