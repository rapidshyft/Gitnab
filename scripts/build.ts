import express from "express";
import { webhookCallback } from "grammy";
import { bot } from "../src/bot";

const app = express(); // or whatever you're using
app.use(express.json()); // parse the JSON request body

// "express" is also used as default if no argument is given.
app.use(webhookCallback(bot, "express"));
