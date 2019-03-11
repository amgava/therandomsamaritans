const mongoose = require("mongoose");
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
    title: "My Post",
    author: "Stephen King",
    link: "link.address",
    postContent: "This is some demo post content 1",
    date: new Date(Date.now())
  },
  {
    title: "My Post",
    author: "Stephen King",
    link: "link.address",
    postContent: "This is some demo post content 2",
    date: new Date(Date.now())
  },
  {
    title: "My Post",
    author: "Stephen King",
    link: "link.address",
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
  });