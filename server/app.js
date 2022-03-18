const express = require("express");
const app = express();
require("./config/mongoose");
require("dotenv").config();
const session = require("express-session");
const morgan = require("morgan");
const cors = require('cors');
const userRouter = require("./modules/user/route");
const userAuthRouter = require("./modules/user/authRoute");
const cartRouter = require("./modules/cart/route");
const cardRoute = require("./modules/card/route");
const productRoute = require("./modules/product/route");
const contactForm = require("./modules/contact-us/route");
const adminEntery = require("./modules/adim/route");
let MongoStore = require('connect-mongo');

app.set("trust proxy", 1);


app.use(morgan("dev"));
app.use(express.json());
const corsOptions = {
  //To allow requests from client
  //"http://localhost:3000"
  origin: [
    process.env.LOCAL_PORT,
    process.env.FRONT_END_DOMAIN,
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions));


//ROUTES
app.use("/api", session({
  name: 'SessionCookie',
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.URI || 'mongodb://localhost/mardi_gras_rest_api_testing' }),
  cookie: {
    ameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
    secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
  }
}), adminEntery);
app.use("/api/cards", cardRoute);
app.use("/api/users", userRouter);
app.use("/api/auth", userAuthRouter);
app.use("/api/products", productRoute);
app.use("/api/contact", contactForm);
app.use("/api/cart", cartRouter);


const port = process.env.PORT || 3900;
app.listen(port, console.log(`Connected to Port ${port}`));