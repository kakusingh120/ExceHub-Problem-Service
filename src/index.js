const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes/index");
const BaseError = require("./errors/base.error.js");
const errorHandler = require("./utils/errorHandler.js");
const app = express();



// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use("/api", apiRouter);


// Routes setup
app.get('/ping', (req, res) => res.send("hello"));


// last middleware if any error comes
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);

})