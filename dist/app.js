"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
function event() {
    app.get('/', (req, res) => {
        res.send('HenHacks 2023!');
        return "HenHacks 2023";
    });
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
module.exports = event;
//# sourceMappingURL=app.js.map