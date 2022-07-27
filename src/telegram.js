import { Telegraf } from "telegraf";
import { TELEGRAM_API_TOKEN } from "./config.js";

const bot = new Telegraf(TELEGRAM_API_TOKEN);

bot.start(ctx => {
    ctx.reply("Hola, soy 🤖 BlancoBot!");
    ctx.reply("Los comandos disponibles son: \n/comenzar - Requerido para comenzar a usar el bot");
});

bot.command("comenzar", ctx => {
    ctx.reply("El ID de tu usuario es: " + ctx.from.id),
    ctx.reply("No olvides compartirlo con el departamento de sistemas para que sea agregado a tu usuario 👍");
});

bot.on("text", ctx => {
    ctx.reply("Hola, soy 🤖 BlancoBot!");
});

bot.launch();

export default bot;