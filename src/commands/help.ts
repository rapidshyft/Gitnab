import { Bot } from 'grammy';

export const helpCommand = (bot: Bot) => {
	bot.command('help', async (ctx) => {
		await ctx.reply(
			`ℹ️ Here are the commands you can use:\n/start - Start interacting with GitNab.\n/track - Track a GitHub repository's releases.\n/untrack - Stop tracking a repository.\n/list - List all repositories you're tracking.\n/status - Check the status of your tracked repositories.\n/settings - Configure bot settings (e.g., notifications, channel).\n/help - Show this help message.`
		);
	});
};
