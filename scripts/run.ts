import { bot } from "../src/bot";

require("dotenv").config();

const isDevMode = process.env.DEV_MODE;

if (isDevMode) {
  bot.start();
}
