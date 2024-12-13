import { Bot } from 'grammy';
import { Env } from '..';

export const startCommand = (bot: Bot, env: Env) => {
	bot.command('start', async (ctx) => {
		const user_id = ctx.from?.id;
		const role = 'user';

		try {
			const existingUser = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user_id).first();

			if (!existingUser) {
				// If user does not exist, insert into the users table
				await env.DB.prepare('INSERT INTO users (id, role) VALUES (?, ?)').bind(user_id, role).run();
				await ctx.reply(`Welcome, ${ctx.from?.first_name}! You've been added.`);
			} else {
				// User already exists, send a different message
				await ctx.reply(`Welcome back, ${ctx.from?.first_name}!`);
			}
		} catch (error) {
			console.error(error);
			await ctx.reply('Something went wrong while processing your request.');
		}
	});
};
