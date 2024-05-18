const taskSchema = require("../model/newTask");
const userSchema = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const upload = require('../middleware/upload')
module.exports = {
  register: async (req, res) => {
    const { name, email, password } = req.body;


    bcrypt.hash(password, 10, async function (err, hash) {
      await userSchema.create({
        name: name,
        email: email,
        password: hash,
      });
    });
    res.status(200).json({
      status: "success",
      message: "Successfully Register",
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await userSchema.findOne({
      email: email,
    });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let resp = {
            id: user.id,
          };
          let token = jwt.sign(
            { id: resp.id },
            process.env.ACESS_TOKEN_SECRET,
            {
              expiresIn: 86400,
            }
          );
          if (token) {
            res.status(200).json({
              status: "success",
              message: "successfully login ",
              auth: true,
              token: token,
            });
          }
        } else {
          res.json({
            status: "error",
            message: "failure",
          });
        }
      });
    } else {
      res.json({ message: "this user not available" });
    }
  },
  updateUserProfile: async (req, res) => {
    const { name, email, image } = req.body;
    const user = await userSchema.findOne({ _id: res.token });
   
    if (user) {
      await userSchema.findByIdAndUpdate(res.token, {
        $set: {
          name: name,
          email: email,
          image: image,
          
        },
      });
      res.status(200).json({
        status: "success",
        message: "successfully update profile ",
      });
    } else {
      res.json({ message: "this user not available" });
    }
  },

  addNewTAsk: async (req, res) => {
    const { title, descrption, image } = req.body;
    const user = await userSchema.find({ _id: res.token });
    if (user) {
      await taskSchema.create({
        userId: res.token,
        title: title,
        descrption: descrption,
        isCompleted: false,
      });
      res.status(200).json({
        status: "success",
        message: "successfully addTask profile ",
      });
    } else {
      res.json({ message: "this user not available" });
    }
  },
  editTask: async (req, res) => {
    const { id, title, descrption, image } = req.body;
    const user = await taskSchema.findOne({ userId: res.token });
    if (user) {
      await taskSchema.findByIdAndUpdate(id, {
        $set: {
          title: title,
          descrption: descrption,
        },
      });
      res.status(200).json({
        status: "success",
        message: "successfully update task ",
      });
    } else {
      res.json({ message: "this user not available" });
    }
  },
  deleteTask: async (req, res) => {
    const { id } = req.body;
    const task = await taskSchema.find({ _id: id });

    if (task) {
      await taskSchema.deleteOne({ _id: id });
      res.status(200).json({
        status: "success",
        message: "successfully deleted task ",
      });
    }
  },
  isCompletedtask: async (req, res) => {
    const { id } = req.body;
    const task = await taskSchema.findOne({ _id: id });
    if (task) {
      if (task.isCompleted == false) {
        task.isCompleted = true;
        task.save();
        return res.status(200).json({
          status: "success",
          message: "successfully completed  task ",
          data: task.isCompleted,
        });
      } else {
        task.isCompleted = false;
        task.save();
        return res.status(200).json({
          status: "success",
          message: "successfully unCompleted task ",
          data: task.isCompleted,
        });
      }
    } else {
      res.json({
        status: "failure",
        message: "data already exist in database",
      });
    }
  },

  


};
