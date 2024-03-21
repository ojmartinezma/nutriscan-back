"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    // console.log(__dirname)
    console.log("servicios");
    res.send('api response');
});
router.get('/servicios', (_req, res) => {
    console.log("servicios");
    res.send('servicios');
});
module.exports = router;
