const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUsers = async (req, res) => {
  const usernames = ["alice", "bob", "carol", "dave", "eve"];
  const users = await Promise.all(
    usernames.map((name) => User.findOneAndUpdate({ username: name }, {}, { upsert: true, new: true }))
  );
  res.json(users);
};
