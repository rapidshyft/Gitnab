import { Bot } from "grammy";
require("dotenv").config();

const bot_token = process.env.BOT_TOKEN;
if (!bot_token) throw new Error("BOT_TOKEN is unset");

export const bot = new Bot(bot_token || "");

bot.command("start", (ctx) => ctx.reply("Hello"));

bot.on("message", (ctx) => ctx.reply("Got another message!"));
