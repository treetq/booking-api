import User from "../models/User.js";

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    next(err);
    //res.status(500).json(error);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json(error);
  }
};
export const getUsers = async (req, res, next) => {
  // const failed = true;

  // if (failed) return next(createError(401,'You are not authenticated '));

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    //res.status(401).json(error);
    next(error);
  }
};
