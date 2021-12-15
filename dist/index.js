"use strict";
// npm init -y ---> git init ---> npm i typescript ---> npx tsct --init
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
// imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// setup
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // setting up express
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    // setting up graphql
    // app.use("/graphql", graphqlHTTP({
    //     schema,
    //     graphiql: true
    // }))
    app.listen(5000, () => console.log('server running'));
});
main().catch(err => console.log(err));
