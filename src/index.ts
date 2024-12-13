import { Bot, Context, webhookCallback } from 'grammy';
import { startCommand } from './commands/start';
import { helpCommand } from './commands/help';

export interface Env {
	BOT_INFO: string;
	BOT_TOKEN: string;
	DB: D1Database;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const bot = new Bot(env.BOT_TOKEN, { botInfo: JSON.parse(env.BOT_INFO) });

		startCommand(bot, env);
		helpCommand(bot);

		return webhookCallback(bot, 'cloudflare-mod')(request);
	},
};
