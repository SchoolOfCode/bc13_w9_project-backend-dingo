// import and save express so we can call it
import express from "express"; 
const PORT = process.env.PORT;

// import in our resourcesRouter
import router from "./routes/resources.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/api/resources", router);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
