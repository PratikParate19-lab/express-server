"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./User/UserRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
mongoose_1.default.connect('mongodb://localhost:27017/local', { useNewUrlParser: true }, err => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB');
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err);
    }
});
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
const port = 3001;
app.use('/', UserRoutes_1.default);
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map