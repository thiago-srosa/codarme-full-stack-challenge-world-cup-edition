import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

import Router from 'koa-router';



export const router = new Router();

router.get('/', async ctx => {
	ctx.body = { ola: "ola mundo" }
})

router.get('/users', async ctx => {
	ctx.body = { users: "ola users" }
})