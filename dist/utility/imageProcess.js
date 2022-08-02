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
exports.imageExist = exports.process = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const process = (name, height, width) => __awaiter(void 0, void 0, void 0, function* () {
    // create file name and distaniton
    const outDir = path_1.default.resolve(`thumbnul/${name}-${height}-${width}.jpg`);
    //check if file exist
    // create and resize the image
    try {
        const images = fs_1.default.readdirSync(path_1.default.resolve('thumbnul'));
        //delete if existe
        for (const image of images) {
            if (image.startsWith(name)) {
                fs_1.default.unlinkSync(path_1.default.resolve(`thumbnul/${image.toString()}`));
            }
        }
        yield (0, sharp_1.default)(path_1.default.resolve(`full/${name}.jpg`))
            .resize({ height: height, width: width })
            .toFile(outDir);
        const result = {
            status: true,
            content: outDir,
        };
        return result;
    }
    catch (e) {
        const result = {
            status: false,
            content: 'unexpected error happend',
        };
        return result;
    }
});
exports.process = process;
const imageExist = (path) => __awaiter(void 0, void 0, void 0, function* () {
    let final = {
        status: false,
        content: 'image resize',
    };
    try {
        if (fs_1.default.existsSync(path)) {
            final = {
                status: true,
                content: path,
            };
        }
        else {
            final = {
                status: false,
                content: 'image not here',
            };
        }
    }
    catch (e) {
        final = {
            status: false,
            content: 'unexpeted error ocuure',
        };
    }
    return final;
});
exports.imageExist = imageExist;
