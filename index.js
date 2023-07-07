import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectDatabse from "./Database/Database.js";

connectDatabse();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(9000, () => {
  console.log(`server listening on port http://localhost:9000`);
});
