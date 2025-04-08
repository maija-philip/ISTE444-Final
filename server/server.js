/**
 * Set up Express Server
 */
require("dotenv").config(); // Load .env variables

// imports
const express = require("express"); // REST API 
const session = require("express-session"); // sessions to log the user out
const logger = require("morgan"); // logging out the routes
const cors = require("cors"); // defines our cors policy (protects our api)
const cookieParser = require("cookie-parser"); // parse the cookies that our session uses
const path = require("path"); // finding the react pages

// create app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(logger("dev"));
app.enable("trust proxy");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build"), { index: false }));

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 1_800_000, httpOnly: true, secure: false }
  })
);

// CORS policy middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"], // Allow requests from frontend
    credentials: true, // Allow cookies and authorization headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

app.set("trust proxy", true);


// add the routes
let frontendRouter = require("./routes/frontendRouter.js");
let crudRouter = require("./routes/CRUDroutes.js");

// use the routes
app.use("/", frontendRouter);
app.use("/api", crudRouter);

app.listen(8080); // 443 for https and 80 for http
console.log("Express started on port 8080");
