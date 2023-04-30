"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
// Importing all the routes
const indexroute = require("../docs/index.js");
const aboutusroute = require("../docs/aboutus.js");
const contactroute = require("../docs/contact.js");
// Handling routes request
app.use("/", indexroute);
app.use("/aboutus.html", aboutusroute);
app.use("/contact.html", contactroute);
app.listen((3000), () => {
    console.log("Server is Running");
});
//# sourceMappingURL=app.js.map