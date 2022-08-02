"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const image_size_1 = __importDefault(require("image-size"));
const path_1 = __importDefault(require("path"));
const existedImage = (req, res, next) => {
    const imageName = `${req.query.name}`;
    const height = req.query.h;
    const width = req.query.w;
    const imagePath = path_1.default.resolve(`thumbnul/${imageName}-small.jpg`);
    (0, fs_1.readFile)(imagePath, (err, data) => {
        if (data == undefined) {
            res.status(404);
            res.end('image not found');
            return;
        }
        else {
            const dimitions = (0, image_size_1.default)(imagePath);
            if (dimitions.width == width && dimitions.height == height) {
                res.sendFile(path_1.default.resolve(`thumbnul/${req.query.name}-small.jpg`));
            }
            else {
                next();
            }
        }
    });
};
exports.default = existedImage;
