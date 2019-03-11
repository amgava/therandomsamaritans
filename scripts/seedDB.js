const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/randomsamaritans", { useNewUrlParser: true }
);

const userSeed = [
  {
    userId: "Stephen",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  },
  {
    userId: "Stephen",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  },
  {
    userId: "Stephen",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    userId: "Stephen",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  },
  {
    userId: "Stephen",
    firstName: "King",
    lastName: "link.address",
    email: "email.address",
    date: new Date(Date.now())
  },
  {
    userId: "Stephen",
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
    postContent: "email.address",
    date: new Date(Date.now())
  },
  {
    title: "My Post",
    author: "Stephen King",
    link: "link.address",
    postContent: "email.address",
    date: new Date(Date.now())
  },
  {
    title: "My Post",
    author: "Stephen King",
    link: "link.address",
    postContent: "email.address",
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