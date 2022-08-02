"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const imageProcess_1 = require("../utility/imageProcess");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isImageExist = yield (0, imageProcess_1.imageExist)(path_1.default.resolve(`thumbnul/${req.query.name}-${req.query.h}-${req.query.w}.jpg`));
    // image is not exist so create it ans return it
    if (isImageExist.status == false) {
        const response = yield (0, imageProcess_1.process)(req.query.name, parseInt(req.query.h), parseInt(req.query.w));
        res.sendFile(response.content);
    }
    else {
        res.sendFile(path_1.default.resolve(`thumbnul/${req.query.name}-${req.query.h}-${req.query.w}.jpg`));
    }
}));
exports.default = router;
