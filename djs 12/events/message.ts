/* MESSAGE EVENT */


// Libs
import { Event, Command } from '../types';
import { Message } from 'discord.js';


// Event
export const event: Event = {
    name: 'message',
    run: async (client: any, msg: Message) => {
        // Prevenir bots, webhooks o cualquier mensaje que no tenga el prefix
        if (msg.author.bot || msg.webhookID || !msg.content.startsWith(client.config.prefix)) return;


        // Definir argumentos y eso
        const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g); // Dividir argumentos con espacio
        const cmd = args.shift()?.toLowerCase(); // Obtener comando
        const command = client.commands.get(cmd) || client.aliases.get(cmd);
        const data = client.commands.get(cmd); // Obtener datos del comando


        // Inhibidores y ejecución de comandos

        if (!command) { return }

        else if (data.args && !args.length) {
            // Argumentos requeridos
            return msg.channel.send(`**Faltan argumentos. \nUso:** \`${data.usage}\``);


        } else if (data.guildOnly && msg.channel.type == 'dm') {
            // Comandos únicos para server
            return msg.channel.send('Este comando es exclusivo para servidores');


            //@ts-ignore
        } else if (data.nsfw && !msg.channel.nsfw) {
            // Comandos únicos para canales NSFW
            return msg.channel.send('Este comando solo puede ejecutarse en canales NSFW');


        } else if (data.perms == 'dev' && msg.author.id !== client.config.dev) {
            // Solo desarrollador
            return msg.channel.send('No tienes permiso para usar este comando');


        } else {
            // Ejecución de comandos
            if (command) {
                (command as Command).run(client, msg, args);
            }
        }





    }
}