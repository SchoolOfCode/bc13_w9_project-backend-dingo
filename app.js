// import and save express so we can call it
import express from "express"; 
const PORT = process.env.PORT;
import cors from "cors";

// import in our resourcesRouter
import router from "./routes/resources.js";
//order of middleware is IMPORTANT!
const app = express();
app.use(express.json());
app.use(express.static("public"));
//CORS should be before router
app.use(cors("*"))
app.use("/api/resources", router);

//shows server listening to correct PORT
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
