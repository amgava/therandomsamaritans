/*const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/randomsamaritans", { useNewUrlParser: true }
);

const userSeed = [
  {
    userId: "Stephen 1",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  },
  {
    userId: "Stephen 2",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  },
  {
    userId: "Stephen 3",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  }
];

const postSeed = [
  {
    email: "My Email 1",
    location: "location 1",
    category: "category 1",
    postContent: "This is some demo post content 1",
    date: new Date(Date.now())
  },
  {
    email: "My Email 2",
    location: "location 2",
    category: "category 2",
    postContent: "This is some demo post content 2",
    date: new Date(Date.now())
  },
  {
    email: "My Email 3",
    location: "location 3",
    category: "category 3",
    postContent: "This is some demo post content 3",
    date: new Date(Date.now())
  }
];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " User records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " Post records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });*/