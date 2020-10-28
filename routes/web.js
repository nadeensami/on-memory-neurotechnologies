const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const submitController = require("../controllers/submit");
const getDataController = require("../controllers/getData");



let routes = app => {
  router.get("/", homeController.getHome);

  router.post("/submit", submitController.submitAllFeedback);

  router.get('/getdata', homeController.getHome);
  router.post("/getdata", getDataController.getData);

  return app.use("/", router);
};

module.exports = routes;
