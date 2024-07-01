const express = require("express");
const authRouter = require("./routers/auth-router");
const dbConn = require("./database/dbConn");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.use(errorMiddleware);
dbConn().then(() => {
  app.listen(port, () => {
    console.log(`server is live at ${port}`);
  });
});
