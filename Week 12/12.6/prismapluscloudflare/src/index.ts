import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		// prisma.log.create({ data: {} });
		const res = await prisma.log.create({
			data: {
				level: 'Info',
				message: 'this is message',
				meta: 'dcqwce',
			},
		});

		console.log(JSON.stringify(res));
		return Response.json(res);
	},
};
