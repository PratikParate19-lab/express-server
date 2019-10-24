"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});
exports.User = mongoose_1.default.model('user', userSchema);
//# sourceMappingURL=UserSchema.js.map