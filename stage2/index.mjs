import express from "express";
import cors from "cors";
import records from "./routes/endpoints.mjs";
 
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});