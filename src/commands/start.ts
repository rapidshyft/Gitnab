import { Bot } from 'grammy';

export const startCommand = (bot: Bot) => {
	bot.command('start', async (ctx) => {
		const name = ctx.from?.first_name;
		await ctx.reply(`Hello ${name}`);
	});
};
