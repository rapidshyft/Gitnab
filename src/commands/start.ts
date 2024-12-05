import { Bot } from 'grammy';

export const startCommand = (bot: Bot) => {
	bot.command('start', async (ctx) => {
		const name = ctx.from?.first_name;
		await ctx.reply(
			`Welcome to Gitnab, your personal bot for tracking GitHub repositories and delivering the latest releases right to your Telegram channels! 🚀\n\nHere’s what you can do:\n\nTrack Repositories: Get notified and download new releases from your favorite GitHub repos.\nAuto Upload: Automatically upload release files to your selected Telegram channel.\nCustom Notifications: Receive detailed release notes or just the files — it’s up to you!`
		);
	});
};
