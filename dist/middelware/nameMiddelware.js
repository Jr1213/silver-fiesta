"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const nameMiddelWare = (req, res, next) => {
    const imageName = req.query.name;
    const height = req.query.h;
    const width = req.query.w;
    (0, fs_1.readFile)(path_1.default.resolve(`full/${imageName}.jpg`), (err, data) => {
        if (!data) {
            res.status(404);
            res.end('image not found');
        }
    });
    if (!width || width <= 0 || isNaN(width)) {
        console.log(isNaN(width));
        res.status(404);
        res.end('width invaild');
        return;
    }
    if (!height || height <= 0 || isNaN(height)) {
        res.status(404);
        res.end('heigth invaild');
        return;
    }
    next();
};
exports.default = nameMiddelWare;
