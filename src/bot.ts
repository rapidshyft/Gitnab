import { Bot } from "grammy";
import express from "express";
import { webhookCallback } from "grammy";
import logger from "./logger"; // Import the logger

require("dotenv").config();

const app = express();
app.use(express.json()); // Parse the JSON request body

const isDevMode = process.env.DEV_MODE; // Make sure to check if DEV_MODE is 'true' or 'false'
const bot_token = process.env.BOT_TOKEN;

if (!bot_token) {
  logger.error("BOT_TOKEN is unset");
  throw new Error("BOT_TOKEN is unset");
}

const bot = new Bot(bot_token);

// Log bot command
bot.command("start", (ctx) => {
  logger.info("start command");
  ctx.reply("Hello");
});

if (isDevMode) {
  logger.info("Development mode: Bot is starting...");
  bot.start();
} else {
  logger.info("Production mode: Bot is starting...");
  app.use(webhookCallback(bot, "express"));
}
