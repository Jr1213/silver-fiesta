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
const path_1 = __importDefault(require("path"));
const imageProcess_1 = require("../../utility/imageProcess");
describe('process work', () => {
    const imagePath = path_1.default.resolve('thumbnul/img1-500-500.jpg');
    it('process working correctely', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, imageProcess_1.process)('img1', 500, 500);
        expect(res.status).toEqual(true);
        expect(res.content).toEqual(imagePath);
    }));
    it('resize function not throwing error', () => {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, imageProcess_1.process)('img1', 500, 500);
        })).not.toThrow();
    });
});
describe('check if image exist', () => {
    const imagePath = path_1.default.resolve('thumbnul/img1-500-500.jpg');
    const notExistImage = path_1.default.resolve('thumbnul/img1-1000-1000.jpg');
    it('return true if no image exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, imageProcess_1.imageExist)(imagePath);
        expect(res.status).toEqual(true);
        expect(res.content).toEqual(imagePath);
    }));
    it('check if  image exist function not throwing error', () => {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, imageProcess_1.imageExist)(imagePath);
        })).not.toThrow();
    });
    it('return false  if  image exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, imageProcess_1.imageExist)(notExistImage);
        expect(res.status).toEqual(false);
        expect(res.content).toEqual('image not here');
    }));
});
