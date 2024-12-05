import { Bot } from 'grammy';

export const startCommand = (bot: Bot) => {
	bot.command('help', async (ctx) => {
		await ctx.reply(`help section`);
	});
};
