function Home(app) {
  app.get("/userList", (req, res) => {
    res.send("this is user list");
  });
}

module.exports = Home;
