const express = require("express");
const color = require("colors");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

//Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server running on port ${port}`));
