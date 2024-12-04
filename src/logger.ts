// logger.ts
import winston from "winston";
import { format } from "winston";
import { transports } from "winston";

const { combine, timestamp, printf, label, errors } = format;

// Custom log format
const customFormat = printf(
  ({ level, message, timestamp, label, stack }: any) => {
    if (stack) {
      return `${timestamp} [${label}] ${level}: ${message} - ${stack}`;
    }
    return `${timestamp} [${label}] ${level}: ${message}`;
  }
);

// Logger setup
const logger = winston.createLogger({
  level: "info", // Default log level
  format: combine(
    label({ label: "Gitnab" }), // Add a label for the app
    timestamp(), // Add timestamp
    errors({ stack: true }), // Capture error stack trace
    customFormat // Use the custom log format
  ),
  transports: [
    // Console transport (for development)
    new transports.Console({
      format: combine(
        winston.format.colorize(),
        winston.format.simple() // Use simple format for console logs
      ),
    }),
  ],
});

// Handle unhandled promises and exceptions
process.on("unhandledRejection", (error: Error) => {
  logger.error("Unhandled Rejection: ", error);
});

process.on("uncaughtException", (error: Error) => {
  logger.error("Uncaught Exception: ", error);
});

export default logger;
