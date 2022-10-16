var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Koa from 'koa';
import Router from 'koa-router';
const app = new Koa();
const router = new Router();
router.get('/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = { ola: "ola mundo" };
}));
router.get('/users', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = { users: "ola users" };
}));
// response
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
