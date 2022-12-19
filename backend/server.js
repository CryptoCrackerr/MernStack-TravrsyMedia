const express = require("express"); // express is the backend web framework
const dotenv = require("dotenv").config(); // need to import it because we have environment variables
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000; // this is the port where we want our server to run on

connectDB();

// now we need to initialize express
const app = express();

// add the middleware to get the body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
