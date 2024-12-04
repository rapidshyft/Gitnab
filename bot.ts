import { Bot } from "grammy";
require("dotenv").config();

export const bot = new Bot(process.env.BOT_TOKEN || "");

bot.command("start", (ctx) => ctx.reply("Hello"));

bot.on("message", (ctx) => ctx.reply("Got another message!"));
