"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserSchema_1 = require("./UserSchema");
const router = express_1.default.Router();
router.get('/user', (req, res) => {
    UserSchema_1.User.find({}).exec(function (err, data) {
        if (err) {
            return console.error(err);
        }
        return res.send(data);
    });
});
router.post('/user', (req, res) => {
    const createUser = new UserSchema_1.User({});
    createUser.firstName = req.body.firstName;
    createUser.lastName = req.body.lastName;
    createUser.save(function (err, data) {
        if (err) {
            return console.error(err);
        }
        return res.send(data);
    });
});
router.delete('/user/:id', (req, res) => {
    UserSchema_1.User.findOne({ _id: req.params.id }).exec((err, dres) => {
        if (err) {
            return res.send(err);
        }
        const deleteuser = new UserSchema_1.User(res);
        deleteuser.isDelete = true;
        deleteuser.save((delerr, delres) => {
            if (delerr) {
                return res.send(delerr);
            }
            return res.send(delres);
        });
    });
});
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map