import { logger } from "./aplication/logging.js";
import { web } from "./aplication/web.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(axios)

global.require = require;

web.listen(8000, () => {
    logger.info("App Start")
})
