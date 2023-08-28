const express = require("express");
const mongoose = require("mongoose");

// create an instance of express
const app = express();

app.use(express.json());
// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://fangwoei22f:NJCRzIpQAyQmgwm1@cluster0.2j4w95k.mongodb.net/task-scheduler"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const taskRouter = require("./routes/task");
const categoryRouter = require("./routes/category");

app.use("/task", taskRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send(
    "<button><a href='/category'>Categorys</a></button><button><a href='/task'>task</a></button>"
  );
});

// app.get("/tasks", (req, res) => {
//   res.send("<a href='/'>DUMBASS</a>");
// });

// start the server
app.listen(1226, () => {
  console.log("Server is running at http://localhost:1226");
});
